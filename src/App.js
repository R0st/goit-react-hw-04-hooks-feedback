
import React from 'react';
import FeedbackCounter from './components/FeedbackCounter';
import Statistics from './components/Statistics';
import Section from './components/Section'
import Notification from './components/Notification'
// import Controls  from './components/Counter';

class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }    
   
   handleBtnClick = event => {
        const { name } = event.target;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad);
    }
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return ((good / this.countTotalFeedback()) * 100);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const positivePercentage = Number(this.countPositiveFeedbackPercentage().toFixed(0)); 
        return (
            <>
                <Section title="Please leave feedback">
                    
                    <FeedbackCounter
                        options={this.state}
                        onLeaveFeedback={this.handleBtnClick}
                    />
        
                    {this.countTotalFeedback() < 1
                        ? (
                            <Notification message="No feedback given" />)
                        : (
                            <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                total={this.countTotalFeedback()}
                                positivePercentage={positivePercentage} />)
                    }
                    </Section>
            </>
        )
    }
}
export default App;
    