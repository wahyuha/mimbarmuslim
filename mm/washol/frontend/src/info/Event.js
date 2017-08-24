import React, { Component } from 'react';
import { observer } from 'mobx-react';
import style from './index.css';
import eve from './event.css';

@observer class Event extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={"col-md-6 col-sm-12 jumbotron hero-spacer "+style.jumbotron}>
              <h1>Jadwal Kajian</h1>
              <div className={eve.jdw}>
                  <div className={eve['jwd-point']}>
                      <div className={eve['jdw-circle']+" img-circle"}>
                          <div className={eve['date-number']}>09</div>
                          <span>Agu</span>
                      </div>
                      <div className={eve['jdw-content']}>
                          <h2>Tafsir Surat Al-Ghasyiyah</h2>
                          <div>Tafsir Juz'amma</div>
                          <div>Pemateri: Ustadz Muhammad Ghozali</div>
                          <div>Waktu: 12.00 - selesai</div>
                      </div>
                  </div>
                  <div className={eve['jwd-point']}>
                     <div className={eve['jdw-circle']+" img-circle"}>
                        <div className={eve['date-number']}>28</div>
                        <span>Agu</span>
                    </div>
                    <div className={eve['jdw-content']}>
                        <h2>10 Hari Pertama Bulan Dzulhijah</h2>
                        <div>Kajian Tematik</div>
                        <div>Pemateri: Ustadz Dr. Hari Susanto, LC</div>
                        <div>Waktu: 12.00 - selesai</div>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Event;