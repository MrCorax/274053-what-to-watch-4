import Main from "../main/main";

const App = (props) => {

  const {filmTitlePromo, filmGenre, filmYear, filmTitles} = props;

  return (
    <Main
      titlePromo={filmTitlePromo}
      genre={filmGenre}
      year={filmYear}
      filmTitles={filmTitles}
    />
  );
};

App.propTypes = {
  // Массив строк
  filmTitles: PropTypes.arrayOf(PropTypes.string.isRequired),

  filmTitlePromo: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.number.isRequired
};

export default App;
