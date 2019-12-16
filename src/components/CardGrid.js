import React, { useContext } from "react";
import { Grid, Typography, CardContent, Card, Link } from '@material-ui/core';
import Img from 'gatsby-image';
import { GlobalState } from "../Context/GlobalContext";

const CardGrid = props => {
    const darkMode = useContext(GlobalState).darkMode;
    const cards = props.items.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
            <Card style={darkMode ? { backgroundColor: '#4d4d4d', color: 'white' } : {}}>
                <Img style={{ height: '140px'}} fluid={item.image}/>
                <CardContent>
                    <Typography variant={'body1'} gutterBottom><strong>{item.name}</strong></Typography>
                    <Typography variant={'body2'} > {item.content} </Typography>
                    <Typography style={{float: 'right', margin: '0.5rem'}} variant={'body2'} >
                        <Link style={{color: '#297999'}} href={item.link}>Documentation</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ));

    return <Grid container spacing={3}> {cards} </Grid>
}

export default CardGrid;