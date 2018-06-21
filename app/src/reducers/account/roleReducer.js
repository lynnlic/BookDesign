import initialState from '../initialState.js';
import {  createReducer } from 'redux-act';//需了解
import  * as action from '../../action/account/roleAction.js';
var Objectassign = require('object-assign');
 const roleReducer=createReducer(function(on ,off){
  on(action.role_requst,(state,content)=>Objectassign(state+content));
  on(action.role_recive,(state,content)=>Objectassign(state,content));
});
export default roleReducer;
