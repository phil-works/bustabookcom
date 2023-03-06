import React from "react";
import { Container } from "reactstrap";


function Faq() {
    return(
        <Container className="text-center"> 
        <hr />           
            <section>
            <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
            <p className="text-center mb-5">
                Find the answers for the most frequently asked questions below
            </p>

            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2"></i>What is Bustabook?</h6>
                <p>
                    <strong><u>Bustabook</u></strong> is a simple web page that displays the sports odds data that is currently stored in the Oracle contracts.
                </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary"><i className="fas fa-pen-alt text-primary pe-2"></i> What is an Oracle Contract?</h6>
                <p>
                    An Oracle Contract is a smart contract which lives on the blockchain and it's primary purpose is to store data for other contracts to use. For Bustabook it's the Sports data that we are making available. 
                </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary"><i className="fas fa-user text-primary pe-2"></i>Can I gamble from this site?
                </h6>
                <p>
                <strong><u>No.</u></strong> Bustabook does not take any wagers.  We're a provider of data to the blockchain. 
                </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary"><i className="fas fa-rocket text-primary pe-2"></i>How is this site useful?
                </h6>
                <p>
                    The goal of site is to display the data store in the smart contracts in a simple, easy manner.
                </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary"><i className="fas fa-home text-primary pe-2"></i> How frequently are the odds updated?
                </h6>
                <p>The schedule is coming soon...   ideally we would update the odds 4 times a day for all sports. The scores will be set within 4 hours of the events completion.</p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary"><i className="fas fa-book-open text-primary pe-2"></i> Where can I find out more details about writing a wagering contract?</h6>
                <p>
                    At my github! Coming soon. 
                </p>
                </div>
            </div>
            </section>
        </Container>

    );

}

export default Faq;

