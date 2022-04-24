import './message.css'
import {format} from "timeago.js"
export default function Message({message,own}) {
  return (
    <div className={own ? "message own":"message"}>
        <div className="messageTop">
            <img className='messageImg'
            src="https://i.pinimg.com/564x/b0/c0/4a/b0c04a6c2eb20f4a8bc4fb91dbe18797.jpg"  alt="" />
            <p className='messageText'>
             {message.text}
              </p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
