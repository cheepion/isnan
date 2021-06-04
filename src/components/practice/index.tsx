import React, { FC } from "react"
import { PageProps } from 'gatsby'
// import PropTypes from "prop-types"

export const Pu: FC = (props) => {

  console.log('子组件props', props)
  return (
    <>
    <div>子组件测试</div>
    </>
  )
}