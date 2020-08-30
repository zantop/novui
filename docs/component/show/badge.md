---
group:
  title: 展示组件
---

# Badge 徽章

## 引入

```js
import { NovBadge } from 'novui';
//如按需引入样式
//@import "novui/dist/style/components/badge.scss";
```


## 参数

| 参数  | 说明                    | 类型   | 默认值 |
| ----- | ----------------------- | ------ | ------ |
| value | 显示值                  | string | 空     |
| max   | 最大值                  | number | 空     |
| shape | 形状   bubble dot round | string | bubble |


## 使用

```js
import React from "react";
import { View, Block } from "@tarojs/components";
import { NovNavBar, NovPanel, NovBadge, NovAvatar } from "novui";

const Badge = () => {
  return (
    <Block>
      <NovNavBar title="Badge" />
      <View className="container">
        <NovPanel title="基础用法" className="margin-bottom20 ">
          <View className="flex justify-start  padding-tb20">
            <NovBadge value="777" maxValue={98} className="margin-right50">
              <NovAvatar
                image="https://open.zantop.cn/logo.jpeg"
                size="lg"
                circle
              />
            </NovBadge>
            <NovBadge value="NEW" className="margin-right50">
              <NovAvatar
                image="https://open.zantop.cn/logo.jpeg"
                size="lg"
                circle
              />
            </NovBadge>
          </View>
        </NovPanel>
        <NovPanel title="形状" className="margin-bottom20 ">
          <View className="flex justify-start  padding-tb20">
            <NovBadge
              value="777"
              maxValue={98}
              shape="bubble"
              className="margin-right50"
            >
              <NovAvatar
                image="https://open.zantop.cn/logo.jpeg"
                size="lg"
                circle
              />
            </NovBadge>
            <NovBadge value="NEW" shape="dot" className="margin-right50">
              <NovAvatar
                image="https://open.zantop.cn/logo.jpeg"
                size="lg"
                circle
              />
            </NovBadge>
            <NovBadge
              value="NEW"
              shape="round"
              className="margin-right50"
              bgColor="blue"
            >
              <NovAvatar
                image="https://open.zantop.cn/logo.jpeg"
                size="lg"
                circle
              />
            </NovBadge>
          </View>
        </NovPanel>
      </View>
    </Block>
  );
};
export default Badge;

```
