import React from 'react';
import { MDBTable, MDBIcon, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { paidCardBill, paidOffBills, getCardBills, getOffBills } from "../../actions/accountActions";
import PropTypes from "prop-types";
import DayPicker from "react-day-picker";


class BillCardList extends React.Component {
    componentDidMount() {
        this.props.getCardBills();
        this.props.getOffBills();
    }
    onPaidCardClick = id => {
        this.props.paidCardBill(id);
    }
    onPaidCardOffClick = id => {
        this.props.paidOffBills(id);
    }

    render() {
        const { billsOff, bills } = this.props.plaid;
        let cards, offline;
        if (bills) {
            cards = bills.map(account => {
                <tr key={account._id}>
                    <td>{account.instituitionName}</td>
                    <td>{account.balance}</td>
                    <td>{account.dueDate}</td>
                    <td><MDBBtn outline color="secondary" onClick={() => this.onPaidCardClick(account._id)}><MDBIcon icon="check-circle" /> Mark as Paid </MDBBtn></td>
                    <td><MDBBtn outline color="secondary" ><MDBIcon icon="plus" /> Add remainder</MDBBtn></td>
                </tr>
            });
        }
        if (billsOff) {
            offline = billsOff.map(account => {
                <tr key={account._id}>
                    <td>{account.name}</td>
                    <td>{account.amount}</td>
                    <td>{account.dueDate}</td>
                    <td><MDBBtn outline color="secondary" onClick={() => this.onPaidCardOffClick(account._id)}><MDBIcon icon="check-circle" /> Mark as Paid </MDBBtn></td>
                    <td><MDBBtn outline color="secondary" ><MDBIcon icon="plus" /> Add remainder</MDBBtn></td>
                </tr>
            });

        }
        console.log(cards);

        return (
            <div>
                <DayPicker
                    month={new Date(2017, 4, 5)}
                    todayButton="Go to Today"
                    modifiers={{
                        foo: new Date(),
                    }}
                    onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)}
                />
                {!accountsOff ? <h3>There are no Offline Accounts at this moment</h3>
                    : <div>
                        <MDBTable borderless className="mt-3">
                            <MDBTableHead>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Due Date</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {cards}
                            </MDBTableBody>

                        </MDBTable>
                    </div>
                }
            </div>
        )
    }

}

BillCardList.propTypes = {
    getCardBills: PropTypes.func.isRequired,
    paidCardBill: PropTypes.func.isRequired,
    getOffBills: PropTypes.func.isRequired,
    paidOffBills: PropTypes.func.isRequired,
    plaid: PropTypes.object.isRequired,

};
const mapStateToProps = state => ({
    plaid: state.plaid
});
export default connect(mapStateToProps, { getCardBills, paidCardBill, getOffBills, paidOffBills })(BillCardList);
