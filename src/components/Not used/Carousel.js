import React from 'react';

import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer
}

    from 'mdbreact';
import NavBar from '../NavBar/NavBar';



const CarouselPage = () => {
    console.log("im carousel*************************************************");

    return (<MDBContainer fluid>

        <MDBCarousel activeItem={
            1
        }

            length={
                3
            }

            showControls={
                true
            }

            showIndicators={
                true
            }

            className="z-depth-1 my-pos position-absolute w-100 h-100">
            <MDBCarouselInner >
                <MDBCarouselItem itemId="1" className='h-100'>
                    <MDBView> <img className="d-block w-100 h-100"
                        src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="First slide" />
                        <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3> <p>First text</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId="2" className='h-100'>
                    <MDBView> <img className="d-block w-100 h-100"
                        src="https://images.pexels.com/photos/929288/pexels-photo-929288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Second slide" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive">Strong mask</h3> <p>Second text</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId="3" className='h-100'>
                    <MDBView> <img className="d-block w-100 h-100"
                        src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Third slide" />
                        <MDBMask overlay="black-slight" /> </MDBView> <MDBCarouselCaption> <h3 className="h3-responsive">Slight Mast</h3> <p>Third text</p> </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
        <NavBar />
    </MDBContainer>);

}

export default CarouselPage;