/**
 * Created by lenovo on 2019/10/31.
 */
import React from 'react';

function DraggablePanel(props) {
  const { children, leftTool, rightTool, title, ...rest } = props;
  return (
    <div
      {
        ...rest
      }
    >
      <div>{title}</div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: 200
      }}>
        {
          leftTool
        }
        {
          rightTool
        }
      </div>
      <div style={{width: '100%', height: 'calc(100% - 75px)', marginTop: 10}}>
        {children}
      </div>
    </div>
  );
}

export default DraggablePanel;