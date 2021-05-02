import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ConnectionForm from '../components/index/ConnectionForm';
import Context from '../utils/context';
import { ServerUrlAction } from '../utils/reducers';

const useStyles = makeStyles({
  textCentered: {
    textAlign: 'center'
  }
});

const IndexPage: React.FC = () => {
  const { dispatch } = useContext(Context);

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.textCentered}>
      <Typography variant="h1" gutterBottom>
        ludo-server
      </Typography>
      <ConnectionForm
        onValid={data =>
          dispatch({
            type: ServerUrlAction.SET,
            serverUrl: data.serverUrl
          })
        }
      />
    </Container>
  );
};

export default IndexPage;
