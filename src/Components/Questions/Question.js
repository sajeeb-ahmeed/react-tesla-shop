import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Question.css'
const Question = () => {
    return (
        <div className='container relative col-12 mt-5'>
            <div>
                <div class="container mb-5">
                    <div class="ticker">
                        <div class="title">
                            <h5>DO Yo Know ! 😬 </h5>
                        </div>
                        <div class="news">
                            <marquee class="news-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto </p>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam </p>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How does React work?</Accordion.Header>
                    <Accordion.Body>
                        React is a JavaScript library <code>(not a framework)</code> that creates  user interfaces <code>(UIs)</code> in a predictable and efficient way  using declarative code. <br /> React works in declarative code.We use declarative code  to create components, which is how we display information. <br /> Essentially, components are reusable UIs which allow you to split the app into separate blocks  that act independently of each other. <br /> Components accept an arbitrary input with data (a prop) and return a React element to declare what should appear on screen. <br /> They can interact with other components via props to create a complex UI.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Props Vs State</Accordion.Header>
                    <Accordion.Body>
                        State is the local state of the component which cannot be accessed and modified outside of the component. <br /> It's equivalent to local variables in a function. <br /> Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. <br />
                        State should contain data that a component's event handlers may change to trigger a UI update. <br /> In real apps this data tends to be very small and JSON-serializable
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Question;