
import React, { useState, useEffect, useRef } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = value.trim();

    if (trimmedValue !== '') {
      addTodo(trimmedValue);
      setValue('');
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        value={value}
        placeholder='What is the task today?'
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef} // set the ref of the input element to inputRef
      />
      <button type='submit' className='todo-btn'>
        Add
      </button>
    </form>
  );
};
