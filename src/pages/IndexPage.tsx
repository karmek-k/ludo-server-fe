import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ConnectionForm from '../components/index/ConnectionForm';

const useStyles = makeStyles({
  textCentered: {
    textAlign: 'center'
  }
});

const IndexPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.textCentered}>
      <Typography variant="h1" gutterBottom>
        ludo-server
      </Typography>
      <ConnectionForm />
    </Container>
  );
};

export default IndexPage;
