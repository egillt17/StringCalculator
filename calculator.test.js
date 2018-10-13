const add = require("./calculator");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
    expect(add("5")).toBe(5);
});

it("should return the sum of two given numbers", () => {
    expect(add("1,2")).toBe(3);
});

it("should sumerize multiple numbers", () => {
    expect(add("1,2,3,2")).toBe(8);
});

it("should allow new lines between numbers", () => {
    expect(add("2, 1 \n 2")).toBe(5);
});

it("should throw an exception 'negatives not allowed: ", () => {
    expect(add("-1, -3, 2")).toThrow("Negatives not allowed: -1, 3");
});
