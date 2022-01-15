import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AccessTime from '@mui/icons-material/AccessTime'




const TourCard = () => {
    // variant="outlined", squared, rounded  --Props that can be passed to the paper component
    //  return <Paper elevation={3}>Hello</Paper>
    return (

        <Grid item xs={3}>
            <Paper elevation={3}>
                <img 
                src='https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/homepage/niagara-falls-mist-880x592.jpg' 
                alt='Niagra_Falls_Image' 
                className='img'
                />
                <Box paddingX={1}>
                <Typography variant='subtitle1' component='h2' >
                    Immerse into the Falls
                </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItem: 'center'
                        }}
                        >
                            <AccessTime sx={{width: 12.5}} />
                            <Typography variant='body2' component='p' marginLeft={0.5} >
                                    5 hours
                            </Typography>
                    </Box>
                <Box
                        sx={{
                            display: 'flex',
                            alignItem: 'center'
                        }}
                        marginTop={3}
                >
                    <Rating 
                        name='read-only' 
                        value={4.5} 
                        precision={0.5} 
                        size='small' 
                        readOnly 
                    />
                    <Typography variant='body2' component='p' marginLeft={0.5} >
                        4.5
                    </Typography>
                    <Typography variant='body2' component='p' marginLeft={1.5} >
                        (655 reviews)
                    </Typography>
                </Box>
                <Box>
                <Typography variant='h6' component='h3' marginTop={0} >
                        From C $147
                </Typography>
                </Box>
                </Box>
            </Paper>
        </Grid>
    ) 
}

export default TourCard