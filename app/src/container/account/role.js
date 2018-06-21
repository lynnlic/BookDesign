import React from 'react';
import { Table, Tooltip, Button,Card,Icon} from 'antd';//元素标签库
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchRoles} from '../../action/account/roleAction.js';
function mapStateToProps(state) {
   return { roles: state.roles };
}

function mapDispatchToProps(dispatch) {
  // bindActionCreators(ActionCreators, dispatch)
  return {
    fetchRoles: (param0,param1) => dispatch(fetchRoles(param0,param1))
  };
}

export  class Role extends React.Component{
    constructor(props){
      super(props);
    }
    componentDidMount(){
      console.log('fetchRoles is ',fetchRoles);
      this.props.fetchRoles();
    }
    render(){
      const columns = [{
          title: '序号',
          render:(text,record,index) => (
            <span>{index+1}</span>
          )
      },{
          title: '类型',
          dataIndex: 'TYPE'
      }, {
          title: '备注',
          dataIndex: 'REMARK'
      },
      /*{
          title: '状态',
          dataIndex: 'STATE',
          render:(text) => ( (text==0)?"禁用":"启用" )
      }*/ {
          title: '操作',
          dataIndex: 'handle',
          render:
              (text,record,index) => (
                  <span>
                      <Tooltip title="编辑"><Link to={"/" }><Icon type="edit" /></Link></Tooltip>&nbsp;&nbsp;
                      <Tooltip title="查看"><Link to={"/" }><Icon type="filetext" /></Link></Tooltip>&nbsp;&nbsp;
                  </span>
              )
      }];

      return(
            <div className='content'>
              <Card title=' ' extra={
                      <div id="tools" className="div-right" style={{marginBottom: 10}}>
                        <span>
                            <Tooltip title="新增" ><Link to="/"><Icon type="plus" /></Link></Tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Tooltip title="删除"><Link to="/"><Icon type="delete" style={{color:'red'}}/></Link></Tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                      </div>
                    } style={{height:'auto' }}>
                    <Table

                        dataSource={ [] }
                        columns={ columns }
                        size="middle"
                        loading={ false }
                    />
              </Card>
            </div>
      );
    }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Role);
