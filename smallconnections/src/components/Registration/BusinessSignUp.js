import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NativeSelect from '../NativeSelect';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{marginTop: "-19px"}}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Small Connections
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function BusinessSignUp(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" style={{marginTop: "-18px", backgroundColor: "#edf0f0", borderRadius: "10px", paddingBottom: "1px"}}> {/*Testing height of form here*/}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <ButtonGroup size="secondary" aria-label="small outlined button group">
        <Button onClick={props.onUserClick} style={{marginTop: "10px"}}>User</Button>
        <Button onClick={props.onBusinessClick}style={{color: "white", backgroundColor: "#3f51b5", marginTop: "10px"}}>Business</Button>
        </ButtonGroup>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            {/*TEST NEW FORM ENTRY HERE*/}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Business Name"
                label="Business Name"
                name="Business Name"
                autoComplete="Business Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <NativeSelect></NativeSelect>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ZipCode"
                label="Zip-Code"
                name="Zip-Code"
                autoComplete="Zip-Code"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="agreeToTerms" color="primary" />}
                label="I agree to the Terms and Conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}