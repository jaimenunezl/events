import React, { Component } from "react";
import axios from "axios";

// import { eventsStorage } from "../data/Events";

const EventContext = React.createContext();
export const EventConsumer = EventContext.Consumer;

class EventProvider extends Component {
  token = "IUBBOV4PH7UBB4P5DC3U";
  sort = "date";

  state = { events: [] };

  getEvents = async search => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&token=${this.token}&sort_by=${this.sort}`;
    const response = await axios(url);
    const { events } = response.data;
    this.setState({ events });

    // this.setState({ events: eventsStorage });
  };

  render() {
    return (
      <EventContext.Provider
        value={{ events: this.state.events, getEvents: this.getEvents }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

export default EventProvider;
