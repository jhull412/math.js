const Math = require("./math");

describe("Math", () => {
  let math;
  beforeEach(() => {
    math = new Math();
  });

  describe("product", () => {
    it("returns zero when either operand is zero", () => {
      expect(math.product(2, 0)).toBe(0);
      expect(math.product(0, 2)).toBe(0);
    });
  });

  describe("sum", () => {
    it("adds 2 positive numbers", () => {
      expect(math.sum(2, 2)).toBe(4);
    });
  });
});
