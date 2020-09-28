import React, {Component} from 'react';

class Developer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="offset-5 mr-10 align-self-center">
                    <img src="assets/icon.png"/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <center><h5>CLOUDFLARE TERRAFORM PROVIDER</h5>
                            <h6>Configure Cloudflare using HashiCorp's “Infrastructure as Code” tool, Terraform
With Cloudflare’s Terraform provider, you can manage your edge using the same familiar tools you use to automate the rest of your infrastructure. Define and store configuration in source code repositories like GitHub, track and version changes over time, and roll back when needed—all without needing to learn the Cloudflare APIs</h6>
                    </center>

                </div>
            </div>    
        </div>);
    }
}

export default Developer;