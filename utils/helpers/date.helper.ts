import { CalendarHelper } from "../calendar/calendar.helper";

export type TDate = string | Date;

export class DateHelper {
  static parse = (value: TDate) =>
    typeof value === "string"
      ? value.length >= 8
        ? new Date(value)
        : new Date()
      : value;

  static format = (value: TDate, format: string) => {
    return new CalendarHelper(this.parse(value), format).format;
  };

  // ///////////////////////////////////////////////
  static jsonDate = (value: TDate) => this.format(value, "Y-m-d");
  static jsonTime = (value: TDate) => this.format(value, "H:i:s");
  static jsonDateTime = (value: TDate) => this.format(value, "Y-m-d H:i:s");

  // ///////////////////////////////////////////////
  static displayDate = (value: TDate) => this.format(value, "M j, Y");
  static dateShort = (value: TDate) => this.format(value, "M j");
  static displayTime = (value: TDate) => this.format(value, "h:i A");
  static displayDateTime = (value: TDate) =>
    this.format(value, "d F Y | h:i A");

  // ///////////////////////////////////////////////
  static transform(value: TDate) {
    let date = this.parse(value);
    let json = {
      date: this.jsonDate(date),
      time: this.jsonTime(date),
      datetime: this.jsonDateTime(date),
    };
    let display = {
      date: this.displayDate(date),
      time: this.displayTime(date),
      datetime: this.displayDateTime(date),
    };
    //
    return { date, json, display };
  }
}
