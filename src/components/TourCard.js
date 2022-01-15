import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 


const TourCard = () => {
    // variant="outlined", squared, rounded  --Props that can be passed to the paper component
    //  return <Paper elevation={3}>Hello</Paper>
    return <Grid item xs={3}>
        <Paper elevation={3}>Hello</Paper>
    </Grid>
}

export default TourCard