// for date-related operations within applications
const dayjs = require("dayjs");
// const isLeapYear = require("dayjs/plugin/isLeapYear");
// dayjs.extend(isLeapYear);

// Year of remaining
function computeYearsRemaining(MaturityDate, baseDate) {
  if (typeof MaturityDate !== "string" || typeof baseDate !== "string") {
    throw new TypeError("Maturity date and baseDate must be string");
  } else {
    console.log("types are OK!");
  }
  MaturityDate = dayjs(MaturityDate);
  console.log(MaturityDate.month());
  baseDate = dayjs(baseDate);
  console.log(baseDate.format("YYYY-MM-DD"));
  let intPayDateBaseYear = dayjs()
    .set("y", baseDate.year())
    .set("M", MaturityDate.month())
    .set("D", MaturityDate.date());
  console.log(intPayDateBaseYear.format("YYYY-MM-DD"));
  let prevIntPayDate = intPayDateBaseYear.subtract(1, "y");
  console.log(prevIntPayDate.format("YYYY-MM-DD"));
  let nextIntPayDate = intPayDateBaseYear.add(1, "y");
  console.log(nextIntPayDate.format("YYYY-MM-DD"));
  let YearsRemaining;
  if (intPayDateBaseYear.isBefore(baseDate)) {
    console.log(baseDate.diff(intPayDateBaseYear, "d"));
    YearsRemaining =
      1 -
      baseDate.diff(intPayDateBaseYear, "d") /
        nextIntPayDate.diff(intPayDateBaseYear, "d");
  } else {
    console.log(intPayDateBaseYear.diff(baseDate, "d"));
    YearsRemaining =
      intPayDateBaseYear.diff(baseDate, "d") /
      intPayDateBaseYear.diff(prevIntPayDate, "d");
  }
  console.log(YearsRemaining);
}

computeYearsRemaining("2040-12-28", "2024-11-30");
computeYearsRemaining("2044-08-22", "2024-11-30");
