import { r } from "@app/utils";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import IconedInput from "./IconedInput";
import CalendarIcon from "@assets/svg/Calendar";

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp =
  Date.now() -
  (Date.now() % oneDay) +
  new Date().getTimezoneOffset() * 1000 * 60;
let inputRef = React.createRef<any>();

const box = `
width: 40px;
height: 40px;
text-align: center;
`;
const CCalendarDay = styled.div`
  display: inline-block;

  ${box}
  &.highlight .cdc-day {
    border: 2px solid grey;
  }
  &.highlight-green .cdc-day {
    background: green;
  }
  &.disabled .cdc-day {
    background: rgba(100, 100, 100, 0.4);
  }
  .cdc-day {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
`;

const CChead = styled.div``;
const CCBody = styled.div``;
const CContainer = styled.div``;
const CCheadContent = styled.div`
  display: inline-block;
  ${box}
`;

const DatePickerContainer = styled.div``;

const Calendar = styled.div`
  width: 320px;
  position: absolute;
  background: white;
  z-index: 100;
  padding: 1.5rem;
  box-shadow: 0px 0px 5px grey;
`;

const CYearMonth = styled.div`
  display: flex;
  flex-direction: flex-row;
  justify-content: space-between;
  padding: 1rem;
`;

export default class DatePicker extends Component<any> {
  state: {
    year: number;
    month: number;
    selectedDay: number;
    getMonthDetails: any;
    monthDetails: any;
    showDatePicker: any;
    currentValue: any;
  };

  constructor(props: any) {
    super(props);
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    this.state = {
      year,
      month,
      selectedDay: todayTimestamp,
      monthDetails: this.getMonthDetails(year, month),
      getMonthDetails: [],
      showDatePicker: undefined,
      currentValue: "",
    };
  }

  componentDidMount() {
    window.addEventListener("click", this.addBackDrop);
    if (this.props.value) {
      const dateData = this.getDateFromDateString(this.props.value);
      console.log(dateData);

      if (dateData !== null) {
        this.setDate(dateData);
        this.setState({
          year: dateData.year,
          month: dateData.month - 1,
          monthDetails: this.getMonthDetails(
            dateData.year,
            dateData.month - 1
          ),
        });

        this.setDateToInput(
          new Date(
            dateData.year,
            dateData.month - 1,
            dateData.date
          ).getTime()
        );
      }
    }
    // this.setDateToInput(this.state.selectedDay);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.addBackDrop);
  }

  addBackDrop = (e: any) => {
    if (
      this.state.showDatePicker &&
      !ReactDOM.findDOMNode(this as any)!.contains(e.target)
    ) {
      this.showDatePicker(false);
    }
  };

  showDatePicker = (showDatePicker = true) => {
    this.setState({ showDatePicker });
  };

  /**
   *  Core
   */

