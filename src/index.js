import ReactDOM from "react-dom";
import App from "@components/app/app";
import {filmSettings, FILM_TITLES} from "./consts";

const init = () => {

  ReactDOM.render(
      <App
        filmTitlePromo={filmSettings.FILM_TITLE}
        filmTitles={FILM_TITLES}
        filmGenre={filmSettings.FILM_GENRE}
        filmYear={filmSettings.FILM_YEAR}
      />,
      document.querySelector(`#root`)
  );
};
init();
