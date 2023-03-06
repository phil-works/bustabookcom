import React, { useState } from "react";
import { Nav, NavItem, NavLink, Container, TabContent, TabPane } from 'reactstrap';
import  CardBox  from './CardBox'

 function Rack(){
    const [activeTab, setActiveTab] = useState('1');
    const toggle = (tab: React.SetStateAction<string>) => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
    
    <Container>
    <br />
    <Nav pills fill>
        <NavItem>
          <NavLink 
            className={activeTab === '1' ? "active active-tab" : ""}
            onClick={() => { toggle('1'); }}>
            NBA
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  
            className={activeTab === '2' ? "active active-tab" : ""}
            onClick={() => { toggle('2'); }}>
            XFL
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            className={activeTab === '3' ? "active active-tab" : ""}
            onClick={() => { toggle('3'); }}>
            NFL
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '4' ? "active active-tab" : ""}
            onClick={() => { toggle('4'); }}>
            NCAA Men's BB
          </NavLink>
        </NavItem>
    </Nav>
    <hr />
    <TabContent activeTab={activeTab}>        
        <TabPane tabId="1">
        <br /><br />
            <CardBox app_id='1049622668' />
        </TabPane>
        <TabPane tabId="2">
        <br /><br />
            <CardBox app_id='1049626745' />
        </TabPane>
        <TabPane tabId="3">
        <br /><br />            
            <CardBox app_id='1022971265' />
        </TabPane>
        <TabPane tabId="4">
        <br /><br />
            <h2>NCAA Men's Basketball is coming... maybe next year.</h2><br /><br /><br /><br />
        </TabPane>
    </TabContent>
    </Container>
    
);
}

export default Rack;