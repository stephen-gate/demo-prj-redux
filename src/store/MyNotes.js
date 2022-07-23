// USEFUL LINKS // FOLLOWED BY INIT SETUP // PART 2 // PART 3

//npm install react-redux

//npm install @reduxjs/toolkit


/*  To Use in conjuction with multi-sliced store...
FINALLY, WITH SLICES IN -slice.js outside the index.js

import { useSelector, useDispatch } from 'react-redux';
import {authActions} from '../store/authourization-slice';
import { counterActions } from '../store/counter-slice';

const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
 const  dispatch = useDispatch();
 dispatch(authActions.login());
 dispatch(authActions.logout());

 ie:
 const loginHandler = (event) => {
  event.preventDefault();
  dispatch(authActions.login());
}

const counter = useSelector(state => state.counter.counter);
const showCounter =  useSelector(state => state.counter.showCounter);
 const dispatch = useDispatch();
  dispatch(counterActions.toggleCounter());
  dispatch(counterActions.increment());
  dispatch(counterActions.increase(10));
  dispatch(counterActions.decrement());

  ie: 
      const incrementHandler = () => {
            dispatch(counterActions.increment());
      }

      { showCounter &&
            <div>
            {counter}
            </div>
      }
*/




/* SETUP
install the REDUX package
// not required if installing the toolkit:  npm install redux
and 
npm install react-redux
and
npm install @reduxjs/toolkit

create a new folder in scr   'store'
with THIS file named   index.js
now,, goto 1...
*/

/*
1... configureStore wants a pointer at a reducer function
as a parameter.
*/

/*
2.. the reducer 
the existing state as the first argument
the dispatch action as the second argument
3.. we can give the state an initial value
in this case, counter as zero in an object
*/

/*
4.. in the function body of the reducer we handle
the different actions, in this case increment and decrement
And return different state snapshots.
*/

/*
5.. point at the counterReducer function when we create the 
store
*/

/*
6.. now we can export the store and add the store to our 
components so that they can dispatch and listen
*/

/*
7.. provide this store to the react App

8.. this is typically done in the index.js file

8a.. import { Provider } from "react-redux";
     import store from "./store/index";

8b..  <Provider store={store}>
      <App />
    </Provider>

*/

/*

PART TWO:::: AT THE TOP LEVEL
after building the store wrap the App in index.js
...root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


PART THREE::::  IN THE COMPONENTS:::
after building the store and wrapping the App
with the <Provider store={store}>
we are going to accress the store from this component

3a::    import { useSelector } from 'react-redux';
selects just a slice

3b::     useSelector requires a function to determine which piece
of data we want from the store
in this case (state => state.counter)
which returns the piece hence 
const counter = useSelector(state => state.counter);

by setting this up we are subscribing so this component is now
auto notified whenever the state.counter changes in the store

3c::  now we can dispatch with useDispatch
import { useSelector, useDispatch } from 'react-redux';

*/