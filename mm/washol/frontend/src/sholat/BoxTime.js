import React, { Component } from 'react';
import style from './index.css';
import { observer } from 'mobx-react';
// import sholatStore from './stores/ListSholat.js';

@observer class BoxTime extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    var active = '';
    if(this.props.entry.status == 'running') {
      active = 'current'
    }
    else if(this.props.entry.status == 'soon') {
      active = 'soon'
    }
    
    return (
      <div className={"col-md-"+this.props.entry.col+" col-sm-"+this.props.entry.colsm+" hero-feature"}>
          <div className={style.wkt+" "+style.wkt+" "+style[active]}>
              <div className={style.caption}>
                <h2>{this.props.entry.waktu}</h2>
                <span>{this.props.entry.label}</span>
              </div>
          </div>
      </div>
    );
  }
}

export default BoxTime;