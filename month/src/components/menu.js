/*
* @Author: Marte
* @Date:   2018-03-29 17:05:13
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-30 10:14:54
*/

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Menu extends Component {
  constructor(props){
      super(props);
      this.state={
           menuList:[
              {title:"总体运营",url:"/pandect"},
              {title:"门急诊",url:"/outpatient"},
              {title:"住院",url:"/inhospital"}
           ]
      }
  }
  render() {
    return (
      <div className="menu">
          <ul className="title_nav clearfix">
              {
                this.state.menuList.map((item,index) => {
                    return(
                        <li className="fl" key={index}>
                           <NavLink activeClassName="is-active" to={item.url}>
                               {item.title}
                           </NavLink>
                        </li>
                    )
                })
              }
          </ul>
      </div>
    );
  }
}

export default Menu;