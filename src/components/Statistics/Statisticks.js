import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <div className={style.list}>
            <p className={style.text}>Good: {good}</p>
            <p className={style.text}>Neutral: {neutral}</p>
            <p className={style.text}>Bad: {bad}</p>
            <p className={style.text}>Total: {total}</p>
            <p className={style.text}>PositivePercentage: { positivePercentage}%</p>
        </div>
    </>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;