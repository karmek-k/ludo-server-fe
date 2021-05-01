import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { ConnectionState, indicatorMessages } from '../../utils/socketio';

interface Props {
  connected: boolean;
}

const useStyles = makeStyles({
  paper: {
    maxWidth: 200,
    height: 'auto',
    padding: 20,
    margin: 15,
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  connected: {
    color: 'green'
  },
  disconnected: {
    color: 'red'
  }
});

const ConnectionIndicator: React.FC<Props> = ({ connected }) => {
  const state = connected
    ? ConnectionState.CONNECTED
    : ConnectionState.DISCONNECTED;

  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={4}>
      <Typography
        className={connected ? classes.connected : classes.disconnected}
      >
        {indicatorMessages.get(state)}
      </Typography>
    </Paper>
  );
};

export default ConnectionIndicator;
