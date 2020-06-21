import Main from "./main";

it(`Should Main render correctly`, () => {
  const filmTitles = [
    `fiml titile one`,
    `fiml titile two`,
    `fiml titile three`
  ];

  const tree = renderer.create(
      <Main
        titlePromo={`The Grand Budapest Hotel`}
        genre={`Drama`}
        year={2014}
        filmTitles={filmTitles}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
