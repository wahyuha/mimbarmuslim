import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route, Redirect
} from 'react-router-dom';
import BoxTime from '../sholat/BoxTime.js'
import { observer } from 'mobx-react';
import listSholatStore from '../stores/ListSholat.js';
import actionsStore from '../stores/actionsStore.js';
import Clock from '../clock/App.js';
import Topbar from '../topbar/App.js';
import Info from '../info/App.js';
import Adzan from '../adzan/App.js';
import style from './index.css';

@observer class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jadwal : listSholatStore.jadwal
    };

  }

  render() {
    // console.log(actionsStore.isPlayAdzan());
    if(actionsStore.isPlayAdzan() === true)
      return (
        <Redirect to={'/adzan'}/>
      )

    return (
      <div className={style.mainbg}>
        <Topbar />
        <div className="container">
          <div className="row">
            <Info />
            <div className="col-md-6 col-sm-12">
              <Clock />
            </div>
          </div>
          <div className={"row text-center "+style.jadwalBox}>
            {
              this.state.jadwal.map((value, index) =>
              {
                return <BoxTime entry={value} />
              })
            }
          </div>
          
        </div>
      </div>
    );
  }
}

export default Container;
