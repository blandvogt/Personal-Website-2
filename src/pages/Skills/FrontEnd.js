import React, { useContext } from "react";
import { Typography, Container } from '@material-ui/core';
import { HorizontalBar } from 'react-chartjs-2';
import { GlobalState } from '../../Context/GlobalContext';

const FrontEnd = () => {
  const darkMode = useContext(GlobalState).darkMode;
  const data = {
    labels: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap',
      'Ajax', 'React.js'],
    datasets: [{
      data: ['8', '9', '7', '5', '6', '4', '9'],
      backgroundColor: ['#075568', '#6FBFC0', '#F1FAF3', '#E8CBA8', '#ECE9DF', '#ecdfec', '#dfdfec']
    }]
  }

  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 10,
          fontColor: darkMode ? 'white' : 'grey'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true,
          max: 10,
          fontColor: darkMode ? 'white' : 'grey'
        }
      }]
    }
  }

  return (
    <>
      <HorizontalBar data={data} options={options} />
      <br /><hr />
      <Container>
        <Typography>
          This graph measures my proficiency in some of the more well-known tools in Front-End
          development. When it comes to JavaScript, I try to keep familiar with every latest
          ECMAScript release. This has allowed me to be familiar with everything from Arrow Functions
          to Promises, to the Spread Operator.
            </Typography>
        <br />
        <Typography>
          The largest tool I have in Front-End Development is undoubtedly React.js. Of course,
          React plays the central role as the 'R' in 'MERN'. You can learn more about my React
          skillset by exploring the tabs on the left.
            </Typography>
      </Container>
    </>
  )
}

export default FrontEnd;