import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Question.css'
const Question = () => {
    return (
        <div className='container relative col-12 mt-5'>
            <div>
                <div class="container mb-5">
                    <div class="ticker">
                        <div class="title px-3">
                            <h5>You Know What! 😍 </h5>
                        </div>
                        <div class="news">
                            <marquee class="news-content">
                                <p>আমরা প্রোগ্রামিং হিরো হতে পারি বা না পারি, আমাদের উদ্দেশ্য হচ্ছে যারা সিরিয়াসলি প্রোগ্রামিং হিরো হতে চায় তাদের হেল্প করা। 🏃‍♂️🏃তাদের লার্নিং প্রসেসকে এঞ্জয়েবল এবং এফেক্টিভ করে তোলা। এই প্রচেষ্টায় আমরা নিত্য নতুন জিনিস শিখছি, চেষ্টা করছি। </p>
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