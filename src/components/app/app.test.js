import App from "./app";

it(`Render App`, () => {
  const filmTitles = [
    `fiml titile one`,
    `fiml titile two`,
    `fiml titile three`
  ];

  const tree = renderer.create(
      <App
        filmTitlePromo={`The Grand Budapest Hotel`}
        filmGenre={`Drama`}
        filmYear={2014}
        filmTitles={filmTitles}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
