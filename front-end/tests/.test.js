const chrono = require("../src/assets/chrono.js");

test("6 => 06", () => {
    expect(chrono.zeroer("6")).toBe("06");
});

test("66 is not affected", () => {
    expect(chrono.zeroer("66")).toBe("66");
});

test("06 is not affected", () => {
    expect(chrono.zeroer("06")).toBe("06");
});

test("[23, 09] => [23, 9]", () => {
    expect(chrono.trim_clock(["23", "09"])).toStrictEqual(["23", "9"]);
});

test("parseFloat(get_time(4.5 hours)) => float", () => {
    expect(parseFloat(chrono.get_time("4.5 hours"))).toBe(4.5);
});







