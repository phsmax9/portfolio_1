import React from "react";
import "./App.css";
import Proptypes from "prop-types";
import Header from "./components/header";
import Contents from "./components/contents";

function App({ year }) {
  React.useEffect(() => {
    document.title = "박한순 - 포트폴리오";

    return function unMount() {};
  });

  return (
    <div className="App">
      <Header />
      <Contents year={year} />
    </div>
  );
}

App.propTypes = {
  year: Proptypes.string.isRequired,
};

export default App;
