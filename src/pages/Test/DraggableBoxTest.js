/**
 * Created by lenovo on 2019/10/17.
 */
import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import CornerBorderBox from '../../components/CornerBorderBox';

import styles from './index.less';

const ReactGridLayout = WidthProvider(RGL);

class DraggedBoxTest extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 12
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    const { layout } = this.state;
    return _.map(_.range(this.props.items), function(i) {
      return (
        <CornerBorderBox className={styles.text} key={i} data-grid={layout[i]}>
          {i}
        </CornerBorderBox>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const w = Math.ceil(Math.random() * 4);
      const y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: w,
        h: y,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

export default DraggedBoxTest;