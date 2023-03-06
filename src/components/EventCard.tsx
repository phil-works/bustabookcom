import {  Card, CardBody, CardHeader, CardText, Row, Col }  from 'reactstrap';
import { DataStore } from "../context/interfaces";
import format from 'date-fns/format'



function EventCard(packagedData: { globalItem: [], localItem: [], decoded: DataStore.SportsEvent }  ) {

  const eventData = packagedData.decoded
  const the_date = Number(eventData.start_time )
  var temp_start = new Date(the_date * 1000)
  const formattedDate = format(temp_start,'MMMM dd yyyy - hh:mm a')


  var away_spread =  Number(eventData.away_spread) / 10 - 100
  var home_spread = Number(eventData.home_spread) /10 - 100
  var away_money_line = Number(eventData.away_money_line) / 1000
  var home_money_line = Number(eventData.home_money_line) / 1000
  var over_under = Number(eventData.over_under) / 10

  return (
      <Card key={eventData.id} >
          <CardHeader>
            {eventData.away_team} vs {eventData.home_team}
            <br />{ formattedDate }
          </CardHeader>
          <CardBody>
          <CardText>                   
                  <Row><Col className="text-start">Spread:</Col><Col></Col></Row>                  
                  <Row><Col  className="text-end">{eventData.away_team}:</Col><Col className="text-start"> {away_spread}<br /></Col></Row>
                  <Row><Col className="text-end">{eventData.home_team}:</Col><Col className="text-start"> {home_spread}<br /></Col></Row>
                  <Row><Col><br /></Col></Row>
                  <Row><Col className="text-start">Money Lines:</Col><Col></Col></Row> 
                  <Row><Col className="text-end">{eventData.away_team}:</Col><Col className="text-start"> {away_money_line}<br /></Col></Row>
                  <Row><Col className="text-end">{eventData.home_team}:</Col><Col className="text-start"> {home_money_line}<br /></Col></Row>
                  <Row><Col><br /></Col></Row>
                  <Row><Col className="text-end">Over / Under:</Col><Col className="text-start">{over_under}  </Col></Row>
                  
                  {/* details...<br />                  
                  GameID: {eventData.id}<br />
                  EventStatus: {eventData.event_status}<br />    */}
              </CardText>
          </CardBody>             
      </Card>
  

  );
}



export default EventCard;