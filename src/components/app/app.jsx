import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {filmTitle, filmGenre, filmYear} = props;

  return (
    <Main
      title={filmTitle}
      genre={filmGenre}
      year={filmYear}
    />
  );
};

export default App;
