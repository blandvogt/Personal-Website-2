import React, { useContext } from "react";
import { Grid, Typography, CardContent, Card, Link, Paper } from '@material-ui/core';
import Img from 'gatsby-image';
import { GlobalState } from "../Context/GlobalContext";

const CardGrid = props => {
    const darkMode = useContext(GlobalState).darkMode;
    const cards = props.items.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
            <Card style={darkMode ? { backgroundColor: '#4d4d4d', color: 'white' } : {}}>
                <Img style={{ height: '140px' }} fluid={item.image}/>
                <CardContent>
                    <Typography variant={'body1'} gutterBottom><strong>{item.title}</strong></Typography>
                    <Typography variant={'body2'} > {item.body} </Typography>
                    <Typography style={{float: 'right', margin: '0.5rem'}} variant={'body2'} >
                        <Link style={{color: '#40b5e3'}} href={item.link}>More</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ));

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <Paper style={darkMode ? {backgroundColor: '#2e2e2e', color: 'white', padding: '1.2rem'} : 
                    {backgroundColor: '#ededed', color: 'black', padding: '1.2rem'}}>
                    <Typography variant={'body1'} gutterBottom><strong>Site Information</strong></Typography>
                    <Typography variant={'body2'} >  
                        I kept the descriptions of the following tools short to focus on 
                        their implementation. If you're interested in 
                        learning how to use them, the "More" button links to documentation.
                    </Typography>
                    <br/>
                    <Typography variant={'body2'} >  
                        Going back to early wireframming, I knew this page was essential. 
                        Firstly, I wanted to show my ability to produce a cohesive 
                        product to any potential future employeers. Perhaps more importantly though, 
                        I also wanted to teach new engineers, or even just the curious, how to 
                        build similar experiences.
                    </Typography>
                </Paper>
            </Grid>
            {cards}
        </Grid>
    )
}

export default CardGrid;