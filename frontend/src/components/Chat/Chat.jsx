import './Chat.css'
import io from "socket.io-client";
import {useEffect, useState} from 'react'

const socket = io("/");

const Chat = () => {
    const [message, setMessage] = useState('')
    const [talk, setTalk] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        setTalk([...talk, message])
        socket.emit('message', message)
    }

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    useEffect(() => {
        socket.on('broadcast', message => {
            receiveMessages(message)
        })

        return () => {
            socket.off('broadcast')
        }
    }, [])

    const receiveMessages = (message) => {
        setTalk(state => [...state, message])
    }
    
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Write your message' onChange={handleMessage} />
        <button>Send</button>
    </form>
    <ul>
        {talk.map((message, index) => <li key={index}>{message}</li>)}
    </ul>
    </>
  )
}

export default Chat