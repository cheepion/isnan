import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./styles"
import { inject, observer} from "mobx-react"

const Articles = ({counterStore, articlesStore}) => {
  console.log("articles ", counterStore)
  console.log('articlesStore', articlesStore)
  return (
    <>
      <Container >
        <p onClick={ () => articlesStore.showSecondMsg()} >欢迎! 来到 Articles {counterStore.Count}</p>
        <div>
          <button onClick={() => counterStore.Increment()}>Add</button>
          <button onClick={() => counterStore.Decrement()}>Subtract</button>
        </div>
      </Container>
    </>
  )
}

export default inject("counterStore", 'articlesStore')(observer(Articles))

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
