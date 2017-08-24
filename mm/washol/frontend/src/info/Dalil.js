import React, { Component } from 'react';
import { observer } from 'mobx-react';
import style from './index.css';

@observer class Dalil extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={"col-md-6 col-sm-12 jumbotron hero-spacer "+style.jumbotron}>
              <h1>Mari Sholat Jamaah!</h1>
              <p>“Sungguh aku berkeinginan untuk menyuruh seseorang sehingga shalat didirikan, kemudian kusuruh seseorang mengimami manusia, lalu aku bersama beberapa orang membawa kayu bakar mendatangi suatu kaum yang tidak menghadiri shalat, lantas aku bakar rumah-rumah mereka” (HR. Muslim)</p>
            </div>
        );
    }
}

export default Dalil;