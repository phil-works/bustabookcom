import { useState, useEffect } from 'react';
import { Col, Container, Row } from "reactstrap";
import EventCard from './EventCard'
import algosdk from 'algosdk';
import { Buffer } from 'buffer';
import { DataStore } from "../context/interfaces";
import  ContractDetails  from './ContractDetails'


window.Buffer = Buffer;

async function fetchLocalDataList(app_id) {

  const res = await fetch("https://node.algoexplorerapi.io/v2/applications/" + app_id)
  const data = await res.json()
  const globals = data.params["global-state"].filter((item: any) => item.key !== "VGl0bGU=")
  const localDataList = []

  var bigItem = {globalItem: [], localItem: [], decoded: {}}

  for (const item of globals) {
    var newCard: DataStore.SportsEvent ={}
    const pretty_address = algosdk.encodeAddress(new Buffer(item.value.bytes, 'base64')); 
    const res = await fetch("https://node.algoexplorerapi.io/v2/accounts/" + pretty_address + "/applications/" + app_id)
    const data = await res.json()
    const eventData: DataStore.EventDetails[] = data["app-local-state"]["key-value"]
    for (var ts of eventData) {
      const theKey = new Buffer(ts["key"], 'base64').toString('utf8');
      switch(theKey) {
        case "AwaySpread": 
          newCard.away_spread = ts["value"]["uint"] 
          break;  
        case "HomeMoneyLine": 
          newCard.home_money_line = ts["value"]["uint"]
          break;
        case "AwayMoneyLine": 
          newCard.away_money_line = ts["value"]["uint"]
          break;
        case "HomeTeam": 
          newCard.home_team = new Buffer(ts["value"]["bytes"], 'base64').toString('utf8')
          break;
        case "HomeSpread": 
          newCard.home_spread = ts["value"]["uint"]
          break;
        case "AwayTeam": 
          newCard.away_team = new Buffer(ts["value"]["bytes"], 'base64').toString('utf8')
          break;
        case "GameID":
          newCard.id = new Buffer(ts["value"]["bytes"], 'base64').toString('utf8')
          break;
        case "OverUnder": 
          newCard.over_under = ts["value"]["uint"]
          break;
        case "Status": 
          newCard.event_status = new Buffer(ts["value"]["bytes"], 'base64').toString('utf8')
          break;
        case "StartTime": 
          newCard.start_time = ts["value"]["uint"]
          break;
        case "Name": 
          newCard.event_name = new Buffer(ts["value"]["bytes"], 'base64').toString('utf8')
          break;   
        }
    }     

    bigItem = { globalItem: item, localItem: data, decoded: newCard } 
    localDataList.push(bigItem)
  }

  return {globals, localDataList}
}


function CardBox(props) { 
  
  const [globals, setGlobals] = useState<DataStore.Events[]>([]);
  const [localDataList, setLocalDataList ] = useState<any>([]);

  useEffect(() => {   
    fetchLocalDataList(props["app_id"]).then(({globals, localDataList}) => {
        setGlobals(globals)
        setLocalDataList(localDataList)
    }) 
  }, []); 
  
  if (globals) {
    return(
        <div>
          <Container className="text-center">
          <ContractDetails app_id={props["app_id"]}/>
            <br /><br />              
              <Row sm="1" xs="1" md="3" lg="3" xl="3">
                  {  localDataList.map((listedEvent) => (  <Col key={listedEvent.decoded.id}>{EventCard(listedEvent)}<br /></Col> )) }
              </Row>
          </Container>        
        </div>
    );
  } else {
    return (<div>There are no games listed at this time...</div>);
  }
}

export default CardBox;