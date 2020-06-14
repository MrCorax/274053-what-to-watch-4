import React from "react";
import ReactDOM from "react-dom";
import App from "@components/app/app.jsx";

const init = () => {
  const filmSettings = {
    filmTitle: `The Grand Budapest Hotel`,
    filmGenre: `Drama`,
    filmYear: `2020` // 2014
  };

  ReactDOM.render(
      <App
        filmTitle={filmSettings.filmTitle}
        filmGenre={filmSettings.filmGenre}
        filmYear={filmSettings.filmYear}
      />,
      document.querySelector(`#root`)
  );
};
init();
