import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    State: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="state-native-required">State</InputLabel>
        <Select
          native
          value={state.State}
          onChange={handleChange}
          name="State"
          inputProps={{
            id: 'state-native-required',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Alabama"}>Alabama</option>
          <option value={"Alaska"}>Alaska</option>
          <option value={"Arizona"}>Arizona</option>
          <option value={"Arkansas"}>Arkansas</option>
          <option value={"California"}>California</option>
          <option value={"Colorado"}>Colorado</option>
          <option value={"Connecticut"}>Connecticut</option>
          <option value={"Delaware"}>Delaware</option>
          <option value={"DC"}>District of Columbia</option>
          <option value={"Florida"}>Florida</option>
          <option value={"Georgia"}>Georgia</option>
          <option value={"Hawaii"}>Hawaii</option>
          <option value={"Idaho"}>Idaho</option>
          <option value={"Illinois"}>Illinois</option>
          <option value={"Indiana"}>Indiana</option>
          <option value={"Iowa"}>Iowa</option>
          <option value={"Kansas"}>Kansas</option>
          <option value={"Kentucky"}>Kentucky</option>
          <option value={"Louisiana"}>Louisiana</option>
          <option value={"Maine"}>Maine</option>
          <option value={"Maryland"}>Maryland</option>
          <option value={"Massachusetts"}>Massachusetts</option>
          <option value={"Michigan"}>Michigan</option>
          <option value={"Minnesota"}>Minnesota</option>
          <option value={"Mississippi"}>Mississippi</option>
          <option value={"Missouri"}>Missouri</option>
          <option value={"Montana"}>Montana</option>
          <option value={"Nebraska"}>Nebraska</option>
          <option value={"Nevada"}>Nevada</option>
          <option value={"New Hampshire"}>New Hampshire</option>
          <option value={"New Jersey"}>New Jersey</option>
          <option value={"New Mexico"}>New Mexico</option>
          <option value={"New York"}>New York</option>
          <option value={"North Carolina"}>North Carolina</option>
          <option value={"North Dakota"}>North Dakota</option>
          <option value={"Ohio"}>Ohio</option>
          <option value={"Oklahoma"}>Oklahoma</option>
          <option value={"Oregon"}>Oregon</option>
          <option value={"Pennsylvania"}>Pennsylvania</option>
          <option value={"Rhode Island"}>Rhode Island</option>
          <option value={"South Carolina"}>South Carolina</option>
          <option value={"South Dakota"}>South Dakota</option>
          <option value={"Tennessee"}>Tennessee</option>
          <option value={"Texas"}>Texas</option>
          <option value={"Utah"}>Utah</option>
          <option value={"Vermont"}>Vermont</option>
          <option value={"Virginia"}>Virginia</option>
          <option value={"Washington"}>Washington</option>
          <option value={"West Virginia"}>West Virginia</option>
          <option value={"Wisconsin"}>Wisconsin</option>
          <option value={"Wyoming"}>Wyoming</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      {/*Need Required Form Above*/}
    </div>
  );
}