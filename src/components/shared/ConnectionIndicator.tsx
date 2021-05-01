import React, { useContext, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Context from '../../utils/context';
import { ConnectionState, indicatorMessages } from '../../utils/socketio';

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

const ConnectionIndicator: React.FC = () => {
  const { socket } = useContext(Context);
  const [connection, setConnection] = useState<ConnectionState>(
    ConnectionState.DISCONNECTED
  );

  useEffect(() => {
    if (socket?.disconnected || !socket) {
      setConnection(ConnectionState.DISCONNECTED);
    }

    if (socket?.connected) {
      setConnection(ConnectionState.CONNECTED);
    }
  }, [socket]);

  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={4}>
      <Typography
        className={
          connection === ConnectionState.CONNECTED
            ? classes.connected
            : classes.disconnected
        }
      >
        {indicatorMessages.get(connection)}
      </Typography>
    </Paper>
  );
};

export default ConnectionIndicator;
