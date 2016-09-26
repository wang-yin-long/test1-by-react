/**
 * Created by wang52802 on 16/9/20.
 */
require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/my.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png'),
  mypic = require('../images/1.jpg');


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <section>
          <img src={yeomanImage}/>
          <img src={mypic} className="my-pic"/>
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
