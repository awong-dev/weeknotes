import React, { Component } from 'react';

import DateArrow from './DateArrow'
import DateUtil from './DateUtil'
import WeekDate from './WeekDate'
import './DateHeader.css';

class DateHeader extends Component {
  constructor() {
    super();
    this.state = {
      arrowsActive: false,
      stickyActive: false,
      week: new WeekDate()
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.incrementWeek = this.incrementWeek.bind(this);
    this.decrementWeek = this.decrementWeek.bind(this);
    this.resetWeek = this.resetWeek.bind(this);
  }

  // Override
  render() {
    return (
      <h2 id="date-header"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <span
          onFocus={this.onClick}
          onBlur={this.onBlur}
          tabIndex="0">
          <DateArrow
            direction='left'
            active={this.state.arrowsActive}
            onClick={this.decrementWeek}
          />
          <span className='range'
            onClick={this.resetWeek}>
            {this.getDateRange()}
          </span>
          <DateArrow
            direction='right'
            active={this.state.arrowsActive}
            onClick={this.incrementWeek}
          />
        </span>
      </h2>
    );
  }

  getDateRange() {
    const getStartDateString = () => {
      const start = this.state.week.getStartOfRange();
      return DateUtil.getDayString(start) + ' ' +
        DateUtil.getMonthString(start) + ' ' + start.getDate();
    }

    const getEndDateString = () => {
      const end = this.state.week.getEndOfRange();
      return DateUtil.getDayString(end) + ' ' +
        DateUtil.getMonthString(end) + ' ' + end.getDay() + ', ' +
        end.getFullYear();
    }
    return getStartDateString() + ' - ' + getEndDateString();
  }

  onMouseOver() {
    this.setState({
      arrowsActive: true 
    });
  }

  onMouseOut() {
    if (!this.state.stickyActive) {
      this.setState({
        arrowsActive: false
      });
    }
  }

  onClick() {
    this.setState({
      arrowsActive: true,
      stickyActive: true
    });
  }

  onBlur() {
    this.setState({
      arrowsActive: false,
      stickyActive: false 
    });
  }

  incrementWeek() {
    this.state.week.incrementWeek();
    this.forceUpdate();
  }

  decrementWeek() {
    this.state.week.decrementWeek();
    this.forceUpdate();
  }

  resetWeek() {
    this.setState({
      week: new WeekDate()
    });
  }
}

export default DateHeader;

