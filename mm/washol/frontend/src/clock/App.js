import React, { Component } from 'react';
import { observer } from 'mobx-react';
import style from './index.css';

@observer class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classdot: "",
            hour: '00',
            minutes: '00',
            second: '00',
            day: 'Senin',
            dates: '01',
            month: 'Januari',
            year: '2017'
        }

    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),    
        1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        var now = new Date();
        var today = days[now.getDay()],
        thisMonth = months[now.getMonth()];

        this.setState({
            hour: ("00" + now.getHours()).substr(-2),
            minutes: ("00" + now.getMinutes()).substr(-2),
            second:("00" + now.getSeconds()).substr(-2),
            classdot: '',
            day: today,
            dates: ("00" + now.getDate()).substr(-2),
            month: thisMonth
        });
        
        setTimeout(function() { 
            this.blinks();
        }.bind(this), 500);
    }
    blinks() {
        this.setState({
            classdot: 'dot-low'
        });
    }

    blinksUp() {
        this.setState({
            classdot: ''
        });
    }

    render() {
        return (
            <div className={style.clockBox}>
              <div className={style.timeBox}>{this.state.hour}<dot className={style[this.state.classdot]}>:</dot>{this.state.minutes}</div>
              <span>{this.state.day}, {this.state.dates} {this.state.month}</span>
            </div>
        );
    }
}

export default Clock;