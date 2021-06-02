
import React, { Component } from 'react'

type nv = number | string | null | undefined

// interface LNode {
//   new (val: nv): LNode;
//   val: nv;
//   next: nv;
// }

/* eslint-disable */
export default class LinkedPratice extends Component {

  render() {
    console.log('linked!')
    return (
      <>
        <div>链表示例使用</div>
      </>
    )
  }
}

class ListNode {
  val: nv;
  next: nv;
  constructor(val: nv) {
    this.val = val;
    this.next = null;
  }
}

// 单链表增删查
class LinkedList {
  head: any | null ;
  constructor(val: nv) {
    val = val === undefined ? 'head' : val;
    this.head = new ListNode(val);
  }

  // 找val值节点, 没有找到返回-1
  findByVal(val: nv) {
    let current = this.head;
    while(current != null && current.val !== val) {
      current = current.next;
    }
    return current ? current : -1;
  }

  // 插入节点, 在值为val后面插入
  insert(newVal: nv, val: nv) {
    let current = this.findByVal(val);
    if(current === -1) return false;
    let newNode = new ListNode(newVal);
    newNode.next = current.next;
    current.next = newNode;
  }

    // 获取值为nodeVal的前一个节点,找不到为-1,参数是val
    // 适用于链表中无重复节点
  findNodePreByVal(nodeVal: nv) {
    let current = this.head;
    while(current.next !== null && current.next.val !== nodeVal) {
      current = current.next;
    }
    return current !== null ? current : -1;
  }

    // 根据index查找当前节点, 参数为index
    // 可以作为比较链表是否有重复节点
    findByIndex(index: number) {
      let current = this.head, pos = 1;
      while(current.next !== null && pos !== index) {
        current = current.next;
        pos++;
      }
      return (current && pos === index) ? current : -1;
    }

    // 删除某一个节点,删除失败放回false
    remove(nodeVal: nv) {
      if(nodeVal === 'head') return false;
      let needRemoveNode = this.findByVal(nodeVal);
      if(needRemoveNode === -1) return false;
      let preveNode = this.findNodePreByVal(nodeVal);
      preveNode.next = needRemoveNode.next;
    }

    // 遍历节点
    disPlay() {
      let res = new Array();
      let current = this.head;
      while(current !== null) {
        res.push(current.val);
        current = current.next;
      }
      return res;
    }

    // 在链表末尾插入一个新的节点
    push(nodeVal: nv) {
      let current = this.head;
      let node = new ListNode(nodeVal);
      while(current.next !== null) {
        current = current.next;
        current.next = node;
      }
    }

    // 在头部插入
    frontPush(nodeVal: nv) {
      let newNode: any = new ListNode(nodeVal) 
      this.insert(newNode, 'head')
      // this.insert(nodeVal, 'head')
    }
}

let demo = new LinkedList(undefined) // LinkedList {head: ListNode}
// console.log((demo.disPlay())) 
demo.push('1232')
demo.insert(123, 'head');
demo.push('last value')
demo.frontPush('start')
demo.remove('head')
// demo.remove('last value')
// console.log(demo.remove('head'))
// demo.push('2132')
// demo.insert('不存在的值', '插入失败') //return -1
console.log(demo.findByIndex(1))
console.log((demo.disPlay()))