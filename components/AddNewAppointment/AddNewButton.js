
import classes from "./AddNewButton.module.css";
import Button from "../UI/Button";
import { useSelector, useDispatch } from 'react-redux';
import {authActions} from '../../store/authorization-slice';


const AddNewButton = (props) => {

  const hasAuthorization = useSelector(state => state.auth.hasAuthorization)
  const  dispatch = useDispatch();

const handleAddNew = () => {

  if ( !hasAuthorization ){
    dispatch(authActions.warningAuthorization('ADD'));
  }

    props.onAddNewClick();
  };

  const handleAuthorization = () => {

    if ( hasAuthorization ){
      dispatch(authActions.removeAuthorization());
    } else {
      dispatch(authActions.obtainAuthorization());
    }
  };

  const authButtonText = hasAuthorization ? 'REMOVE AUTHORIZATION' : 'OBTAIN AUTHORIZATION';
 
  return (
    <div>
      <div className={classes.div_button_plate}>
      <Button 
        onClick={handleAuthorization}>
          {authButtonText}
        </Button>
        <Button 
        onClick={handleAddNew}>
          ADD NEW APPOINTMENT
        </Button>
      </div>
    </div>
  );
};

export default AddNewButton;
