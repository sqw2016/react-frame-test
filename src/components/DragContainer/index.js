/**
 * Created by lenovo on 2019/10/31.
 */
import React from 'react';
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

function DragContainer(props) {
  const { children, ...rest } = props;
  return (
    <ReactGridLayout
      {
        ...rest
      }
    >
      { children }
    </ReactGridLayout>
  )
}

export default DragContainer;