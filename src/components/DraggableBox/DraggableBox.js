/**
 * Created by lenovo on 2019/10/17.
 */
import React from 'react';
import { Icon } from 'antd';

import styles from './DraggableBox.less';

class DraggableBox extends React.Component {
  constructor(props) {
    super(props);
    this.dragRef = React.createRef();
    this.state = {
      mouseOver: false,
      dragging: false,
      parentNode: {
        node: null,
        position: {
          x: 0,
          y: 0
        },
        w: 0,
        h: 0
      },
      startMousePosition: { // 拖拽开始时鼠标的位置
        x: 0,
        y: 0,
      },
      offset: { // 拖拽过程中鼠标的偏移量
        x: 0,
        y: 0,
      }
    }
  }

  componentDidMount() {
    const parentNode = this.dragRef.current.offsetParent;
    this.setState({
      parentNode: {
        node: parentNode,
        position: {
          x: parentNode.offsetLeft,
          y: parentNode.offsetTop,
        },
        w: parentNode.clientWidth,
        h: parentNode.clientHeight
      }
    })

  }

  mouseOver = () => {
    this.setState({
      mouseOver: true,
    })
  };

  mouseOut = () => {
    this.setState({
      mouseOver: false,
    })
  };

  dragStart = (e) => {
    this.setState({
      dragging: true,
      startMousePosition: {
        x: e.screenX,
        y: e.screenY,
      }
    })
  };

  drag = (e) => {
    if(e.screenX) {
      const { startMousePosition, offset } = this.state;
      this.setState({
        startMousePosition: {
          x: e.screenX,
          y: e.screenY
        },
        offset: {
          x: offset.x + e.screenX - startMousePosition.x,
          y: offset.y + e.screenY - startMousePosition.y
        }
      })
    }
  };

  mouseDown = (e) => {
    console.log(e.target.offsetX);
    console.log(e.clientX, e.clientY);
  };

  dragEnd = () => {
    this.setState({
      dragging: false,
    })
  };

  render() {
    const { style, className } = this.props;

    const { mouseOver, offset, dragging } = this.state;

    // const boxShadowTranslate = {
    //   x: ,
    //   y: ,
    // };

    return (
      <div
        ref={this.dragRef}
        draggable
        onMouseOver={this.mouseOver}
        onMouseDown={this.mouseDown}
        onMouseOut={this.mouseOut}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          ...style
        }}
        onDragStart={this.dragStart}
        onDrag={this.drag}
        onDragEnd={this.dragEnd}
        className={`${styles.draggableBoxMain} ${className}`}
      >
        {
          mouseOver ? (
            <div className={styles.dragBoxClose}>
              <Icon type="close" size="mini" className={styles.closeIcon} />
            </div>
          ) : ''
        }
        <div style={{opacity: dragging ? 0.5 : 1}} className={styles.boxContent}>
          5262
        </div>
        {
          dragging ? (
            <div className={styles.boxShadow}>

            </div>
          ) : ''
        }
        {
          mouseOver ? (
            <div className={styles.dragIconContainer}>
              <Icon type="drag" className={styles.closeIcon} />
            </div>
          ) : ''
        }
      </div>
    );
  }
}

export default DraggableBox;