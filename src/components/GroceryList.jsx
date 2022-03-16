import React from 'react'

const GroceryList = ({item , setItem}) => {
    console.log(item)
   const handleDelete = (e)=>{
      let arr = item.filter((item , index)=> !(index===e));
      setItem(arr)
   }
  return (
      <>
      <h2>GroceryList</h2>
      <ul style={{listStyle:"none"}}>
      {item.map((li , index)=>{
          return <div key={li.id}> 
          <div > {li.title} <button key={index} onClick={()=>handleDelete(index)}>DELETE</button></div>
          </div>
          
      })}
      </ul>
      </>
  )
}

export default GroceryList