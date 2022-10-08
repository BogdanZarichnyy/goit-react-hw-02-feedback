import React, { Component } from "react";
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";
import css from './Feedback.module.css'

export class App extends Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce( (previousTotal, total) => previousTotal + total, 0 );
    }

    countPositiveFeedbackPercentage = () => {
        return Math.round( ( 100 / Object.values(this.state).reduce( (previousTotal, total) => previousTotal + total, 0 ) ) * this.state.good );
    }

    handleCount = (event) => {
        this.setState( previousState => ({ [event.target.innerText.toLowerCase()]: previousState[event.target.innerText.toLowerCase()] + 1 }) );
    }

    render() {
        return (
            <div className="data">
                <div className={css.box}>

                    <Section title="Please leave feedback">

                        <FeedbackOptions options={this.state} onLeaveFeedback={this.handleCount} />

                    </Section>
                    
                    <Section title="Statistics">

                        {(this.countTotalFeedback() === 0 ?
                            <Notification title="There is no feedback"/> :
                            <Statistics
                                good={this.state.good}
                                neutral={this.state.neutral}
                                bad={this.state.bad}
                                total={this.countTotalFeedback}
                                positivePercentage={this.countPositiveFeedbackPercentage}
                            />
                        )}
                        
                    </Section>

                </div>
            </div>
        );
    } 
}