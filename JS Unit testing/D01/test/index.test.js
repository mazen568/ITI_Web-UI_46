//test 1
describe("capitalizeText", () => {
  it("should return a string", () => {
    expect(capitalizeText("mazen")).to.be.a("string");
  });
  it("should return the string after capitalizing it", () => {
    expect(capitalizeText("mazen")).to.equal("MAZEN");
  });
  it("should throw type error if the input is not a string", () => {
    expect(() => capitalizeText(12)).throw("parameter should be string");
  });
  it("should accept one parameter only", () => {
    expect(capitalizeText.length).to.equal(1);
  });
});

//test 2
describe("createArray", () => {
  it("should return an array", () => {
    expect(createArray(3)).to.be.an("array");
  });
  it("should return an array of length 3 and include 1", () => {
    expect(createArray(3)).to.have.lengthOf(3);
    expect(createArray(3)).to.include(1);
  });
  //pending test case 3shan 3mlnalha skip(did not execute)
  it("should delay the testing process for 5 seconds", function (done) {
    this.timeout(6000);
    setTimeout(() => {
      expect(createArray(3)).to.be.an("array");
      done();
    }, 5000);
  });
  it("styles test", () => {
    expect(createArray(3)).to.be.an("array");
    createArray(3).should.be.an("array");
    assert.isArray(createArray(3));
  });
  it("pending test case")
});

//test 3
describe("object equality", () => {
  it("should check whether obj1 is equal to obj2 using expect", () => {
    expect(obj1).deep.equal(obj2);
    // expect(obj1).equal(obj2);
  });
  it("should check whether obj1 is equal to obj2 using should", () => {
    // obj1.should.equal(obj2);
    obj1.should.deep.equal(obj2);
  });
  it("should check whether obj1 is equal to obj2 using assert", () => {
    // assert.equal(obj1, obj2);
    assert.deepEqual(obj1, obj2);
  });
});

//test 4
describe("check positivity", () => {
  it("should return true if x is greater than 0", () => {
    expect(CheckPositivity(4)).to.be.true;
    CheckPositivity(4).should.be.true;
    assert.isTrue(CheckPositivity(4));
  });
  it("should return false if x is less than 0", () => {
    expect(CheckPositivity(-1)).to.be.false;
    CheckPositivity(-1).should.be.false;
    assert.isFalse(CheckPositivity(-1));
  });
  it("should return false if x is equal to 0", () => {
    expect(CheckPositivity(0)).to.be.false;
    CheckPositivity(0).should.be.false;
    assert.isFalse(CheckPositivity(0));
  });
});

//test 5
describe("Mult function", () => {
  it("should make sure that x > 0", () => {
    assert.isAbove(10, 0);
  });
  it("should make sure that the returned number will be above zero", () => {
    assert.isAbove(Mult(10), 0);
  });
});


//test 6
describe("object inclusion", () => {
  it("should check 'a.b[0]' will include {x: 1}", () => {
    assert.deepInclude(obj3.a.b[0], { x: 1 });
  });   
});

// 8 in browser
