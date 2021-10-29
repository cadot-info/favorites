const favorites = require("./favorites.js");

const fav = new favorites();

test("var by default", () => {
  expect(fav.get()).toBe("favoritesj'aimeje n'aime plus");
});
