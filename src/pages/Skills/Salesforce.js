import React, { useContext } from "react";
import { Typography, List, ListItem, Container } from '@material-ui/core';
import { HorizontalBar } from 'react-chartjs-2';
import { GlobalState } from '../../Context/GlobalContext';

const Salesforce = () => {
  const darkMode = useContext(GlobalState).darkMode;
  const data = {
    labels: ['Web Components', 'Aura Lightning', 'Visualforce', 'Apex', 'SOQL'],
    datasets: [{
      data: ['7', '8', '5', '7', '6'],
      backgroundColor: ['#83B59D', '#D6ECCA', '#FBCC92', '#F49279', '#D37080']
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
          In my role at OppenheimerFunds, I was given the opportunity to work with the entire
          stack of Salesforce development tools. My first project involved converting the entire
          CRM from Visualforce into Lightning Aura. With this, I was able to familiarize myself
          with both. The project also allowed me to build completely new features based on feedback
          from the older components.
        </Typography>
        <br />
        <List>
          <Typography variant={"h6"}><strong>Other Concepts</strong></Typography>
          <hr />
          <ListItem><Typography>
            <strong>SFDX</strong> <br />
            SFDX is the Salesforce CLI tool. My team used it to make deployments to all of our
            development environments and to production.
              </Typography></ListItem>

          <ListItem><Typography>
            <strong>Informatica</strong> <br />
            My team used Informatica to manage the flow of data into our application. In order to
            build many of our components, we also needed to ensure that our databases were
            correctly configured through Informatica.
              </Typography></ListItem>

          <ListItem><Typography>
            <strong>TimeTrade</strong> <br />
            This is an installed package that allowed clients to set meeting times with a sales
            representative. About 15% of my time at OppenheimerFunds was spent on installation
            and configuration tasks. The rest of the time was devoted to development.
              </Typography></ListItem>

          <ListItem><Typography>
            <strong>Copado</strong> <br />
            Copado is a DevOps tool that helped my team manage a consistent codebase across
            several other teams. Later on, my team and I also used Copado for managing deployments
            to Bitucket and to production.
              </Typography></ListItem>
        </List>
      </Container>
    </>
  )
}

export default Salesforce;