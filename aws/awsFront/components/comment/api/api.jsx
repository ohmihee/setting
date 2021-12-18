// List 가져오기
export const getComment = async (dispatch) => {
    dispatch({type:'GET_COMMENT'})
    try{
        const response = await fetch('http://api.ingoos.co.kr/api/comment')
        const data = await response.json()

        const result = data.map( obj => {
            return {...obj, date:obj.updatedAt.substr(0,10)}
        } )
        
        dispatch({type:'GET_COMMENT_SUCCESS',payload:result})
    } catch (e) {
        dispatch({ type:'GET_COMMENT_ERROR',payload:e })
    }
}

// 댓글 쓰기
export const postComment = async (dispatch,body) => {
    dispatch({type:'POST_COMMENT'})
    try{
        //code block
        //fetch 
        // fetch(url:stirng , option:object)
        // request method 'POST'
        const options = {
            method:'POST',
            headers:{
                'Content-type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(body)
        }
        const response = await fetch('http://api.ingoos.co.kr/api/comment',options) //restful api 
        const data = await response.json()
        const result = {...data,date:data.updatedAt.substr(0,10)}

        dispatch({type:'POST_COMMENT_SUCCESS',payload:result})
    } catch(e) {
        dispatch({type:'POST_COMMENT_ERROR'})
    }
}

// 댓글 수정
export const patchComment = async (dispatch) => {}

// 댓글 삭제 
export const deleteComment = async (dispatch) => {}