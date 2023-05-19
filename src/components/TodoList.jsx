import React, { useContext } from "react";
import TodoItem from "./TodoItem"
import { TodoContext } from "./TodoContext";


const TodoList = () => {
  const { items, clearList, handleDelete, handleEdit } =
    useContext(TodoContext);
    

  return (
    <div className='flex justify-center items-center flex-col px-32 '>
    <h3 className='capitalize text-xl font-semibold'>todo list</h3>
    {items.map(item=>{
            return <TodoItem 
            key={item.id}
            title={item.title}
            handleDelete={()=>handleDelete(item.id)}
            handleEdit={()=>handleEdit(item.id)}
            /*clearList={clearList}*/
            />
        })}
    
    <button onClick={clearList} type='button' className='py-1 px-36 rounded border border-red-800 bg-red-800 text-red-500 mt-6 hover:bg-red-500 hover:text-red-800'>clear list</button>
</div>
  );
};

export default TodoList;
