import React from 'react'
import styled from 'styled-components';
import moment from "moment"
function Message({mes , user , time }) {
    const LoginEmail = 1
    const MessageType = user==  LoginEmail ? Mymessage : FriendMessage

  return (
    <Con>
        <MessageType>
              <span className='text-left  h-fit'>{mes}</span>
            <TimeMessage>{moment(time).format("LT")}</TimeMessage>
        </MessageType>
    </Con>
  )
}

export default Message

const Con = styled.div`
display:flex;
`
const MessageBubble = styled.div`
padding:15px;
padding-bottom:26px;
background-color:white;
margin-bottom:10px;
position:relative;
max-width:400px;
min-width:60px

`
const Mymessage= styled(MessageBubble)`

margin-left:auto;
background-color:#dcf8c6 ;
border-radius:8px 0px 8px 8px
`
const FriendMessage = styled(MessageBubble)`
 background-color:white;
 border-radius:0px 8px 8px 8px
`

const TimeMessage = styled.span`
color:gray;
padding:10px;
font-size:9px;
position:absolute;
bottom:0;
text-align:right;
right:0
`