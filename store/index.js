import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authorization-slice';
import crudReducer from './crud-slice';

const store = configureStore({
  reducer: { crud: crudReducer, auth: authReducer },
});

export default store;