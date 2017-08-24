import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import listSholatStore from '../stores/ListSholat.js';
import actionsStore from '../stores/actionsStore.js';
import { Player } from 'video-react';

@observer class Adzan extends Component {
  constructor(props) {
    super(props)
    
    this.state = {height: 0};
  }
  componentDidMount() {

  }
  
  componentWillMount(){
      this.setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
  }
  finish() {
    actionsStore.stopAdzan({name:actionsStore.actions.adzan.sholat});
    actionsStore.playTopbar('qobliyah', 'menuju iqomah');
    // console.log(actionsStore.actions.adzan);
  }

  render() {
    if(actionsStore.isPlayAdzan() === true)
        return (
            <div>
                <Player
                    autoPlay
                    src={assetUrl+"video/magrib.mkv"}
                    width={this.state.width}
                />
                <button onClick={this.finish.bind(this)}>finish</button>
            </div>
        );
    
    return (
      <Redirect to={'/'}/>
    )
  }
}

export default Adzan;