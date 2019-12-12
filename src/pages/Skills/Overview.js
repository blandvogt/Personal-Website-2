import React, { useContext } from "react";
import { Typography, Container } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { GlobalState } from '../../Context/GlobalContext';

const Overview = () => {
  const darkMode = useContext(GlobalState).darkMode;
  const data = {
      labels: ['Front-End', 'Business Fundamentals', 'Databases', 'Mehtodologies', 'Back-End'],
      datasets: [{
          data: ['35', '15', '15', '10', '20'], 
          backgroundColor: ['#e3e3df', '#AEBDBE', '#F1776D', '#DF9B6B', '#576F84']
      }]
    }
  
    const options = {
      legend: {
        position: 'right',
        labels: {
          fontColor: darkMode ? 'white' : 'grey'
        }
      }
    }

  return (
    <>
      <Doughnut data={data} options={options}/>
      <br/><hr/>
      <Container>
        <Typography>
          The above chart represents my core technical skill set. Though I am a 
          Full-Stack 'MERN' developer, capable of working on any aspect of a project, 
          there are certain areas that I excel in more so than others.
        </Typography>
        <br/> 
        <Typography>
          As you'll notice, my strongest skill is in front-end development. I am particularly 
          fond of the React.js library as you'll come to see. I have also been told that 
          I inhibit a stronger nack for UI/UX design than the average developer. In previous 
          positions, I was often given extended design freedoms.
        </Typography>
      </Container>
    </>
  )
}

export default Overview;