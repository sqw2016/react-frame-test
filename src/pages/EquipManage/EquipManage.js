/**
 * Created by lenovo on 2019/10/8.
 */
import React from 'react';
import { Icon } from 'antd';

import styles from './EquipManage.less';

class EquipManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: {
        id: 1,
        name: '公司',
        children: [
          {
            id: 2,
            name: '厂房一',
            children: [

            ]
          },
          {
            id: 3,
            name: '厂房二',
          },
          {
            id: 4,
            name: '厂房三',
          },
        ]
      }
    }
  }

  setTreeData() {
    const {treeData} = this.state;
    const obj = {...treeData};
    this.setState({
      treeData: obj,
    })
  }

  foldTreeItem = (item) => {
    if (item.children) {
      item.unfold = !item.unfold;
      if (item.unfold && !item.children.length) {
        this.getChildrenData(item);
      } else {
        this.setTreeData();
      }
    }
  };

  getChildrenData = (item) => {
    item.loading = true;
    this.setTreeData();
    setTimeout(() => {
      item.loading = false;
      item.children = [
        {
          id: 5,
          name: '产线一',
        },
        {
          id: 6,
          name: '产线二',
        },
        {
          id: 7,
          name: '产线三',
        },
      ];
      this.setTreeData();
    }, 2000)
  };

  renderTreeChildren(items) {
    return items && items.length ? (
      <div className={styles.treeChildren}>
        {
          items.map(item => {
            const hasChildren = item.children;
            return (
              <div key={item.id} className={styles.subTreeItem}>
                <span className={styles.itemLiner}></span>
                <div>
                  <div onClick={this.foldTreeItem.bind(null, item)} className={styles.treeItemName}>
                    { hasChildren ? item.loading ? <Icon type="loading" /> : <Icon type={item.unfold ? 'minus-square' : 'plus-square'} /> : '' }
                    <span className={hasChildren ? styles.pl5 : ''}>{item.name}</span>
                  </div>
                  {
                    item.unfold ? this.renderTreeChildren(item.children) : ''
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    ) : '';
  }

  render() {
    const { treeData } = this.state;
    return (
      <div>
        <div>
          <div>
            <div className={styles.treeItemName}>{ treeData.name }</div>
            {
              this.renderTreeChildren(treeData.children)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default EquipManage;