import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
      <Box 
       borderColor="primary.main" 
       borderTop={4} 
       borderBottom={4}
       borderLeft={4}
      borderRight={4}
    >
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '5vh' }}>
            {props.dropbox}
            </Typography>
            </Box>
      </Container>
    </React.Fragment>
  );
}

