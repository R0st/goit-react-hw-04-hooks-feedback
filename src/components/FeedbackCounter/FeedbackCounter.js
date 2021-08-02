import React from 'react'
import style from './FeedbackCounter.module.css'
import PropTypes from 'prop-types';

const FeedbackCounter = ({ options, onLeaveFeedback }) => {
    const { good, neutral, bad } = options;
    
        return (
                
                <div className={style.FeedbackCounter__controls}>
                    <button
                        className={style.btn}
                        name="good"
                        type="button"
                        onClick={onLeaveFeedback}
                        data-value={good}
                    >Good</button>
                
                    <button
                        className={style.btn}
                        name="neutral"
                        type="button"
                        onClick={onLeaveFeedback}
                        data-value={neutral}
                    >Neutral</button>
                
                    <button
                        className={style.btn}
                        name="bad"
                        type="button"
                        onClick={onLeaveFeedback}
                        data-value={bad}
                    >Bad</button>
                </div>
        )
}

FeedbackCounter.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackCounter;