import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

interface FormFields {
  serverAddress: string;
  password: string;
}

const schema = yup.object().shape({
  serverAddress: yup.string().required(),
  password: yup.string().max(64)
});

interface Props {
  onValid: SubmitHandler<FormFields>;
}

const ConnectionForm: React.FC<Props> = ({ onValid }) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<FormFields>({
    resolver: yupResolver(schema)
  });

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1">
          Connect to a ludo-server instance
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onValid)}>
          <TextField
            className={classes.formControl}
            {...register('serverAddress')}
            label="Server address"
            placeholder="http://"
            required
          />

          <TextField
            className={classes.formControl}
            {...register('password')}
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
