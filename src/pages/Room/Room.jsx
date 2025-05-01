import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Room = () => {
 const [userName, setUserName] = useState('');
 const navigate = useNavigate();

 // handle submit
 const handleInput =() =>{
  if(!userName){
    return alert('please provide username')
  }
  navigate(`stream/${userName}`);
  setUserName('');
 }
  return (
    <>
        <div className="form-container">
            <h1>Start Your Streaming</h1>
            <div className="form-group">
                <input type="text" placeholder='please enter your name' value={userName} onChange={(e)=>setUserName(e.target.value)} />
                <button onClick={handleInput}>Join</button>
            </div>
        </div>
    </>
  )
}

export default Room