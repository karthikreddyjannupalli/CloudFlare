import React, {Component, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardText, CardTitle, Col, Nav, NavItem, Row, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames'


const Pricing = (props) => {
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
      <div className="container">
        <Nav tabs>
          <NavItem className="mr-auto">
            <a
              className={classNames({ active: activeTab === '1' })}
              className='btn btn-success'
              onClick={() => { toggle('1'); }}
            >
              Free
            </a>
          </NavItem>
          <NavItem>
            <a
              className={classNames({ active: activeTab === '2' })}
              className='btn btn-danger'
              onClick={() => { toggle('2'); }}
            >
              Paid
            </a>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>FREE</h4>
                <p>
                $0 / mo

Cloudflare for Individuals is built on our global network. This package is ideal for people with personal or hobby projects that aren’t business-critical.

Support response: Median email response time of less than 24 hours.
                </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <h4>Enterprise</h4>

Ask for Quote

Cloudflare's Enterprise plan is for mission-critical applications that are core to your business. Whether you are small or large, Cloudflare's Enterprise plan provides you with advanced security, performance and reliability features.

Support response: Median email response time of less than 1 hour.
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

export default Pricing;