  daysMap = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  monthMap = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  getDayDetails = (args: any) => {
    let date = args.index - args.firstDay;
    let day = args.index % 7;
    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }
    let prevMonthNumberOfDays = this.getNumberOfDays(
      prevYear,
      prevMonth
    );
    let _date =
      (date < 0
        ? prevMonthNumberOfDays + date
        : date % args.numberOfDays) + 1;
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();
    return {
      date: _date,
      day,
      month,
      timestamp,
      dayString: this.daysMap[day],
    };
  };

  getNumberOfDays = (year: number, month: number) => {
    return 40 - new Date(year, month, 40).getDate();
  };

  getMonthDetails = (year: number, month: number) => {
    let firstDay = new Date(year, month).getDay();
    let numberOfDays = this.getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 6;
    let currentDay = null;
    let index = 0;
    let cols = 7;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        currentDay = this.getDayDetails({
          index,
          numberOfDays,
          firstDay,
          year,
          month,
        });
        monthArray.push(currentDay);
        index++;
      }
    }
    return monthArray;
  };

  isCurrentDay = (day: any) => {
    return day.timestamp === todayTimestamp;
  };

  isSelectedDay = (day: any) => {
    return day.timestamp === this.state.selectedDay;
  };

  getDateFromDateString = (dateValue: any) => {
    let dateData = dateValue
      .split("-")
      .map((d: any) => parseInt(d, 10));
    if (dateData.length < 3) return null;

    let year = dateData[0];
    let month = dateData[1];
    let date = dateData[2];

    return { year, month, date };
  };

  getMonthStr = (month: any) =>
    this.monthMap[Math.max(Math.min(11, month), 0)] || "Month";

  getDateStringFromTimestamp = (timestamp: number) => {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth() + 1;
    let date = dateObject.getDate();
    return (
      dateObject.getFullYear() +
      "-" +
      (month < 10 ? "0" + month : month) +
      "-" +
      (date < 10 ? "0" + date : date)
    );
  };

  setDate = (dateData: any) => {
    let selectedDay = new Date(
      dateData.year,
      dateData.month - 1,
      dateData.date
    ).getTime();
    this.setState({ selectedDay });
    if (this.props.onChange) {
      this.props.onChange(selectedDay);
    }
  };

  updateDateFromInput = (e: any) => {
    let dateValue = e.target.value;
    this.setState({ ...this.state, currentValue: dateValue });
    let dateData = this.getDateFromDateString(dateValue);
    if (dateData !== null) {
      this.setDate(dateData);
      this.setState({
        year: dateData.year,
        month: dateData.month - 1,
        monthDetails: this.getMonthDetails(
          dateData.year,
          dateData.month - 1
        ),
      });
    }
  };

  setDateToInput = (timestamp: number) => {
    let dateString = this.getDateStringFromTimestamp(timestamp);
    inputRef.current.value = dateString;
    this.setState({ ...this.state, currentValue: dateString });
  };

  onDateClick = (day: any) => {
    this.setState({ selectedDay: day.timestamp }, () =>
      this.setDateToInput(day.timestamp)
    );
    if (this.props.onChange) {
      this.props.onChange(day.timestamp);
    }
  };

  setYear = (offset: number) => {
    let year = this.state.year + offset;
    let month = this.state.month;
    this.setState({
      year,
      monthDetails: this.getMonthDetails(year, month),
    });
  };

  setMonth = (offset: number) => {
    let year = this.state.year;
    let month = this.state.month + offset;
    if (month === -1) {
      month = 11;
      year--;
    } else if (month === 12) {
      month = 0;
      year++;
    }
    this.setState({
      year,
      month,
      monthDetails: this.getMonthDetails(year, month),
    });
  };

  /**
   *  Renderers
   */

  renderCalendar() {
    let days = this.state.monthDetails.map(
      (day: any, index: number) => (
        <CCalendarDay
          className={r([
            day.month !== 0 ? "disabled" : "",
            this.isCurrentDay(day) ? "highlight" : "",
            this.isSelectedDay(day) ? "highlight-green" : "",
          ])}
          key={index}
        >
          <div className="cdc-day">
            <span onClick={() => this.onDateClick(day)}>
              {day.date}
            </span>
          </div>
        </CCalendarDay>
      )
    );

    return (
      <CContainer>
        <CChead>
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
            (d, i) => (
              <CCheadContent key={i}>{d}</CCheadContent>
            )
          )}
        </CChead>
        <CCBody>{days}</CCBody>
      </CContainer>
    );
  }

  render() {
    return (
      <DatePickerContainer>
        <div
          className="mdp-input"
          onClick={() => this.showDatePicker(true)}
        >
          <IconedInput
            {...this.props}
            getRef={inputRef}
            label="Select Date"
            type="text"
            onChange={this.updateDateFromInput}
            value={this.state.currentValue}
            autoComplete="true"
            paddingSide="50px"
            icon={<CalendarIcon />}
          />
        </div>
        {this.state.showDatePicker ? (
          <Calendar>
            <div className="-head">
              <div className="h-button"></div>
              <div className="h-button"></div>
              <CYearMonth>
                <div className="year">
                  <div
                    className="hb-inner"
                    onClick={() => this.setYear(-1)}
                  >
                    <span className="hbi-left-arrows">n</span>
                  </div>
                  {this.state.year}
                  <div
                    className="h-button"
                    onClick={() => this.setYear(1)}
                  >
                    <div className="hb-inner">
                      <span className="hbi-right-arrows">$</span>
                    </div>
                  </div>
                </div>
                <div className="month">
                  <div
                    className="hb-inner"
                    onClick={() => this.setMonth(-1)}
                  >
                    <span className="hbi-left-arrow">n</span>
                  </div>
                  <div>{this.getMonthStr(this.state.month)}</div>
                  <div
                    className="hb-inner"
                    onClick={() => this.setMonth(1)}
                  >
                    <span className="hbi-right-arrow">$</span>
                  </div>
                </div>
              </CYearMonth>
              <div className="h-button"></div>
            </div>
            <div className="-body">{this.renderCalendar()}</div>
          </Calendar>
        ) : (
          ""
        )}
      </DatePickerContainer>
    );
  }
}
