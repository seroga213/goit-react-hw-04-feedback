import React from "react";
import { FeedbackOptions } from "../components/FeedbackOptions/FeedbackOptions";
import  Section  from './Section/Section' ;
import { Statistics } from '../components/Statictics/Statistics';
// import { StatisticsTitle, StatisticsCard } from '../components/Statictics/Statistics.styled';
import { Notification } from 'components/Notification/Notification';
import { useState } from "react";


export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const state = { good, neutral, bad }
  

  const handleIncrement = type => {

    const target = type.target.name;
    switch(target) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default:
        break;
  }
  

}

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
  
  const countPositiveFeedbackPercentage = () => {
    let total = good + neutral + bad;
    if (total === 0) {
      return 0;
    } else {
      return Math.trunc((good / total) * 100);
    }
  }
  return (
    <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 20,
      color: '#010101'

        }}>
      <Section title = "Please leave feedback">
        {/* <Title>Please leave feedback</Title> */}
              <FeedbackOptions 
                  options={Object.keys(state)}
                  addFeedback ={handleIncrement}
              ></FeedbackOptions>
          </Section>
          <Section title = "Statistics">
                {/* <Title>Statistics</Title> */}
                  {countTotalFeedback() === 0
                      ? <Notification message="There is no feedback"></Notification>
                      : <Statistics
                          ValueGood={good}
                          ValueNeutral={neutral}
                          ValueBad={bad}
                          totalFeedback={countTotalFeedback()}
                          percentage={countPositiveFeedbackPercentage()}>
                      </Statistics>}
              
          </Section>
          
      </div>
  )
}



// export class Feedback extends React.Component{
//     state = { 
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }  
//     handleIncrement = (e) => {

//         let curentfeedback = e.currentTarget.name;

//         this.setState((prevState) => ({[curentfeedback] : prevState[curentfeedback] + 1}))
//     }

//     countTotalFeedback=() => {
//         let countTotal = this.state.good + this.state.neutral + this.state.bad;

//         return countTotal;

//     }

//     countPositiveFeedbackPercentage = () =>{
//         let percentageGood = Math.round(this.state.good / this.countTotalFeedback() * 100);
        
//         return percentageGood;

//     }

//     render() {
//         let totalFeedback = this.countTotalFeedback();
//         return (
//           <div
//           style={{
//             height: '100vh',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             fontSize: 20,
//             color: '#010101'

//               }}
//             >
//         <Section title = "Please leave feedback">
//                 <FeedbackOptions
//                     options = {Object.keys(this.state)}
//                     addFeedback ={this.handleIncrement}
//                 ></FeedbackOptions>
    
//         </Section>

//         <Section title = "Statistics" >
            
//                     {totalFeedback === 0
//                         ? <Notification message="There is no feedback"></Notification>
//                         : <Statistics
//                             good={this.state.good}
//                             neutral={this.state.neutral}
//                             bad={this.state.bad}
//                             totalFeedback={this.countTotalFeedback()}
//                             percentage={this.countPositiveFeedbackPercentage()}  
//                             >
//                         </Statistics>}
                
//                 </Section>
        
//         </div>
//     )}
// }
