import React from 'react';
import {FaTrash,FaPen} from 'react-icons/fa'


const TodoItem = ({title,handleDelete,handleEdit}) => {


  
    return (
        <>
        <div className='capitalize flex  justify-between my-1 gap-x-4'>
            <h6>{title}</h6>
            <div className='flex  gap-x-2'>
                <button onClick={handleEdit}>
                    <FaPen color='#22c55e' size='12'/>
                </button>
                <button onClick={handleDelete}>
                    <FaTrash color='#ef4444' size='12'/>
                </button>
                
            </div>
        </div>
            {/* <button onClick={clearList} type='button' className='py-1 px-36 rounded border border-red-800 bg-red-800 text-red-500 mt-6 hover:bg-red-500 hover:text-red-800'>clear list</button> */}
            </>
    );
}

export default TodoItem;
