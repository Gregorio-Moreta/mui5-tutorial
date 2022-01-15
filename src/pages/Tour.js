import { Box, Container, Typography } from "@mui/material";

 const Tour = () => <Container
 sx={{
     width: 900
 }}
 >
      <Typography variant='h3' component='h1' mrginTop={3}>
          Explore the World in Vegas
      </Typography>
      <Box
      marginTop={3} sx={{display: 'flex'}}
      >
          <img 
          src='https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1800&h=900&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F26%2Flas-vegas-nevada-LVTG0221.jpg' height='325px'
          
          />
      </Box>
 </Container>


 export default Tour 