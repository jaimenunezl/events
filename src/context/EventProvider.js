import React, { Component } from "react";
import axios from "axios";

const EventContext = React.createContext();
export const EventConsumer = EventContext.Consumer;

class EventProvider extends Component {
  token = "IUBBOV4PH7UBB4P5DC3U";
  sort = "date";

  state = { events: [] };

  getEvents = async search => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&token=${this.token}&sort_by=${this.sort}`;

    const response = await axios(url);
    console.log(response);
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
