---
group:
  title: 展示组件
---

# Panel 面板

## 引入

```js
import { NovPanel } from 'novui';
//如按需引入样式
//@import "novui/dist/style/components/panel.scss";
```


## 参数

| 参数    | 说明               | 类型            | 默认值 |
| ------- | ------------------ | --------------- | ------ |
| title   | 标题问题           | string          | 空     |
| header  | 自定义面板头部组件 | React.ReactNode | null   |
| footer  | 自定义面板底部组件 | React.ReactNode | null   |
| chidren | props.children     | React.ReactNode | null   |


## 使用

```js
import React from "react";
import { View, Block } from "@tarojs/components";
import { NovNavBar, NovPanel, NovCell } from "novui";
let Footer = () => {
  return (
    <View className="flex justify-end">
      <View>确定</View>
      <View>取消</View>
    </View>
  );
};

const Cell = () => {
  return (
    <Block>
      <NovNavBar title="单元格" />
      <View className="container">
        <NovPanel title="基础用法" className="margin-bottom20">
          内容区域
        </NovPanel>
        <NovPanel
          title="自定义底部区域"
          className="margin-bottom20 pagecell"
          footer={<Footer />}
        >
          <NovCell title="优惠券" valueColor="#f63" value="20" />
        </NovPanel>
      </View>
    </Block>
  );
};
export default Cell;

```
