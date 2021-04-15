import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./styles"
import { inject, observer} from "mobx-react"

const Articles = ({CounterStore, scStore}) => {
  console.log("articles ", CounterStore)
  console.log('scStore', scStore)
  return (
    <>
      <Container >
        <p onClick={ () => scStore.showSecondMsg()} >欢迎! 来到 Articles {CounterStore.Count}</p>
        <div>
          <button onClick={() => CounterStore.Increment()}>Add</button>
          <button onClick={() => CounterStore.Decrement()}>Subtract</button>
        </div>
      </Container>
    </>
  )
}

export default inject("CounterStore", 'scStore')(observer(Articles))

// const Articles = inject(`CounterStore`, 'scStore')(
//   observer(({CounterStore, scStore}) => {
//   // observer(({ store }) => {
//     console.log('CounterStore', CounterStore)
//     console.log('scStore', scStore)
//     return (
//       <>
//         <div onClick={ () => scStore.showSecondMsg()}>Counted to: {CounterStore.Count}</div>
        // <div>
        //   <button onClick={() => CounterStore.Increment()}>Add</button>
        //   <button onClick={() => CounterStore.Decrement()}>Subtract</button>
        // </div>
//       </>
//     )
//   }
// ))

// export default Articles
