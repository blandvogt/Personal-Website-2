import React, { useContext } from "react";
import { Typography, Container } from '@material-ui/core';
import { HorizontalBar } from 'react-chartjs-2';
import { GlobalState } from '../../Context/GlobalContext';

const BackEnd = () => {
  const darkMode = useContext(GlobalState).darkMode;
  const data = {
    labels: ['Node.js', 'Express.js', 'Java', 'GraphQL', 'REST',
      'MySQL', 'Python', 'MongoDB'],
    datasets: [{
      data: ['9', '7', '6', '8', '7', '7', '4', '6'],
      backgroundColor: ['#ebc2f4', '#C2F4E2', '#d2c2f4', '#f4d8c2', '#c2d4f4', '#c9f4c2', '#f4e3c2', '#f4cbc2']
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
          My primary strength in Back-End development lies within Node. My expertise in
          JavaScript on the Front-End has allowed me to easily re-use those same skills.
          Node also provides tools like NPM and Express that I have found invaluable to
          web development.
            </Typography>
        <br />
        <Typography>
          The majority of my experience with Python is in a Data Science context
          with the Anaconda library. Due to this familiarity, it wouldn't be difficult for
          me to adopt an application with Python as it's server-side language.
            </Typography>
      </Container>
    </>
  )
}

export default BackEnd;