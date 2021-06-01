import React, { FC, useCallback } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchArticle } from "../store/actionCreateors"

interface IProps {
  article: Article
}

const Simple:FC<IProps> = (props) => {

  const article: readonly Article[] = useSelector(
    (state: ArticleState) => state.article,
    shallowEqual
  )
  console.log('props', props)
  console.log('article', article)

  const dispatch: Dispatch<any> = useDispatch()

  const handleSaga = useCallback(() => {
    console.log('处理saga')

    // 调用saga
    // return dispatch(fetchArticle(article))
  }, [dispatch])

  // const tButton = (<button onClick={() => handleSaga(article)}>Saga</button>)
  return (
    <>
      <div>
        {/* <Button /> */}
        <button onClick={handleSaga}>Saga</button>
      </div>
    </>
  )
}

export default Simple