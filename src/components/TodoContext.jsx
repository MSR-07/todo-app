import React, { createContext, useState } from 'react';

const  TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState('');
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: index, title: item };
    const updatedItems = [...items, newItem];
    // console.log('====================================');
    // console.log(updatedItems,"Type");
    // console.log('====================================');
    setItems(updatedItems);
    setItem('');
    setIndex(index + 1);
    setEditItem(false);
  };

  const clearList = () => {
    setItems([]);
  };

  const handleDelete = (id) => {
    const filteredItem = items.filter((item) => item.id !== id);
    setItems(filteredItem);
  };

  const handleEdit = (id) => {
    const filteredItem = items.filter((item) => item.id !== id);
    setItems(filteredItem);
  
    const selectedItem = items.find((item) => item.id === id);
    if (selectedItem) {
      setItem(selectedItem.title);
      setEditItem(true);
      setIndex(id);
    }
  };

  const todoContextValues = {
    items,
    item,
    editItem,
    handleChange,
    handleSubmit,
    clearList,
    handleDelete,
    handleEdit,
  };

  return (
    <TodoContext.Provider value={todoContextValues}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
