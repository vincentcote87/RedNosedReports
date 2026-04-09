import { analyzeReports, isReportSafe } from "..";

describe("Red-Nosed Reports - isReportSafe", () => {
  it("returns false with report only contains 1 level", () => {
    const result = isReportSafe("1");

    expect(result).toBe(false);
  });

  it("returns true with a safe report of two levels", () => {
    const result = isReportSafe("1 2");

    expect(result).toBe(true);
  });

  it("returns false with an unsafe report of two levels", () => {
    const result = isReportSafe("1 5");

    expect(result).toBe(false);
  });

  it("returns false when level contains values that do not increase or decrease", () => {
    const result = isReportSafe("5 5");

    expect(result).toBe(false);
  });

  it("returns false if level has both increase and decrease", () => {
    const result = isReportSafe("1 2 1");

    expect(result).toBe(false);
  });

  it("returns true with safe level", () => {
    const result = isReportSafe("7 6 4 2 1");

    expect(result).toBe(true);
  });

  it("returns false with unsafe level", () => {
    const result = isReportSafe("1 2 7 8 9");

    expect(result).toBe(false);
  });
});

describe("Red-Nosed Reports - analyzeReports", () => {
  it("can analyze multiple reports", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const result = analyzeReports(input);

    expect(result).toBe(2);
  });
});
