const fetchData = function () {
  return new Promise((resolve, reject) => {
    resolve("peanut butter");
  });
};

//if the fetchdata promise fails, resolves automaticly fails also.
//PASS
test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});
