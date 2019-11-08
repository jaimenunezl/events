import React from "react";
import Event from "./Event";

import { EventConsumer } from "../context/EventProvider";

function EventList(props) {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <EventConsumer>
        {value => {
          return value.events.map(event => (
            <Event key={event.id} event={event} />
          ));
        }}
      </EventConsumer>
    </div>
  );
}

export default EventList;
