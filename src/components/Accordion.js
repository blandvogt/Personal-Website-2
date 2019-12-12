import React, { useState, useContext } from 'react';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { GlobalState } from "../Context/GlobalContext";

const Accordion = props => {
  const [expanded, setExpanded] = useState(0);
  const darkMode = useContext(GlobalState).darkMode;
  const handleChange = panel => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const panels = props.items.map((item, i) => (
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
          <ExpansionPanelDetails>
            <Grid item xs={12}>
              {item.content}
            </Grid>
          </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
));

  return (
    <div style={{marginBottom: '1rem'}}>
      {panels}
    </div>
  );
}

export default Accordion;