import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
//import { fetchExit } from './actions/exit/exitActions.js';

import Routes from './router.js';
import {Layout,Avatar} from 'antd';
import Sidebar from './components/sidebar/sidebar.js';

import './mainpage.less';

// 引入垫片兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
const {Header,Sider,Content} =Layout;
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleExit(e){
      e.preventDefault();
    }

    render() {
        return (
            <div>
              <Layout>
                    <Sider trigger={null} collapsible width='250'>
                      <div className="main_side_bar">
                        <div className='header'><span className='head-img' /></div>
                        <Sidebar></Sidebar>
                      </div>
                    </Sider>

                    <Layout>
                    <Header></Header>
                    <div className="main_page_rightWrap" children={Routes}>

                  </div>
                </Layout>
              </Layout>
            </div>

        )
    }
}
