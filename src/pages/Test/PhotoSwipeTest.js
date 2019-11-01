/**
 * Created by lenovo on 2019/11/1.
 */
import React from 'react';

import {PhotoSwipe} from 'react-photoswipe';

let items = [
  {
    src: 'http://lorempixel.com/1200/900/sports/1',
    thumbnail: 'http://lorempixel.com/120/90/sports/1',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/2',
    thumbnail: 'http://lorempixel.com/120/90/sports/2',
    w: 1200,
    h: 900,
    title: 'Image 2'
  }
];

let options = {
  //http://photoswipe.com/documentation/options.html
};




class PhotoSwipeTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    }
  }

  getThumbnailContent = (item) => {
    // return (
    //   <img src={item.thumbnail} width="120px" height="90px"/>
    // );
    this.setState({
      isOpen: false
    })
  };

  render() {
    return (
      <PhotoSwipe isOpen={true} items={items} onClose={this.getThumbnailContent}/>
    );
  }
}

export default PhotoSwipeTest;