import React, {useState} from "react"
// import styled from 'styled-components'
import ReactDOM from 'react-dom'
// import PropTypes from "prop-types"

const Practice = (props) => {

  const [openPortal, setOpenPortal] = useState(false)
  // 使用map 实现两数相加
  const twoNumber = (nums, target) => {
    const map1 = new Map();
    for(let i = 0; i < nums.length; i++) {
      const map2 = target - nums[i]
      console.log("map值", map1)
      if(map1.has(map2)) {
        console.log("返回两数相加的位置", [map1.get(map2), i])
        return [map1.get(map2), i]
      } else {
        map1.set(nums[i], i)
      }
    } 
  }

  // render props instance
  const rPorps = () => {

  }
  // 传送门
  const PortalModel =({ message, open, onClose, children })=> {
    if (!open) return null;
    return ReactDOM.createPortal(
      <div className="modal">
        <span>{message}</span>
        <button onClick={onClose}>Close</button>
      </div>
    ,document.body);
  }

  // portial instance
  // const testPortial = () => {

  // }

  return (
    <>
      <div>
        <button onClick={twoNumber.bind(this, [2, 5, 7, 10], 9)} aria-hidden="true">Map两数之和</button>
        <br />
        <button onClick={rPorps} aria-hidden="true">Render props</button>
        <br />
        <button onClick={() => setOpenPortal(true)} aria-hidden="true">Open Modal</button>
        <PortalModel message="Hello World!" open={openPortal}  onClose={() => setOpenPortal(false)} />
      </div>
    </>
  )
}

export default React.memo(Practice)