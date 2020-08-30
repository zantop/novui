---
group:
  title: 表单组件
---

# Radio单选

## 引入

```js
import { NovRadio } from 'novui';
//如按需引入样式
//@import "novui/dist/style/components/radio.scss";
```



## 参数

| 参数            | 说明                              | 类型    | 可选值 | 默认值       |
| --------------- | --------------------------------- | ------- | ------ | ------------ |
| options         | 单选列表                          | Array   | -      | -            |
| value           | 选中的值                          | string  | -      | -            |
| icon            | 选项图标                          | string  | -      | radiobox     |
| activeIcon      | 选中图标                          | string  | -      | radioboxfill |
| activeColor     | 选中标题颜色                      | string  | -      | #1989fa      |
| activeIconColor | 选中图标颜色                      | string  | -      | #1989fa      |
| align           | 图标居左居右                      | string  | -      | left         |
| vertical        | 单选列表垂直展示还是水平,默认垂直 | boolean | -      | true         |
| hNumber         | 水平展示一行展示几个              | number  | -      | 2            |

## options字段详解


| 参数     | 说明                     | 类型    | 可选值 | 默认值 |      | 必选/可选 |
| -------- | ------------------------ | ------- | ------ | ------ |
| value    | 选项值各项必须保证唯一值 | string  | -      | -      | 必填 |
| label    | 选项标题                 | string  | -      | -      | 必填 |
| icon     | 选项标题前图标           | string  | -      | -      | 可选 |
| disabled | 是否禁止点击             | boolean | -      | false  | 可选 |

## 事件
| 方法名  | 说明                                     | 参数 | 返回值           |
| ------- | ---------------------------------------- | ---- | ---------------- |
| onClick | 点击按钮，状态disabled为true时不点击选择 | -    | 当前选中值 value |


## 使用

```js
import React from 'react';
import { Block } from '@tarojs/components';
import { NovPanel,NovRadio } from 'novui';
import './index.scss';


const options = [
  {
    label: "单选项一",
    value: "option1",
    icon: "zujian",
  },
  { label: "单选项二", value: "option2", disabled: true, icon: "component" },
  { label: "单选项三", value: "option3", icon: "qiang" },
  { label: "单选项四", value: "option4", icon: "safe" },
  { label: "单选项五", value: "option5", icon: "goodsfill" },
];
const Comp = () => {
  const [value, setValue] = useState("option1");
  const handleClick = (value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <Block>
        <NovPanel title="基础用法" className="margin-bottom20">
          <NovRadio options={options} value={value} onClick={handleClick} />
        </NovPanel>
        <NovPanel title="横向展示" className="margin-bottom20">
          <NovRadio
            options={options}
            value={value}
            vertical={false}
            onClick={handleClick}
            hNumber={2}
          />
        </NovPanel>
        <NovPanel title="居右展示" className="margin-bottom20">
          <NovRadio
            options={options}
            value={value}
            onClick={handleClick}
            align="right"
          />
        </NovPanel>
        <NovPanel title="自定义图标" className="margin-bottom20">
          <NovRadio
            options={options}
            value={value}
            onClick={handleClick}
            activeColor="#f63"
            activeIconColor="green"
            align="right"
            icon=""
            activeIcon="check"
          />
        </NovPanel>
    </Block>
  );
};
export default Comp;
```
