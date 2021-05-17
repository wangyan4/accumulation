# Python

- 类型 variableType
- 列表 list
- 元组 tuple
- 字典 dict
- 集合 set

## 类型

- 数字
  - 整数 int
  - 浮点数 float
  - 复数 complex
- 字符串
- bytes
- bool

## 列表

- 增
  - 通过`+`拼接列表
  - append方法
  - extend方法
  - insert方法
- 删
  - del方法
  - remove方法
- 改
  - 索引修改一个数据
  - 切片修改一组数据
- 查
  - 切片索引
  - index
  - count 计数

## 字典

> {}创建字典
>
> dict.fromkeys(list,value)  list 键值列表，value默认值
>
>  

- 增
  - 直接obj[key]赋值
- 删
  - del()方法
- 改
  - obj[key]重新赋值
- 查
  - obj.get(key,text) key键值 text提示语



## 集合

set 本身元素必须是不可变的

- 增
  - add方法
- 删
  - remove方法
  - discard方法 和remove一样，但是不会抛出异常

| 方法名                        | 语法格式                               | 功能                                                         | 实例                                                         |
| ----------------------------- | -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| add()                         | set1.add()                             | 向 set1 集合中添加数字、字符串、元组或者布尔类型             | >>> set1 = {1,2,3} >>> set1.add((1,2)) >>> set1 {(1, 2), 1, 2, 3} |
| clear()                       | set1.clear()                           | 清空 set1 集合中所有元素                                     | >>> set1 = {1,2,3} >>> set1.clear() >>> set1 set()  set()才表示空集合，{}表示的是空字典 |
| copy()                        | set2 = set1.copy()                     | 拷贝 set1 集合给 set2                                        | >>> set1 = {1,2,3} >>> set2 = set1.copy() >>> set1.add(4) >>> set1 {1, 2, 3, 4} >>> set1 {1, 2, 3} |
| difference()                  | set3 = set1.difference(set2)           | 将 set1 中有而 set2 没有的元素给 set3                        | >>> set1 = {1,2,3} >>> set2 = {3,4} >>> set3 = set1.difference(set2) >>> set3 {1, 2} |
| difference_update()           | set1.difference_update(set2)           | 从 set1 中删除与 set2 相同的元素                             | >>> set1 = {1,2,3} >>> set2 = {3,4} >>> set1.difference_update(set2) >>> set1 {1, 2} |
| discard()                     | set1.discard(elem)                     | 删除 set1 中的 elem 元素                                     | >>> set1 = {1,2,3} >>> set1.discard(2) >>> set1 {1, 3} >>> set1.discard(4) {1, 3} |
| intersection()                | set3 = set1.intersection(set2)         | 取 set1 和 set2 的交集给 set3                                | >>> set1 = {1,2,3} >>> set2 = {3,4} >>> set3 = set1.intersection(set2) >>> set3 {3} |
| intersection_update()         | set1.intersection_update(set2)         | 取 set1和 set2 的交集，并更新给 set1                         | >>> set1 = {1,2,3} >>> set2 = {3,4} >>> set1.intersection_update(set2) >>> set1 {3} |
| isdisjoint()                  | set1.isdisjoint(set2)                  | 判断 set1 和 set2 是否没有交集，有交集返回 False；没有交集返回 True | >>> set1 = {1,2,3} >>> set2 = {3,4} >>> set1.isdisjoint(set2) False |
| issubset()                    | set1.issubset(set2)                    | 判断 set1 是否是 set2 的子集                                 | >>> set1 = {1,2,3} >>> set2 = {1,2} >>> set1.issubset(set2) False |
| issuperset()                  | set1.issuperset(set2)                  | 判断 set2 是否是 set1 的子集                                 | >>> set1 = {1,2,3} >>> set2 = {1,2} >>> set1.issuperset(set2) True |
| pop()                         | a = set1.pop()                         | 取 set1 中一个元素，并赋值给 a                               | >>> set1 = {1,2,3} >>> a = set1.pop() >>> set1 {2,3} >>> a 1 |
| remove()                      | set1.remove(elem)                      | 移除 set1 中的 elem 元素                                     | >>> set1 = {1,2,3} >>> set1.remove(2) >>> set1 {1, 3} >>> set1.remove(4) Traceback (most recent call last):  File "<pyshell#90>", line 1, in <module>   set1.remove(4) KeyError: 4 |
| symmetric_difference()        | set3 = set1.symmetric_difference(set2) | 取 set1 和 set2 中互不相同的元素，给 set3                    | >>> set1 = {1,2,3} >>> set2 = {3,4} >>> set3 = set1.symmetric_difference(set2) >>> set3 {1, 2, 4} |
| symmetric_difference_update() | set1.symmetric_difference_update(set2) | 取 set1 和 set2 中互不相同的元素，并更新给 set1              | >>> set1 = {1,2,3} >>> set2 = {3,4} >>> set1.symmetric_difference_update(set2) >>> set1 {1, 2, 4} |
| union()                       | set3 = set1.union(set2)                | 取 set1 和 set2 的并集，赋给 set3                            | >>> set1 = {1,2,3} >>> set2 = {3,4} >>> set3=set1.union(set2) >>> set3 {1, 2, 3, 4} |
| update()                      | set1.update(elem)                      | 添加列表或集合中的元素到 set1                                | >>> set1 = {1,2,3} >>> set1.update([3,4]) >>> set1 {1,2,3,4} |

## 字符串

