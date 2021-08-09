import React, {useState, useEffect} from 'react';
import FeedbackCounter from './components/FeedbackCounter';
import Statistics from './components/Statistics';
import Section from './components/Section'
import Notification from './components/Notification'
// import Controls  from './components/Counter';

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [countTotalFeedback, setCountTotalFeedback] = useState(0);
    const [countPositiveFeedbackPercentage, setCountPositiveFeedbackPercentage] = useState(0);
   
    const handleBtnClick = event => {
        const { name } = event.target;
        // switch (name) {
        //     case 'good':
        //         setGood(prevState => prevState + 1);
        //         break;
            
        //     case 'neutral':
        //         setNeutral(prevState => prevState + 1);
        //         break;
            
        //     case 'bad':
        //         setBad(prevState => prevState + 1);
        //         break;
            
        //     default:
        //         return;
        // }
        if (name === 'good') {
            setGood(prevState => prevState + 1)
        }
        
        if (name === 'neutral') {
            setNeutral(prevState => prevState + 1)
        };

        if (name === 'bad') {
            setBad(prevState => prevState + 1)
        };
        }
        
        useEffect(() => {
        setCountTotalFeedback(good + neutral + bad);
        }, [good, neutral, bad]);
    
        // const countTotalFeedback = () => good + neutral + bad;
        
        useEffect(() => {
            setCountPositiveFeedbackPercentage(((good / countTotalFeedback) * 100).toFixed(0))
        }, [good, countTotalFeedback ])
        
    
        // const countPositiveFeedbackPercentage = () => {
        //     return ((good / countTotalFeedback) * 100);
        // }
        // const { good, neutral, bad } = options;
    
        // const positivePercentage = Number(countPositiveFeedbackPercentage().toFixed(0));
        return (
            <>
                <Section title="Please leave feedback">
                    
                    <FeedbackCounter
                        // options={this.state}
                        onLeaveFeedback={handleBtnClick}
                    />
        
                    {countTotalFeedback < 1
                        ? (
                            <Notification message="No feedback given" />)
                        : (
                            <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                total={countTotalFeedback}
                                positivePercentage={countPositiveFeedbackPercentage} />)
                    }
                </Section>
            </>
        )
    }