import * as React from "react"
// import PropTypes from "prop-types"

const Practice = (props) => {

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

  return (
    <>
      <div>
        <button onClick={twoNumber.bind(this, [2, 5, 7, 10], 9)} aria-hidden="true">Map两数之和</button>
      </div>
    </>
  )
}
// Practice.propTypes = {
//   twoNumber: PropTypes.func.isRequired
// }

export default React.memo(Practice)

