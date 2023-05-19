import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoInput = () => {
  const { item, handleChange, handleSubmit, editItem } =
    useContext(TodoContext);

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex'>
        <input
          type='text'
          className='py-1 px-10 rounded-l-[5px]'
          placeholder='Add Todo Items'
          value={item}
          onChange={handleChange}
        />
        <button
          type='submit'
          className={
            editItem
              ? 'bg-green-800 border rounded-r-[5px] border-solid border-green-800 text-green-500 px-4 py-1 hover:text-green-800 hover:bg-green-500'
              : 'border rounded-r-[5px] border-solid border-cyan-800 text-cyan-500 bg-cyan-800 px-4 py-1 transition-all ease-in duration-300 hover:text-cyan-800 hover:bg-cyan-500'
          }
        >
          {editItem ? 'Edit Item' : 'Add Item'}
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
