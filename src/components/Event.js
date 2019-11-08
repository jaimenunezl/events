import React from "react";

function Event({ event }) {
  let { text } = event.description;

  if (text) {
    if (text.length > 250) {
      text = text.substring(0, 250);
    }
  } else {
    text = null;
  }

  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {event.logo ? (
            <img src={event.logo.url} alt={event.name.text} />
          ) : null}
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{event.name.text}</h3>
          <p>{text}</p>
        </div>
        <div className="uk-card-footer">
          <a href={event.url} className="uk-button uk-button-secondary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
}

export default Event;
