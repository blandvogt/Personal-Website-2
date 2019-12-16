import React, { useState, useContext } from 'react';
import { Typography, ExpansionPanel, ExpansionPanelSummary, 
  ExpansionPanelDetails, Grid, Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { GlobalState } from "../Context/GlobalContext";
import Img from 'gatsby-image';

const Accordion = props => {
  const [expanded, setExpanded] = useState(0);
  const darkMode = useContext(GlobalState).darkMode;
  const handleChange = panel => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const panels = props.items.map((item, i) => {
    const img = item.image ? <Img fluid={item.image}/> : <></>;
    const link = item.link ? <Link style={{color: '#297999'}} href={item.link}>{item.linkTitle}</Link> : <></>;
    return (
      <div key={i} style={{marginBottom: '1.5%'}}>
        <ExpansionPanel expanded={expanded === i} onChange={handleChange(i)} 
          style={darkMode ? {backgroundColor: '#4d4d4d', color: 'white'} : {}}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Grid item xs={12}>
                <Typography>
                  <strong>{item.name}</strong>
                </Typography>
              </Grid>
            </ExpansionPanelSummary>
            {img}
            <ExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12}>
                  {item.content}
                </Grid>
                <Grid item xs={12}>
                  <div style={{textAlign: 'center', marginTop: '0.5rem'}}>{link}</div>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  });

  return (
    <div style={{marginBottom: '1rem'}}>
      {panels}
    </div>
  );
}

export default Accordion;