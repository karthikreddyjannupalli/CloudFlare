import React, {Component} from 'react';
import { Card, CardBody, CardHeader, CardImg } from 'reactstrap';

class Solution extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-4">
            <Card className="gray">
                <CardImg src="assets\icon-ddos-blue.png" width="50%" height="50%"/>
                <CardHeader>
                <b>Built for web applications</b>
                </CardHeader>
                <CardBody>
                Our unmetered, always-on DDoS protection for your web assets (HTTP/HTTPs) is powered by the intelligence harnessed from Cloudflare’s always-learning global network. Cloudflare DDoS protection works in tandem with our cloud web application firewall (WAF), Bot Management, and other L3/4 security services to protect assets from cyber threats of all kinds.
                </CardBody>
            </Card>
            </div>
                <div className="col-10 col-md-4">
            <Card className="gray">
                <CardImg src="assets\icon-Spectrum-blue.png" width="50%" height="50%"/>
                <CardHeader>
                <b>Built for web applications</b>
                </CardHeader>
                <CardBody>
                Our unmetered, always-on DDoS protection for your web assets (HTTP/HTTPs) is powered by the intelligence harnessed from Cloudflare’s always-learning global network. Cloudflare DDoS protection works in tandem with our cloud web application firewall (WAF), Bot Management, and other L3/4 security services to protect assets from cyber threats of all kinds.
                </CardBody>
            </Card>
                </div>
                <div className="col-10 col-md-4">
            <Card className="gray">
                <CardImg src="assets\icon-security-blue.png" width="50%" height="50%"/>
                <CardHeader>
                <b>Built for web applications</b>
                </CardHeader>
                <CardBody>
                Our unmetered, always-on DDoS protection for your web assets (HTTP/HTTPs) is powered by the intelligence harnessed from Cloudflare’s always-learning global network. Cloudflare DDoS protection works in tandem with our cloud web application firewall (WAF), Bot Management, and other L3/4 security services to protect assets from cyber threats of all kinds.
                </CardBody>
            </Card>
                </div>
            </div>
        </div>);
    }
}

export default Solution;