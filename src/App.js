import AppRedux from "./AppRedux";
import { Provider } from "react-redux";
import store from "./store/index";
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.div_run_stand_alone}>
    <Provider store={store}>
        <AppRedux />
      </Provider>
    </div>
  );
}

export default App;
