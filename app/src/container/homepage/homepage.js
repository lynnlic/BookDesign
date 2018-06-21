import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './homepage.less';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
          <div>
              <div className="bookshow-header">
                  <div><img src={require('../../images/title.png')}/></div>
                  <div>
                      <Link to='/login'>
                        <span 
                            style={{
                            fontSize:20,
                            color:"#333333",
                            lineHeight:'30px',
                            fontFamily:"Microsoft YaHei",
                            fontWeight:"bold"}}>
                            登录
                        </span>
                      </Link>
                    </div>
              </div>
              <center>
                  <span 
                     style={{ 
                         fontSize:20,
                         color:"#91C842",
                         fontWeight:"bold",
                         fontFamily:"Microsoft YaHei"}}>
                  欢迎来到推书网，在这里你将有意想不到的收获哦！
                  </span>
              </center>
          </div>
        )
    }
}