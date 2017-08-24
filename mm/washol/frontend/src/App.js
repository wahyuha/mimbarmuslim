import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route, Redirect
} from 'react-router-dom';
import Container from './container/App.js';
import Adzan from './adzan/App.js'
import { observer } from 'mobx-react';
import sholat from './module/sholat.js';
import sholatStore from './stores/ListSholat.js';
import actionsStore from './stores/actionsStore.js';
import dummy from './dummy.js';

@observer class App extends Component {
  constructor(props) {
    super(props);

    this.loadJadwal();
  }
  
  componentDidMount() {
    this.callAction();
  }
  componentWillUnmount() {

  }
  callAction() {
    var now = new Date();
    var nowHM = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    var jadwal = sholatStore.getJadwal();
    
    jadwal.map((value, index) => {
      var tSholat = this.parsedTime(value.waktu);
      var tNow = this.parsedTime(nowHM);

      var toNext = tSholat - tNow;
      if(toNext > 0) {
        this.setAdzan(value, toNext)
      }
      sholatStore.update(value.nama, {coming: toNext})
    })
    
  }
  setAdzan(data, toNext) {
    // console.log('sesaat lagi : '+toNext);
    toNext = parseInt(toNext)-parseInt(60); // welcoming time
    this.toAdzan = setTimeout(function() {
      this.welcomingAdzan(data);
    }.bind(this), parseInt(toNext)*1000);
    
  }
  welcomingAdzan(data) {
    let copyData = Object.assign({}, data);
    
    sholatStore.update(data.nama, {status: 'soon'});
    var minLeft = 60;
    
    var intervalID = setInterval(function(){
      if(minLeft > 0) {
        sholatStore.update(data.nama, {waktu: '- '+minLeft});
        sholatStore.update(data.nama, {status: 'soon'});
        minLeft--;
      }
      else {
        if(data.hukum == 'wajib') {
          // gotoAdzan
          sholatStore.update(data.nama, {waktu: copyData.waktu});
          sholatStore.update(data.nama, {status: 'running'});
          actionsStore.playAdzan(copyData);
          clearInterval(intervalID);

          setTimeout(function(){
            actionsStore.stopAdzan({name:actionsStore.actions.adzan.sholat});
            actionsStore.playTopbar('qobliyah', 'menuju iqomah');
          }, 120*1000)
        }
      }
    },1000);

  }
  parsedTime(formated) {
    // console.log(formated)
    var time = 0;
    formated = formated.split(':');
    var hour = formated[0],
    minutes = formated[1],
    second = 0;

    if(typeof(formated[2]) !== 'undefined')
      second = formated[2];

    time = (parseInt(hour*3600))+(parseInt(minutes*60))+parseInt(second);

    return time;
  }

  loadJadwal() {
    let date = new Date();
    sholat.setMethod('MWL');
    var jadwal = sholat.getTimes (date, [-6.21462, 106.84513], +7);
    var jadwalEx = dummy;
    jadwalEx.map((value, index) => {
      // if(value.nama != 'dhuhr') // demo
      jadwalEx[index].waktu = jadwal[value.nama];
    })
    
    sholatStore.setList(jadwalEx);

  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Container}/>
          <Route path="/adzan" component={Adzan}/>
        </div>
      </Router>
    );
  }
}

export default App;
