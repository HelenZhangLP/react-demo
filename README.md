
## .package.json.swp
`swp 文件是一个临时交换文件，用来备份缓冲区中的内容，用于保存数据。当文件非正常关闭（比如直接关闭终端或者电脑断电等）时，文件不会被删除，可用此文件来恢复；当正常关闭时，此文件会被删除。`

**`<button onClick={this.todoList}>add</button>` compare `<button onClick={this.todoList.bind(this)}></button>`**
```javascript
todoList() {
  console.log(this)
}
```
>`<button onClick={this.tsodoList}>add</button>`
> // undefined

>`<button onClick={this.todoList.bind(this)}></button>`
>// TodoList...

### * 重要原则： * javascript this 指向运行时对象，而非渲染对象

## react 基础
### 定义组件的两个条件：
1.  class 必须继承自 React.Component
2.  class 内部定义 render 方法，返回代表该组件的 UI。render 是定义组件时的唯一必要方法。

### 组件的 props 和 state
react 使用 props、state 两种类型的数据驱动渲染组件 UI
props 组件对外接口，组件通过 props 接收数据、方法，props 只读，不能在组件内部修改 props
state 组件对内接口，组件内部变化通过 state 反映，组件状态通过 setState 修改。

## Each child in a list should have a unique "key" prop.
key 是用来标记每个元素的，当列表更新时，元素通过 key 知道每个哪些元素发生了变化，进而渲染发生变化的元素，提高渲染效率
不要 index 索引作 key，因为一旦数据列表发生重排，索引也会发生变化，不利于渲染优化
key 值唯一只针对当前列表，不是针对全局。
