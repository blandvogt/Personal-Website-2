import React, { useState, useContext } from "react";
import { Grid, Paper, List, ListItem, Divider, Card, 
    CardContent, Typography, makeStyles } from "@material-ui/core";
import { GlobalState } from "../Context/GlobalContext";

const Display = props => {
    const [selected, setSelected] = useState(0);
    const [content, setContent] = useState(props.items[0].content);
    const darkMode = useContext(GlobalState).darkMode;
    const { listItem, listItemSelected, listItemDark, listItemDarkSelected } = useStyles();

    const menuLabels = props.items.map((item, i) => (
        <div key={i}>
            <Divider style={darkMode ? {backgroundColor: 'black'} : {}}/>
            <ListItem 
            className={darkMode ? (selected === i ? listItemDarkSelected : listItemDark) : 
                (selected === i ? listItemSelected : listItem)} 
                button onClick={() => { setSelected(i); setContent(props.items[i].content)}}>
                <Typography>{item.name}</Typography>
            </ListItem>
        </div>
    ));

    return (
        <Grid container>
            <Grid item md={4} style={{padding: '0.8rem'}}>
            <List style={{paddingTop: '0px'}}>
                <Paper>
                    {menuLabels}
                </Paper>
            </List>
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

const useStyles = makeStyles(() => ({
    listItem: {
        backgroundColor: 'white'
    },
    listItemSelected: {
        backgroundColor: '#AEBDBE', color: '#474747'
    }, 
    listItemDark: {
        backgroundColor: 'grey'
    },
    listItemDarkSelected: {
        backgroundColor: '#677273', color: 'white'
    }
}));

export default Display;