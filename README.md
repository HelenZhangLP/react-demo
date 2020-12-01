
## React 16 新特性
React16 之前，render 方法必须返回单个元素。
### render 方法支持返回数组
```javascript
export default class List extends React.Component {
  render() {
    return [
      <li key="1">li1</li>
      <li key="2">li2</li>
      <li key="3">li3</li>
    ]
  }
}
```
### render 方法支持返回字符串
```javascript
export default class StringComponent extends React.Component {
  render() {
    return "React 16 supports return string"
  }
}
```

## Each child in a list should have a unique "key" prop.
key 是用来标记每个元素的，当列表更新时，元素通过 key 知道每个哪些元素发生了变化，进而渲染发生变化的元素，提高渲染效率
不要 index 索引作 key，因为一旦数据列表发生重排，索引也会发生变化，不利于渲染优化
key 值唯一只针对当前列表，不是针对全局。

## Error: Maximum update depth exceeded, this can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. react limits the number of nested updates to prevent infinite loops
因为 `<button onClick={handleVote()}>{vote}</button>` TodoList 里面的 setState 在初始化时列表次数调用引用。初始化列表代码时不要运行。
