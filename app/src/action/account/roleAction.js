import {createAction,createReducer} from 'redux-act';

//引入fetch依赖有什么作用
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

export const role_request=createAction('ROLE_REQUEST',()=>({isFetching:true}));
export const role_recive=createAction('ROLE_RECIVE',(role)=>role);

export function fetchRoles(){
	return dispatch=>{//dispatch是参数还是函数
		dispatch(role_request());
		return(fetch("",{
			method:"get",
			mode:"nocors",//mode什么用
			headers:{
				"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"				
			}
		}
	).then((res)=>{return res.json();}).then((data)=>{
		const roles ={
			isFetching:false,
			meta:{
				total:data.total,
				perPage:10,
				page:1
			},
			data:data.rowData
		};
		dispatch(role_recive(roles));//此处的dispatch指向另一个action有什么用,store通过dispatch(action)来更新state
	}).catch((e)=>{console.log(e.message);}))
	}
}