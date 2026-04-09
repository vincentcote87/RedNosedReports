enum Direction {
  Increasing,
  Decreasing,
  Equal,
}

export const analyzeReports = (reports: string): number => {
  let result = 0;
  const reportList: string[] = reports.trim().split("\n");
  console.log(reportList);

  reportList.forEach((report) => {
    if (isReportSafe(report)) result++;
  });

  return result;
};

export const isReportSafe = (report: string): boolean => {
  const data: number[] = report.split(" ").map(Number);

  if (data.length < 2) return false;

  const direction = getDirection(data[0]!, data[1]!);

  for (let i = 0; i < data.length - 1; i++) {
    const first = data[i]!;
    const second = data[i + 1]!;

    const thisDirection = getDirection(first, second);

    // direction changed or the two values are not increasing or decreasing
    if (thisDirection !== direction || direction === Direction.Equal)
      return false;

    // the spread is greater than the allowed three
    if (Math.abs(first - second) > 3) return false;
  }

  return true;
};

const getDirection = (a: number, b: number): Direction => {
  return a > b
    ? Direction.Increasing
    : a < b
      ? Direction.Decreasing
      : Direction.Equal;
};
