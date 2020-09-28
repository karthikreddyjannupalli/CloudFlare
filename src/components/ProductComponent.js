import React, {Component} from 'react';

class Product extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-sm-6">
                <h3><b>Comprehensive DDoS Protection</b></h3>
                
                <h5>Built for anything connected to the Internet</h5>
                <p>Cloudflare DDoS protection secures websites, applications, and entire networks while ensuring the performance of legitimate traffic is not compromised.
                </p>
                <p>
                Cloudflare’s 42 Tbps network blocks an average of 72 billion threats per day, including some of the largest DDoS attacks in history.
                </p>
                </div>
                <div className="col-12 col-sm-6">
                    <img src="assets/ddos.png" width="110%"/>
                </div>
            </div>
            
        </div>);
    }
}

export default Product;