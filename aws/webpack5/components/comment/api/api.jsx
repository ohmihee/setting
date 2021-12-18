/*
    비동기통신에 대한 내용을 넣는공간
*/

export const getComment = async (dispatch) => {
    dispatch({type:'GET_COMMENT'})
    try{
        const response = await fetch('http://3.36.100.94/api/comment')
        const data = await response.json()

        // 사실.. 귀찮이즘이지만.. 
        // 생각해보니 좋은 도움이 되는 훈련코드가 될거같아서 넣었음
        const result = data.map( (v,k)=>{
            return {...v , date:v.updatedAt.substr(0,10) }
        })

        console.log(result)
        dispatch({type:'GET_COMMENT_SUCCESS',payload:result})
    } catch (e) {
        dispatch({ type:'GET_COMMENT_ERROR',payload:e })
    }
}

export const postComment = async (dispatch,body) => {
    dispatch({type:'POST_COMMENT'})
    try{
        //code block
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify(body)
        }
        const response = await fetch('http://3.36.100.94/api/comment',options)
        const data = await response.json()
        const result = { ...data,date:data.updatedAt.substr(0,10) }

        dispatch({type:'POST_COMMENT_SUCCESS',payload:result })
    } catch (e) {
        dispatch({ type:'POST_COMMENT_ERROR',payload:e})
    }
}

export const patchComment = async (dispatch,body) => {
    dispatch({type:'PATCH_COMMENT'})
    try{
        //code block
        const options = {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify({content:body.content})
        }
        const response = await fetch(`http://3.36.100.94/api/comment/${body.index}`,options)
        const data = await response.json()
        
        data.result === 'SUCCESS'
        ? alert(data.msg)
        : alert(data.msg)

        dispatch({type:'PATCH_COMMENT_SUCCESS',payload:body })
    } catch (e) {
        dispatch({ type:'PATCH_COMMENT_ERROR',payload:e})
    }
}

export const deleteComment = async (dispatch,body) => {
    dispatch({type:'DELETE_COMMENT'})
    try{
        const options = {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            // body:JSON.stringify(body)
        }

        const response = await fetch(`http://3.36.100.94/api/comment/${body}`,options)
        const data = await response.json()
        
        data.result === 'SUCCESS'
        ? alert(data.msg)
        : alert(data.msg)

        //code block
        dispatch({type:'DELETE_COMMENT_SUCCESS',payload:body })
    } catch (e) {
        dispatch({ type:'DELETE_COMMENT_ERROR',payload:e})
    }
}