import React, { useState, useContext } from "react";
import { Grid, List, ListItem, Card, CardContent, Typography } from "@material-ui/core";
import { GlobalState } from "../Context/GlobalContext";

const Display = props => {
    const [selected, setSelected] = useState(0);
    const [content, setContent] = useState(props.items[0].content);
    const darkMode = useContext(GlobalState).darkMode;

    const menuLabels = props.items.map((item, i) => (
        <div key={i}><Typography>
            <List style={{paddingTop: '0px', paddingBottom: '2px'}}>
                <ListItem 
                    style={darkMode ? (selected === i ? {backgroundColor: '#677273', color: 'white'} : 
                    {backgroundColor: 'grey'}) : 
                    (selected === i ? {backgroundColor: '#AEBDBE', color: '#474747'} : {backgroundColor: 'white'})} 
                    button onClick={() => { setSelected(i); setContent(props.items[i].content)}}>
                    {item.name}
                </ListItem>
            </List>
        </Typography></div>
    ));

    return (
        <Grid container>
            <Grid item md={4} style={{padding: '0.8rem'}}>
                {menuLabels}
            </Grid>
            <Grid item md={8} style={{padding: '0.8rem'}}>
                <Card style={darkMode ? {backgroundColor: '#4d4d4d', color: 'white'} : {}}>
                    <CardContent>
                        {content}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Display;