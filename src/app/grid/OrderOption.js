import React from "react";
import { useDispatch } from "react-redux";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { SetSortOptions } from "../pages/addPost/store/addPostSlice";
import { makeStyles } from '@material-ui/core/styles';

function OrderOption(props) {

  const useStyles = makeStyles(theme => ({
    SelectOrder: {
      backgroundColor:"rgb(242, 242, 242)",
      width: "150px",
      // margin: "0 5px",
      borderRadius:"4px",
      border: "1px solid #6c757d"
      
    },
  }));
  const classes = useStyles(props);

  const dispatch = useDispatch();
  return (
    <FormControl>
      
      <InputLabel htmlFor="age-native-required">Order By</InputLabel>
    <Select
      defaultValue=""
      value=""
      native
      className={classes.SelectOrder}
      name="order"
      onChange={(e) =>
        dispatch(
          SetSortOptions({
            sortProperty: "vote",
            reverseSort: e.target.value === "true",
          })
        )
      }
    >
      <option value="" >
         Order by
        
      </option>
      <option value="false" selected="false">
        Most Voted (Z → A)
      </option>
      <option value="true" selected="false">
        Less Voted (A → Z)
      </option>
    </Select>
      </FormControl>
  );
}

export default OrderOption;
