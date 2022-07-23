

import classes from "./Warning.module.css";
import { useSelector } from 'react-redux';

const Warning = () => {
  
  const authWarning = useSelector(state => state.auth.authWarning );

  return (
    <div className={classes.div_warning}>
      <div>
        <h3>Authorization is required to {authWarning}.</h3>
      </div>
      <div>
        <h3>Click  OBTAIN AUTHORIZATION  to continue.</h3>
      </div>
    </div>
  );
};

export default Warning;
