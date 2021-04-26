import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5
  },
  formControl: {
    margin: '10px 0'
  }
});

const ConnectionForm: React.FC = () => {
  const classes = useStyles();

  return (
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
  );
};

export default ConnectionForm;
