import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import EventList from "./components/EventList";

import CategoryProvider from "./context/CategoryProvider";
import EventProvider from "./context/EventProvider";

function App() {
  return (
    <EventProvider>
      <CategoryProvider>
        <Header />
        <div className="uk-container">
          <Form />
          <EventList />
        </div>
      </CategoryProvider>
    </EventProvider>
  );
}

export default App;
