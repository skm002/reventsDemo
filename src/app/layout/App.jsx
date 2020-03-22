import React, {Component, Fragment} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'
import { Container } from 'semantic-ui-react';
import EventList from '../../features/event/EventList/EventList';

class App extends Component {
  render(){
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
