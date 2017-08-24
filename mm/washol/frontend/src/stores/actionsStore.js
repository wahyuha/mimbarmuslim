import { observable, computed, action } from 'mobx';

class Actions {

    @observable actions;
    @observable topbars;
    @observable info;

    constructor(actions = []) {
        this.actions = 
            {
                adzan: {
                    nama: 'adzan',
                    play: 0,
                    priority: 1,
                    wording:'',
                    sholat: ''
                },
                qobliyah: {
                    nama: 'qobliyah',
                    play: 0,
                    priority: 2,
                    duration: 7,
                    wording:'menuju iqomah'
                },
                iqomah: {
                    nama: 'iqomah',
                    play: 0,
                    priority: 2,
                    duration: 1,
                    wording:'Iqomah'
                }
            };

            this.topbars = {
                play : 0,
                name: '',
                duration: 0,
                wording: ''
            }
    }

    // @action play = (name, obj = {}) => {
    //     Object.keys(obj).map((ind) => {
    //         this.actions[name][ind] = obj[ind];
    //     })
    // }

    @observable getActions = (name) => {
        if(typeof(name) !== 'undefined')
            return this.actions.nama;

        return this.actions;
    }

    @action playAdzan = (data) => {
        this.actions['adzan'] = {
            play: 1,
            sholat: data.nama
        }
    }

    @action stopAdzan = (data) => {
        this.actions['adzan'].play = 0;
        this.actions['adzan'].wording = '';
    }

    @observable isPlayAdzan = () => {
        return parseInt(this.actions['adzan']['play']) > 0;
    }

    @action play = (name, wording) => {
        this.actions.name.play = 1;
        this.actions.name.wording = wording;
    }

    @action stop = (name, wording) => {
        this.actions.name.play = 0;
        this.actions.name.wording = '';
    }

    @action playTopbar = (name, wording) => {
        this.topbars = {
            play : 1,
            name: name,
            duration: 7,
            wording: wording
        }
    }

    @observable getTopbar = () => {
        return this.topbars;
    }

}

var store = window.store = new Actions();
export default store;