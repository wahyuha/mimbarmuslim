import { observable, computed, action } from 'mobx';

class ListSholat {

    @observable jadwal;

    constructor(jadwal = []) {
        this.jadwal = jadwal
    }

    @action setList = (jadwal = []) => {
        var jw_length = jadwal.length;
        
        var jadwal_ex = [];
        jadwal.map((value, index) => {
            var value_ex = {
                nama : value.nama,
                label: value.label,
                waktu : value.waktu,
                zona : value.zona,
                hukum : value.hukum,
                gambar : value.gambar,
                dalil : value.dalil,
                status : value.status,
                col: 2,
                colsm: 4
            };

            jadwal_ex.push(value_ex);
        })
        this.jadwal = jadwal_ex;
    }

    // update('isya', {status: 'running'})
    @action update = (nama, obj = {}) => {
        var index = this.jadwal.findIndex(x => x.nama==nama);
        
        Object.keys(obj).map((ind) => {
            this.jadwal[index][ind] = obj[ind];
        })
    }
    
    @observable getJadwal = () => {
        return this.jadwal;
    } 

}

const listSholatStore = new ListSholat();
window.sholat = listSholatStore;
export default listSholatStore;
