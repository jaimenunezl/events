import React, { Component } from "react";

import { CategoryConsumer } from "../context/CategoryProvider";
import { EventConsumer } from "../context/EventProvider";

class Form extends Component {
  state = {
    name: "",
    category: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <EventConsumer>
        {value => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                value.getEvents(this.state);
              }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Search your event by name or category
                </legend>
              </fieldset>
              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    name="name"
                    className="uk-input"
                    type="text"
                    placeholder="City name or event"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="category"
                    onChange={this.handleChange}
                    value={this.state.category}
                  >
                    <option value="" data-uk-form-select>
                      -- Select category --
                    </option>
                    <CategoryConsumer>
                      {value => {
                        return value.categories.map(category => (
                          <option
                            key={category.id}
                            value={category.id}
                            data-uk-form-select
                          >
                            {category.name}
                          </option>
                        ));
                      }}
                    </CategoryConsumer>
                  </select>
                </div>
                <div className="uk-margin" uk-margin="true">
                  <input
                    className="uk-button uk-button-danger"
                    type="submit"
                    value="Search events"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </EventConsumer>
    );
  }
}

export default Form;
