import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  textCentered: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5
  },
  formControl: {
    margin: '10px 0'
  }
});

const IndexPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.textCentered}>
      <Typography variant="h1">ludo-server</Typography>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">
            Connect to a ludo-server instance
          </Typography>
          <form className={classes.form}>
            <TextField
              className={classes.formControl}
              name="server-address"
              label="Server address"
              required
            />
            <TextField
              className={classes.formControl}
              name="password"
              label="Password (optional)"
              type="password"
            />
            <Button
              className={classes.formControl}
              type="submit"
              variant="contained"
              color="primary"
            >
              Connect
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default IndexPage;
