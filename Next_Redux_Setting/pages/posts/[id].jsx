// [id].jsx
import wrapper from '../../Providers/createCtx'
import { GET_POST_DETAIL } from '../../reducers/post'
import {END} from 'redux-saga'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Post = () => {
    const post = useSelector(state => state.post.postDetail)
    return (
        <>
            <h3>{post.title}</h3>
            <dl>
                <dt>{post.userId}</dt>
                <dd>{post.body}</dd>
            </dl>
            <Link href="/posts/"><a>목록가기</a></Link>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps( (Store)=> async (req,res)=> {
    const {id} = req.params // 현재 내가 보고싶은 id값을 가져올수있음. 
    Store.dispatch(GET_POST_DETAIL(id))
    Store.dispatch(END)
    await Store.sagaTask.toPromise()
})

export default Post