import React,{ Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import Developer from "./developerComponent";
import Footer from "./footer";
import ForEnterprise from "./forEnterpriseComponent";
import Header from './headerComponent';
import Pricing from "./pricingComponent";
import Product from "./ProductComponent";
import Resources from "./resourcesComponent";
import Solution from "./SolutionComponent";

class Main extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
            <Header />
            <Switch>
            <Route path="/products" component={Product} />
            <Route path="/solutions" component={Solution}/>
            <Route path='/resources' component={Resources}/>
            <Route path='/developer' component={Developer} />
            <Route path="/forenterprise" component={ForEnterprise} />
            <Route path="/pricing" component={Pricing} />
            <Redirect to="/" />
          </Switch>
            <Footer />
            </div>
        );
    }
}

export default Main;