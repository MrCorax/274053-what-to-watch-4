import Main from "./main";

it(`Should Promo Title be pressed`, () => {
  const onPromoTitleButtonClick = jest.fn();
  const filmTitles = [
    `fiml titile one`,
    `fiml titile two`,
    `fiml titile three`
  ];

  const main = shallow(
      <Main
        titlePromo={`The Grand Budapest Hotel`}
        genre={`Drama`}
        year={2014}
        filmTitles={filmTitles}
        onPromoTitleButtonClick={onPromoTitleButtonClick}
      />
  );

  const titleButtons = main.find(`h3.small-movie-card__title`);

  titleButtons.map((titleButton) => (titleButton.props().onClick()));

  expect(onPromoTitleButtonClick.mock.calls.length).toBe(3);
});
