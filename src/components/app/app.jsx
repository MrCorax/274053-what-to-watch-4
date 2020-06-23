import Main from "../main/main";

const promoTitleButtonHandler = () => {};

const App = (props) => {

  const {filmTitlePromo, filmGenre, filmYear, filmTitles} = props;

  return (
    <Main
      titlePromo={filmTitlePromo}
      genre={filmGenre}
      year={filmYear}
      filmTitles={filmTitles}
      onPromoTitleButtonClick={promoTitleButtonHandler}
    />
  );
};

App.propTypes = {

  filmTitles: PropTypes.arrayOf(PropTypes.string.isRequired),

  filmTitlePromo: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.number.isRequired
};

export default App;
