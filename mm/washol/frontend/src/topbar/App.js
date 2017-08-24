import React, { Component } from 'react';
import { observer } from 'mobx-react';
import style from './index.css';
import anim from './animation.css';
import sholatStore from '../stores/ListSholat.js';
import actionsStore from '../stores/actionsStore.js';

@observer class Topbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            wording: '',
            classWord: '',
            intDuration: 0,
            progressWidth: 0,
            duration: 0,
            durationFix: 0,
            blinkInfinite: ''
        }

        // this.runAction.bind(this);
    }

    componentDidMount() {
        this.runAction();
    }
    componentWillUnmount() {
        // clearInterval(this.intervalID);
    }
    runAction() {
        var topbars = actionsStore.getTopbar();
        this.setState({
            wording: topbars.wording,
            classWord: 'tbInfo',
            intDuration: 0,
            progressWidth: 0,
            duration: parseInt(topbars.duration)*60,
            durationFix: parseInt(topbars.duration)*60,
            blinkInfinite: 'blinkInfinite'
        });

        this.intervalID = setInterval(
            () => this.progressUp(),    
        1000);
        setTimeout(function() { 
            this.setState({
                blinkInfinite: ''
            })
        }.bind(this), 3000);
    }
    stopAction() {
        clearInterval(this.intervalID);
    }
    progressUp() {
        var persecond       = 100/this.state.durationFix;
        
        if(this.state.duration >= 0) {
            if(this.state.duration < 10) {
                this.beep(this.state.duration);
            }
            var newWidth = this.state.progressWidth+persecond;
            this.setState({
                progressWidth: newWidth
            });
            this.state.intDuration++;
            this.state.duration--;
        }
        else {
            this.setWord('Luruskan Shaf...!', 'tbUrgent');
            clearInterval(this.intervalID);
            setTimeout(function() { 
                this.setWord('Utamakan Sholat Jamaah Tepat Waktu..!', 'tbInfo');
            }.bind(this), 7*60*1000);
        }
    }

    beep(second) {
        var sound = 'beep.mp3';
        if(second == 0)
            sound = 'beep_long.mp3';

        var audio = new Audio;
        audio.src = assetUrl+'sound/'+sound;
        audio.play();
    }

    setWord(wording, classWord) {
        this.setState({
            wording: wording,
            classWord: classWord,
            blinkInfinite: 'blinkInfinite',
            progressWidth: 0
        })

        setTimeout(function() { 
            this.setState({
                blinkInfinite: ''
            })
        }.bind(this), 3000);
    }

    render() {
        var topbars = actionsStore.getTopbar();
        console.log(topbars)
        var menit   = Math.floor(this.state.duration/60);
        var second  = (this.state.duration - (menit*60));

        var menit_ex = ("00"+menit).substr(-2);
        var second_ex = ("00"+second).substr(-2);
        
        var parsedTime = menit_ex+":"+second_ex;
        if(this.state.duration < 0)
            parsedTime = '';

        var tbhide = topbars.play > 0 ? '' : 'tbHide';
        
        return (
            <div className={style.topbar+" "+style['tbInfo']+" "+style[this.state.classWord]+" "+style[tbhide]}>
                <div className={anim.blink+" "+anim[this.state.blinkInfinite]}>{parsedTime} {this.state.wording}</div>
                <div className={style['progress-bar']+" progress-bar "+style.tbUrgent} style={{width: this.state.progressWidth+"%"}}></div>
            </div>
        );
  }
}

export default Topbar;
