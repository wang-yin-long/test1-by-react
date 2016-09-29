require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/my.css');

import React from 'react';

// 获取图像数据
var imgDatas = require('../datas/pics.json');

// 图像数据转化为图像URL
function getImgURL(imgDatasArr) {
  for (var i = 0; i < imgDatasArr.length; i++) {
    var oneImgData = imgDatasArr[i];
    oneImgData.imgURL = require('../images/' + oneImgData.imageName);
    imgDatasArr[i] = oneImgData;
  }
  return imgDatasArr;
}
imgDatas = getImgURL(imgDatas);

class ImgFigure extends React.Component {
  render() {
    return (
      <figure  className="img-figure">
        <img src={this.props.data.imgURL}
             alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}


class AppComponent extends React.Component {

  render() {
    var controllerUnits = [],
      imgFigures = [];

    imgDatas.forEach(function (value) {
      imgFigures.push(<ImgFigure data={value}/>);
    });

    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
