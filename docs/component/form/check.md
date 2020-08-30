---
group:
  title: 表单组件
order: 1
---

# Check多选

## 引入

```js
import { NovTabBar } from 'novui';
//如按需引入样式
//@import "novui/dist/style/components/tabbar.scss";
```

## 使用

```js
import { NovTabBar } from 'novui';
const tabList = [{ title: '组件 ' }, { title: '模板' }, { title: '关于' }];
const PageIndex = () => {
  const [current, setCurrent] = useState(0);
  const handleClick = (index: number): void => {
    setCurrent(index);
  };
  return (
    <View>
      <NovTabBar tabList={tabList} current={current} onClick={handleClick} />
    </View>
  );
};

export default PageIndex;
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
