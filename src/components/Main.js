require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/my.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png'),
  mypic1 = require('../images/1.jpg'),
  mypic2 = require('../images/2.jpg'),
  mypic3 = require('../images/3.jpg'),
  mypic4 = require('../images/4.jpg'),
  mypic5 = require('../images/5.jpg'),
  mypic6 = require('../images/6.jpg'),
  mypic7 = require('../images/7.jpg'),
  mypic8 = require('../images/8.jpg'),
  picDatas = require('../datas/pics.json');


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <div className="notice">
          Please edit <code>src/components/Main.js</code> to get started!
        </div>
        <section className="pic-sec">
          <img src={mypic1}/>
          <img src={mypic2}/>
          <img src={mypic3}/>
          <img src={mypic4}/>
          <img src={mypic5}/>
          <img src={mypic6}/>
          <img src={mypic7}/>
          <img src={mypic8}/>
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
