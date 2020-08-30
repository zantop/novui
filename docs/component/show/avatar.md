---
group:
  title: 展示组件
---

# Avatar 头像

## 引入

```js
import { NovAvatar } from 'novui';
//如按需引入样式
//@import "novui/dist/style/components/avatar.scss";
```



## 参数

| 参数    | 说明                      | 类型    | 默认值 |
| ------- | ------------------------- | ------- | ------ |
| size    | 头像尺寸 sm md lg xl 可选 | string  | md     |
| image   | 头像地址                  | string  | 空     |
| color   | 字体颜色                  | string  | -      |
| bgColor | 背景颜色                  | string  | -      |
| round   | 圆角型                    | boolean | false  |
| smooth  | 圆滑型                    | boolean | false  |
| circle  | 圆形                      | boolean | true   |
| text    | 内嵌文字内容              | string  | -      |

## 使用

```js
import React from "react";
import { View, Block } from "@tarojs/components";
import { NovNavBar, NovPanel, NovAvatar } from "novui";

const Avatar = () => {
  return (
    <Block>
      <NovNavBar title="Avatar" />
      <View className="container">
        <NovPanel title="形状" className="margin-bottom20">
          <View className="flex justify-start">
            <NovAvatar
              image="https://open.zantop.cn/logo.jpeg"
              className="margin-right20"
            />
            <NovAvatar
              image="https://open.zantop.cn/logo.jpeg"
              round
              className="margin-right20"
            />
            <NovAvatar
              image="https://open.zantop.cn/logo.jpeg"
              smooth
              className="margin-right20"
            />
            <NovAvatar image="https://open.zantop.cn/logo.jpeg" circle />
          </View>
        </NovPanel>
        <NovPanel title="尺寸" className="margin-bottom20">
          <View className="flex justify-start  align-end">
            <NovAvatar
              image="https://open.zantop.cn/logo.jpeg"
              size="sm"
              className="margin-right20"
              circle
            />
            <NovAvatar
              image="https://open.zantop.cn/logo.jpeg"
              size="md"
              className="margin-right20"
              circle
            />
            <NovAvatar
              image="https://open.zantop.cn/logo.jpeg"
              className="margin-right20"
              size="lg"
              circle
            />
            <NovAvatar
              image="https://open.zantop.cn/logo.jpeg"
              size="xl"
              circle
            />
          </View>
        </NovPanel>
        <NovPanel title="文字" className="margin-bottom20">
          <View className="flex justify-start align-end">
            <NovAvatar
              text="像"
              bgColor="#f63"
              size="sm"
              className="margin-right20"
              circle
            />
            <NovAvatar
              text="像"
              bgColor="#f63"
              size="md"
              className="margin-right20"
              circle
            />
            <NovAvatar
              text="像"
              bgColor="#f63"
              color="#fff"
              className="margin-right20"
              size="lg"
              circle
            />
            <NovAvatar text="像" bgColor="#f63" size="xl" circle />
          </View>
        </NovPanel>
        <NovPanel title="图标" className="margin-bottom20">
          <View className="flex justify-start align-end">
            <NovAvatar
              icon="favorfill"
              size="sm"
              className="margin-right20"
              bgColor="#f63"
              round
            />
            <NovAvatar
              icon="favorfill"
              className="margin-right20"
              bgColor="#f63"
              round
            />
            <NovAvatar
              icon="favorfill"
              className="margin-right20"
              bgColor="#f63"
              size="lg"
              round
            />
            <NovAvatar icon="favorfill" size="xl" bgColor="#f63" round />
          </View>
        </NovPanel>
      </View>
    </Block>
  );
};
export default Avatar;

```
