---
group:
  title: 导航组件
order: 1
---

# TabBar 切换栏

## 引入

```js
import { NovTabBar } from 'novui';
//如按需引入样式
//@import "novui/dist/style/components/tabbar.scss";
```



## 参数

**组件参数**

| 参数            | 说明                                   | 类型    | 可选值 | 默认值    |
| --------------- | -------------------------------------- | ------- | ------ | --------- |
| current         | 当前选中的标签索引值，从 0 计数        | Number  | -      | 0         |
| color           | 未选中标签字体与图标颜色               | String  | -      | `#909399` |
| activeColor     | 选中标签字体与图标颜色                 | String  | -      | `#333`    |
| bgColor         | 背景颜色                               | String  | -      | `#fff`    |
| fontSize        | 字体大小                               | Number  | -      | 10        |
| fontColor       | 单独设定字体颜色，优先级高于 color     | String  | -      | -         |
| iconSize        | 图标大小                               | Number  | -      | 48        |
| iconColor       | 单独设定图标颜色，优先级高于 color     | String  | -      | -         |
| activeFontColor | 选中时字体颜色，优先级高于 activeColor | String  | -      | -         |
| activeIconColor | 选中时图标颜色，优先级高于 activeColor | String  | -      | -         |
| fixed           | 是否固定底部                           | Boolean | -      | false     |
| tabList         | tab 列表, object 字段说明请看下表      | Array   | -      | []        |

**tabList 参数**

| 参数        | 说明           | 类型    | 可选值 | 默认值 |
| ----------- | -------------- | ------- | ------ | ------ |
| title       | 选项栏文字     | String  | -      |        |
| icon        | 图标           | String  | -      |        |
| activeIcon  | 选中时图标     | String  | -      | -      |
| image       | 未选中图标路径 | String  | -      | -      |
| activeImage | 选中时图标路径 | String  | -      | -      |
| large       | 图标是否放大   | Boolean | -      | false  |

## 使用

```js
import React, { useState } from "react";
import { View, Block } from "@tarojs/components";
import { NovPanel, NovNavBar, NovTabBar, NovRadio } from "novui";

const options = [
  { label: "基本用法", value: 1 },
  { label: "icon图标", value: 2 },
  { label: "自定义样式", value: 3 },
];
const tabList = [
  {
    title: "组件 ",
    image: "https://open.zantop.cn/min/home.png",
    activeImage: "https://open.zantop.cn/min/homeActive.png",
  },
  {
    title: "模板",
    image: "https://open.zantop.cn/min/template.png",
    activeImage: "https://open.zantop.cn/min/templateActive.png",
  },
  {
    title: "关于",
    image: "https://open.zantop.cn/min/my.png",
    activeImage: "https://open.zantop.cn/min/myActive.png",
  },
];
const tabList2 = [
  {
    title: "组件 ",
    icon: "emoji",
    activeIcon: "emojifill",
    badge: {
      value: 78,
    },
  },
  {
    title: "模板",
    icon: "favor",
    activeIcon: "favorfill",
    large: true,
  },
  {
    title: "关于",
    icon: "camera",
    activeIcon: "camerafill",
  },
];
const TabBarComponent = () => {
  const [value, setValue] = useState(1);
  const [current, setCurrent] = useState(0);

  const handleRadioClick = (value) => {
    console.log(`选中了${value}`);
    setValue(value);
  };
  const handleTabBarClick = (index: number): void => {
    console.log("第几位");
    console.log(index);
    setCurrent(index);
  };
  return (
    <Block>
      <NovNavBar title="TabBar"></NovNavBar>
      <View className="container">
        <NovPanel title="基础用法" className="margin-bottom20">
          <NovRadio
            options={options}
            value={value}
            onClick={handleRadioClick}
          />
        </NovPanel>
      </View>
      {value === 1 && (
        <NovTabBar
          tabList={tabList}
          current={current}
          fixed
          onClick={handleTabBarClick}
        />
      )}
      {value === 2 && (
        <NovTabBar
          tabList={tabList2}
          current={current}
          fixed
          onClick={handleTabBarClick}
        />
      )}
      {value === 3 && (
        <NovTabBar
          tabList={tabList2}
          current={current}
          fixed
          onClick={handleTabBarClick}
          bgColor="#1989fa"
          color="#fff"
          activeColor="#000"
          activeIconColor="#fff"
        />
      )}
    </Block>
  );
};
export default TabBarComponent;

```
