import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

import CategoryProvider from "./context/CategoryProvider";
import EventProvider from "./context/EventProvider";

function App() {
  return (
    <EventProvider>
      <CategoryProvider>
        <Header />
        <div className="uk-container">
          <Form />
        </div>
      </CategoryProvider>
    </EventProvider>
  );
}

export default App;
