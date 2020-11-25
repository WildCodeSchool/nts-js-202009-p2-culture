import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from './Slider';
import HomeCalendar from './HomeCalendar';

const Section = styled.section`
  margin: 0 0;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .calendar-filter {
    margin-top: 1rem;
  }

  .price-filter {
    margin-top: 1rem;
  }

  .filter-title {
    font-size: 0.9rem;
    text-align: center;
    margin-top: 1rem;
  }

  .react-calendar {
    width: 80%;
    margin: auto;
    border-radius: 5px;
    border: solid navy 2px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  }
  .react-calendar__navigation {
    background: #d8d8d8;
  }

  .react-calendar__tile--active {
    background: #000080;
  }

  .react-calendar__tile--now {
    background: #000080;
    color: #fff;
    opacity: 0.75;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #000080;
  }

  @media screen and (min-width: 768px) {
    margin: 5rem 1rem;
    justify-content: space-around;
    align-items: flex-start;
    width: 40vw;

    .react-calendar {
      width: 40vw;
    }
  }
`;
export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.changeDate = this.changeDate.bind(this);
    this.changePrice = this.changePrice.bind(this);
  }

  changeDate(date) {
    const { dateUpdate } = this.props;
    dateUpdate(date);
  }

  changePrice(price) {
    const { priceUpdate } = this.props;
    priceUpdate(price);
  }

  render() {
    return (
      <Section>
        <h4 className="filter-title">filtrer par date :</h4>
        <div className="calendar-filter">
          <HomeCalendar changeDate={this.changeDate} />
        </div>
        <h4 className="filter-title">filtrer par prix :</h4>
        <div className="price-filter">
          <Slider changePrice={this.changePrice} />
        </div>
      </Section>
    );
  }
}

Filters.propTypes = {
  dateUpdate: PropTypes.func.isRequired,
  priceUpdate: PropTypes.func.isRequired,
};
