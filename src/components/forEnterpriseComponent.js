import React, {Component} from 'react';

class ForEnterprise extends Component{
    constructor(props){
        super(props);
        this.state={
            ip : '',
            visitors: 0,
            place: ''
        }
        this.fetchIp=this.fetchIp.bind(this);
    }
    fetchIp(){
        
    };
    componentDidMount(){
        fetch("https://api.ipdata.co?api-key=test")
        .then(response => {
            return response.json();
        }, "jsonp")
        .then(res => {
            console.log(res);
            this.setState({
                ip: res.ip,
                visitors: this.state.visitors+1,
                place: res.city
            });
    })
        .catch(err => console.log(err))
    };
    
    render(){
        return(<div className="container">
            <h4>ForEnterprise</h4>
            Ip address: {this.state.ip}<br></br>
            place: {this.state.place}<br></br>
            visitors: {this.state.visitors}
        </div>);
    }
}

export default ForEnterprise;