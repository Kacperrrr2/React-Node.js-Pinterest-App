import "./comments.css"
import { useQuery } from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest'
import Comment from "../comment/comment"
import CommentForm from '../commentForm/commentForm'
function Comments({id}) {
  
    const {isPending, error, data}= useQuery({
    queryKey:["comments", id],
    queryFn: ()=> apiRequest.get(`comments/${id}`).then((res)=> res.data)
  })

  if (isPending) return "Loading..."
  if (error) return "Ann error has occuered: " +error.message
  if(!data) return "User not found!"
  console.log(data)

  return (
    <div className="comments">
      <div className="commentList">
        <span className='commentCount'>{data.length===0 ? "No comments": data.length + "comments"}</span>
        {/* COMMENT */}
        {data.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      <CommentForm id={id}/>
    </div>
  )
}

export default Comments