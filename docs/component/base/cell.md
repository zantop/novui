---
group:
  title: 基础组件
---

# Cell 单元格

## 引入

组件一般与`NovPanel`组件一同使用

```js
import { NovCell } from 'novui';
//如按需引入样式
//@import "novui/dist/style/components/cell.scss";
```


## 参数

| 参数          | 说明               | 类型    | 默认值  |
| ------------- | ------------------ | ------- | ------- |
| title         | 标题               | string  | 空      |
| titleColor    | 标题颜色           | string  | -       |
| titleFontSize | 标题字体大小       | string  | 空      |
| icon          | 标题左侧图标       | string  | -       |
| iconColor     | 图标颜色           | string  | -       |
| iconFontSize  | 图标大小           | string  | 16px    |
| border        | 底部是否有边框     | boolean | true    |
| panelHeader   | 是否展示为面板标题 | boolean | false   |
| disabled      | 是否为不可以点击   | boolean | false   |
| value         | 右侧显示值         | string  | 空      |
| valueColor    | 右侧显示值颜色     | string  | #606266 |
| arrow         | 是否右侧显示箭头   | boolean | false   |
| content       | 下方详细描述       | string  | 空      |
| height        | 单元格行高         | string  | 45px    |

## 事件
| 方法名  | 说明                                 | 参数 | 返回值 |
| ------- | ------------------------------------ | ---- | ------ |
| onClick | 点击按钮，状态disabled为true时不触发 | -    | -      |


## 使用

```js
import React from 'react';
import { View } from '@tarojs/components';
import { NovPanel, NovCell } from 'novui';
import './index.scss';

const Comp = () => {
    const handleClick = () => {
    Taro.showToast({
      icon: "none",
      title: "点击成功",
    });
  };
  return (
    <View>
      <NovPanel title="基础用法" className="margin-bottom20 pagecell">
          <NovCell title="标题一" border onClick={handleClick} />
          <NovCell
            title="字体大小16颜色green"
            titleColor="green"
            titleFontSize="16"
            onClick={handleClick}
          />
        </NovPanel>
        <NovPanel title="图标箭头" className="margin-bottom20 pagecell">
          <NovCell
            title="标题一"
            icon="voice"
            iconColor="#f63"
            iconFontSize="20"
            arrow
            onClick={handleClick}
          />
        </NovPanel>
        <NovPanel className="margin-bottom20 pagecell">
          <NovCell title="标题展示" panelHeader border />
          <NovCell
            title="优惠券"
            value="-20"
            valueColor="#f63"
            arrow
            onClick={handleClick}
          />
        </NovPanel>
        <NovPanel className="margin-bottom20 pagecell">
          <NovCell title="内容详细描述" panelHeader border />
          <NovCell
            title="优惠券"
            value="-20"
            valueColor="#f63"
            content="我是内容详细描述区域"
            arrow
            onClick={handleClick}
          />
        </NovPanel>
    </View>
  );
};
export default Comp;
```


