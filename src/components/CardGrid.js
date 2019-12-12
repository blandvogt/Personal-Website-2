import React, { useContext } from "react";
import { Grid, Typography, CardContent, Card, CardMedia, makeStyles, Link, Paper } from '@material-ui/core';
import { GlobalState } from "../Context/GlobalContext";

const CardGrid = props => {
    const { linkText, infoTextDark, infoText } = useStyles();
    const darkMode = useContext(GlobalState).darkMode;

    const cards = props.items.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
            <Card style={darkMode ? { backgroundColor: '#4d4d4d', color: 'white' } : {}}>
                <CardMedia style={{ height: '140px' }} image={item.image}/>
                <CardContent>
                    <Typography variant={'body1'} gutterBottom><strong>{item.title}</strong></Typography>
                    <Typography variant={'body2'} > {item.body} </Typography>
                    <Typography className={linkText} variant={'body2'} >
                        <Link href={item.link}>More</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ))

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={darkMode ? infoTextDark : infoText}>
                    <Typography variant={'body1'} gutterBottom><strong>Site Information</strong></Typography>
                    <Typography variant={'body2'} >  
                        I kept the descriptions of the following tools short to focus on 
                        this site's use of them. If you're interested in 
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

const useStyles = makeStyles(() => ({
    linkText: {
        float: 'right', 
        margin: '0.5rem'
    }, 
    infoText: {
        backgroundColor: '#ededed', 
        color: 'black',
        padding: '1.2rem'
    },
    infoTextDark: {
        backgroundColor: '#2e2e2e', 
        color: 'white', 
        padding: '1.2rem'
    }
}));

export default CardGrid;