//dont use import otherwise it doesn't work.
let sum = module.require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
