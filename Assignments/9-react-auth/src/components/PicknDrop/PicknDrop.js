import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useForm, Controller } from "react-hook-form";
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: '16px 0'
    },
    '& input[type="submit"]': {
      background: '#444644',
      color: '#fff',
      cursor: 'pointer'
    }
  }
}));

const PicknDrop = props => {
  const {setDestinationInfo, setIsPicked} = props;
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    errors
  } = useForm();

  const onSubmit = data => {
    setIsPicked(true);
    setDestinationInfo(data);
  };

  return <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <Controller as={TextField} required fullWidth type="text" name="pick" control={control} id="outlined-basic" label="Pick" variant="outlined" error={errors.pick && errors.pick.message} helperText={errors.pick && errors.pick.message} rules={{
      required: {
        value: true,
        message: 'Please insert your location'
      }
    }} />
            <Controller as={TextField} required fullWidth type="text" name="drop" control={control} id="outlined-basic" label="Drop" defaultValue="" variant="outlined" error={errors.drop && errors.drop.message} helperText={errors.drop && errors.drop.message} rules={{
      required: {
        value: true,
        message: 'Please insert destination location'
      }
    }} />

            <Controller as={TextField} required fullWidth type="date" name="date" control={control} id="outlined-basic" variant="outlined" error={errors.date && errors.date.message} helperText={errors.date && errors.date.message} rules={{
      required: {
        value: true,
        message: 'You must specify Date'
      }
    }} />
            <TextField fullWidth type="submit" value="Search" variant="outlined" />
        </form>;
};

export default PicknDrop;