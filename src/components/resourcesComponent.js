import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ReactDOM from 'react-dom';

class Resources extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className='col-md-2 gray'>
                    <h1>Indexs </h1>
                    <div id="nav-id" className="nav">
                    <a >Getting started</a>
                    <a >Audience for APIs</a>
                    <a >Do's and Don'ts</a>
                    <a >Endpoints</a>
                    </div>
                </div>
                <div  data-target="#nav-id" className="col-md-8 row-content">
                    <div id="sec1">
                        <h2>Getting started</h2>
                        <p>
                        Cloudflare's API exposes the entire Cloudflare infrastructure via a standardized programmatic interface. Using Cloudflare's API, you can do just about anything you can do on cloudflare.com via the customer dashboard.
                        The Cloudflare API is a RESTful API based on HTTPS requests and JSON responses. If you are registered with Cloudflare, you can obtain your API key from the bottom of the "API Tokens" page, found here: Go to My account.
                        </p>
                    </div>
                    <div id="sec2">
                    <h2>Audience for APIs</h2>
                        <p>
                    Cloudflare offers public APIs with three audiences in mind.
                    Cloudflare customers
                    Cloudflare partners
                    Developers
                    Customers: Individuals and organizations all over the world choose Cloudflare to protect and accelerate their web applications. Most customers manage their settings in the web dashboard, built using these APIs. Virtually anything you can do in the customer dashboard may be done via API. Example: purging the Cloudflare edge cache for a single file when it's updated on the origin server.
                    Partners: Many organizations make using Cloudflare a seamless option for improving their customers' performance and security. These APIs make that easier to do at scale. Example: a Cloudflare Certified Hosting Partner may use APIs to toggle basic security mode inside a hosting control panel.
                    Developers: Developers all over the world create useful applications which tie into Cloudflare services. These applications may include plugins and extensions to popular content management systems, apps that are offered in the Cloudflare Apps marketplace, runbooks for specific deployment systems, and many others.</p>
                    </div>
                    <div id="sec3">
                    <h2>Do's and Don'ts</h2>
                        <p>
                        What can you build with Cloudflare APIs?
                        Anything that's useful and follows the guidelines presented here.
                        What should you avoid doing with Cloudflare APIs?
                        Do not do any of the following:
                        Abuse Cloudflare systems or customers
                        Misuse Cloudflare trademarks
                        Misrepresent Cloudflare services as your own
                        Abuse: Follow all guidelines, including the rate limits defined below. Your ability to use the Cloudflare APIs may be terminated, temporarily or permanently, if our systems are abused. Similarly, anything in an application which goes against the goal of making Cloudflare more useful to Cloudflare customers or attempts to mistreat customers or their data will be grounds for termination.
                        Trademarks: Cloudflare has several registered trademarks. Details on how and when you may use Cloudflare trademarks are found at https://www.cloudflare.com/trademark, with links to specifics on logo use and spelling. Please review carefully.
                        Misrepresentation: Draw a clear line between the benefits you provide in your application and those benefits of the Cloudflare service that you enable via API. The APIs are not intended for "white labeling" or reselling Cloudflare services as your own. Nothing in your service or application should create a false sense of endorsement, sponsorship, or association with Cloudflare. You may sell your own application or service which utilizes the Cloudflare APIs, but may not sell Cloudflare services to customers without a commercial agreement with Cloudflare. </p>
                    </div>
                    <div id="sec4">
                    <h2>Endpoints</h2>
                        <p>
                        The API is accessed by making HTTPS requests to a specific version endpoint URL, in which GET, POST, PUT, PATCH, and DELETE methods dictate how your interact with the information available. Every endpoint is accessed only via the SSL-enabled HTTPS (port 443) protocol.
                        Everything (methods, parameters, etc.) is fixed to a version number, and every call must contain one. The latest version is Version 4.
                        The stable base URL for all Version 4 HTTPS endpoints is:
                        https://api.cloudflare.com/client/v4/
                        </p>
                    </div>
                </div>
                </div>
        </div>
        );
    }
}

export default Resources;