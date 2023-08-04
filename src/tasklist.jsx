import React from 'react'


function Tasklist(props) {
  return (
    <div className='listcontainer' >
      <div><button className='delete'  >x</button></div>
       <li>{props.data}</li>
    </div>
  )
}

export default Tasklist;
