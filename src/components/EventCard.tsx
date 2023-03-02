import {  Card, CardBody, CardHeader, CardText }  from 'reactstrap';
import { DataStore } from "../context/interfaces";


function EventCard(packagedData: { globalItem: [], localItem: [], decoded: DataStore.SportsEvent }  ) {

  const eventData = packagedData.decoded
  const the_date = Number(eventData.start_time )
  var temp_start = new Date(the_date * 1000)
  var the_start = temp_start.toUTCString()
  var local_date = temp_start.toDateString()
  var local_time = temp_start.toTimeString()

  var away_spread =  Number(eventData.away_spread) / 10 - 100
  var home_spread = Number(eventData.home_spread) /10 - 100
  var away_money_line = Number(eventData.away_money_line) / 1000
  var home_money_line = Number(eventData.home_money_line) / 1000
  var over_under = Number(eventData.over_under) / 10

  return (
      <Card key={eventData.id} >
          <CardHeader>
            {eventData.away_team} vs {eventData.home_team}
          </CardHeader>
          <CardBody>
          <CardText> 
                  { local_date }<br />
                  { local_time }<br />
                  <br />
                  Spread:<br />
                  {eventData.away_team}: {away_spread}<br />
                  {eventData.home_team}: {home_spread}<br />
                  <br />
                  Money Lines:<br />
                  {eventData.away_team}: {away_money_line}<br />
                  {eventData.home_team}: {home_money_line}<br />
                  <br />
                  Over / Under:<br />
                  {over_under} <br />  
                  details...<br />                  
                  GameID: {eventData.id}<br />
                  EventStatus: {eventData.event_status}<br />   
              </CardText>
          </CardBody>             
      </Card>
  

  );
}



export default EventCard;