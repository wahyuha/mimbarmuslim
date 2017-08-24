import { observable, computed, action } from 'mobx';

class Sholat {

    @observable nama;
    @observable waktu;
    @observable zona;
    @observable hukum;
    @observable gambar;
    @observable dalil;

    constructor(sholat = {}) {
        this.nama = sholat.nama;
        this.waktu = sholat.waktu;
        this.zona = sholat.zona;
        this.hukum = sholat.hukum;
        this.gambar = sholat.gambar;
        this.dalil = sholat.dalil;
    }

    @action setSholat = (sholat) => {
        this.nama = sholat.nama;
        this.waktu = sholat.waktu;
        this.zona = sholat.zona;
        this.hukum = sholat.hukum;
        this.gambar = sholat.gambar;
        this.dalil = sholat.dalil;
    }

}

const sholatStore = new Sholat();

export default sholatStore;
