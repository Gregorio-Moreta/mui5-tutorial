import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AccessTime from '@mui/icons-material/AccessTime'
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2',
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: 'body3',
                    },
                    style: {
                        fontSize: 9,
                    }
                }
            ]
        }
    }
})


const TourCard = ({tour}) => {
    // variant="outlined", squared, rounded  --Props that can be passed to the paper component
    //  return <Paper elevation={3}>Hello</Paper>
    return (

        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={16}>
                    <img 
                    src={tour.image} 
                    alt='Niagra_Falls_Image' 
                    className='img'
                    />
                    <Box paddingX={1}>
                    <Typography variant='subtitle1' component='h2' >
                        {tour.name}
                    </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItem: 'center'
                            }}
                            >
                                <AccessTime sx={{width: 12.5}} />
                                <Typography variant='body2' component='p' marginLeft={0.5} >
                                        {tour.duration} hours
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
                            value={tour.rating} 
                            precision={0.5} 
                            size='small' 
                            readOnly 
                        />
                        <Typography variant='body2' component='p' marginLeft={0.5} >
                            {tour.rating}
                        </Typography>
                        <Typography variant='body2' component='p' marginLeft={1.5} >
                            ({tour.numberOfReviews} reviews)
                        </Typography>
                    </Box>
                    <Box>
                    <Typography variant='h6' component='h3' marginTop={0} >
                            From C {tour.price}
                    </Typography>
                    </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    ) 
}

export default TourCard