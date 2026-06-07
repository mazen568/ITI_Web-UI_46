const chai = require("chai");
const expect = chai.expect;

describe("fetch users api", function () {
  this.timeout(20000);
  it("should return an array with length 30 and type array", async function () {
    try {
      const response = await fetch("https://dummyjson.com/users");

      expect(response.ok).to.be.true;

      const data = await response.json();

      expect(data.users.length).to.equal(30);

      expect(data.users).to.be.an("array");
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
});
