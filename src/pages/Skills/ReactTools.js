import React, { useContext } from "react";
import { Typography, List, ListItem, Container } from '@material-ui/core';
import { HorizontalBar } from 'react-chartjs-2';
import { GlobalState } from '../../Context/GlobalContext';

const ReactTools = () => {
  const darkMode = useContext(GlobalState).darkMode;
  const data = {
    labels: ['Redux', 'Material UI', 'Router', 'Jest', 'Gatsby', 'Dev Tools'],
    datasets: [{
      data: ['7', '9', '6', '5', '8', '9'],
      backgroundColor: ['#1F4D5A', '#075568', '#6FBFC0', '#F1FAF3', '#E8CBA8', '#ECE9DF']
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
        <br />
        <List>
          <Typography variant={"h6"}><strong>Other Concepts</strong></Typography>
          <hr />
          <ListItem><Typography>
            <strong>JSX</strong> <br />
            Shorthand for "JavaScript XML", JSX is React's way to bring HTML-like syntax into
            client-side language. The React library is incredibly more difficult without JSX,
            thus making it essential to master.
              </Typography></ListItem>

          <ListItem><Typography>
            <strong>Hooks</strong> <br />
            Hooks were released with version 16.8 in February of 2019 as maybe the largest
            addition to the library in some time. Formerly, state could only be used within
            class-based React components. With the "useState" hook, this ability can now be
            extended to functional components. Other hooks, such as useContext and useEffect
            have both reinforced and even extended this functionality.
              </Typography></ListItem>

          <ListItem><Typography>
            <strong>Lazy/Suspense</strong> <br />
            Though they have several features, I have used React Lazy and React Suspense for
            the asynchronous loading of images and text. This allows me to focus CPU strength
            on rendering the part of a page the user is most likely to interact with first. Once
            that priority is taken care of, other, less important aspects of the page can be rendered.
              </Typography></ListItem>

          <ListItem><Typography>
            <strong>Lifecycle Events</strong> <br />
            React's Component Lifecycle Events have seen many changes in just the past couple of years.
            Several lifecycles, 'componentWillMount', 'componentWillReceiveProps', and 'componentWillUpdate',
            were deprecated in favor of 2 newer lifecycles. By using functional components with Hooks,
            these lifecycles can almost be thrown out entirely. Still, given their prominence in the
            history of React development, I have made to sure to keep them as part of my repertoire.
              </Typography></ListItem>
        </List>
      </Container>
    </>
  )
}

export default ReactTools;