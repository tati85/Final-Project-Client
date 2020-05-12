import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatableTrans = (props) => {
    const data = {
        columns: props.transactionsColumns,
        rows: props.transactionsData
    };

    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
    );
}

export default DatatableTrans;