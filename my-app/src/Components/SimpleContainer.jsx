import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
          <h1>Riot does not give a shit about you. Just quit right here. Pledge certain amount and stop playing league of legends. After the lint is over you will get your money back.</h1>
        </Typography>/>
      </Container>
    </React.Fragment>
  );
}