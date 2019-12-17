import React from "react";
import { Typography, ListItem, Container } from '@material-ui/core';

const Other = () => (
  <Container>
    <ListItem><Typography>
      <strong>Postman</strong> <br/>
      I have used this tool for testing APIs developed in Node. With Postman I can configure 
      setting for a REST API by sending various HTTP requests such as POST, PUT, GET, etc.
    </Typography></ListItem>
    <ListItem><Typography>
      <strong>Jira</strong> <br/>
      I used this tool in my role at OppenheimerFunds to track issues and their development/testing 
      progress. I have experience writing user stories and technical requirments in Jira.
    </Typography></ListItem>
    <hr/>
    <ListItem><Typography>
      <strong>Photoshop</strong> <br/>
      I do not have extensive experience in this tool. I've used Photoshop for several projects in 
      university, but not in any real-world scenarios. Given that, my background in this tool, and in 
      UI/UX design, would allow me to easily use it if necessary.
    </Typography></ListItem>
    <ListItem><Typography>
      <strong>Babel</strong> <br/>
      This is a JavaScript compiler that I first used in converting JSX code for React into native 
      JavaScript. Since Babel is integrated into Webpack, I have not used it in a stand-alone context 
      for some time.
    </Typography></ListItem>
    <ListItem><Typography>
      <strong>Webpack</strong> <br/>
      This is a JavaScript module bundler that runs on Node. Though it comes included with 
      create-react-app and Gatsby, I initially used Webpack by iteself in order to understand 
      its configurations.
    </Typography></ListItem>
    <hr/>
    <ListItem><Typography>
      <strong>Git</strong> <br/>
      At both OppenheimerFunds and at StoryCorps, I used Git to keep track of versioning for 
      various software projects. I have used it to work with both GitHub and Gitlab.
    </Typography></ListItem>
    <ListItem><Typography>
      <strong>Canva</strong> <br/>
      I frequently use the Canva web app as a way to wireframe new projects. It's not 
      overly complicated, and it provides a way to quickly hash out design ideas.
    </Typography></ListItem>
    <ListItem><Typography>
      <strong>Visual Studio Code</strong> <br/>
      VS Code is my primary text editor. I have used it each of my previous experiences and have 
      become familiary with several extensions for improving efficiency. I also have experience 
      with Atom and Xcode.
    </Typography></ListItem>
  </Container>
)

export default Other;