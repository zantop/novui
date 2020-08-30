---
group:
  title: 导航组件
---

# NavBar 导航

自定义导航组件微信小程序需要设置全屏展示

```js
export default {
  window: {
    navigationStyle: 'custom',
  },
};
```

## 引入

```js
import { NovNavBar } from 'novui';
//如按需引入样式
//@import "novui/dist/style/components/navbar.scss";
```


## 参数

| 参数       | 说明                                                            | 类型    | 可选值                          | 默认值  |
| ---------- | --------------------------------------------------------------- | ------- | ------------------------------- | ------- |
| bgColor    | 背景颜色                                                        | string  | -                               | #f8f8f9 |
| bgImage    | 背景图片                                                        | string  | -                               | -       |
| title      | 标题                                                            | string  | -                               | -       |
| color      | 标题颜色                                                        | string  | -                               | -       |
| titleAlign | 标题水平样式                                                    | string  | left、 center、 right、 justify | center  |
| icon       | 标题中图标                                                      | string  | -                               | -       |
| capsule    | 是否为胶囊样式                                                  | boolean | -                               | false   |
| backLabel  | 返回文字                                                        | string  | -                               | -       |
| navBtn     | 是否显示返回或首页按钮                                          | boolean | -                               | true    |
| homeBtn    | 是否有首页按钮                                                  | boolean | -                               | false   |
| slot       | 是否自定义标题区域                                              | boolean | -                               | false   |
| homeUrl    | 定义主页返回的地址，如不设置返回的是页面栈中的第一个 route 地址 | string  | -                               | -       |
| hidden     | 是否隐藏 navBar                                                 | boolean | -                               | true    |


## 使用

```js
import React, { useState } from "react";
import { View, Block } from "@tarojs/components";
import { NovPanel, NovNavBar, NovRadio } from "novui";

const options = [
  { label: "文字居左", value: "option1" },
  { label: "文字居中", value: "option2" },
  { label: "带导航居中", value: "option3" },
  { label: "背景色", value: "option4" },
  { label: "背景图片", value: "option5" },
  { label: "自定义区域", value: "option6" },
  { label: "胶囊式导航", value: "option7" },
];

const NavComponent = () => {
  const [value, setValue] = useState("option1");
  const handleClick = (value) => {
    console.log(`选中了${value}`);
    setValue(value);
  };
  return (
    <Block>
      {value === "option1" && (
        <NovNavBar title="NavBar" titleAlign="left" navBtn={false}></NovNavBar>
      )}
      {value === "option2" && (
        <NovNavBar
          title="NavBar"
          titleAlign="center"
          navBtn={false}
        ></NovNavBar>
      )}
      {value === "option3" && (
        <NovNavBar title="NavBar" titleAlign="center" navBtn></NovNavBar>
      )}
      {value === "option4" && (
        <NovNavBar
          title="NavBar"
          titleAlign="center"
          navBtn
          bgColor="#f63"
        ></NovNavBar>
      )}
      {value === "option5" && (
        <NovNavBar
          title="NavBar"
          titleAlign="center"
          navBtn={false}
          bgImage="https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg"
        ></NovNavBar>
      )}
      {value === "option6" && (
        <NovNavBar titleAlign="center" title="测试" slot navBtn>
          自定义内容
        </NovNavBar>
      )}
      {value === "option7" && (
        <NovNavBar
          title="NovBar"
          titleAlign="center"
          navBtn
          capsule
        ></NovNavBar>
      )}
      <View className="container ">
        <NovPanel>
          <NovRadio options={options} value={value} onClick={handleClick} />
        </NovPanel>
      </View>
    </Block>
  );
};
export default NavComponent;

```
