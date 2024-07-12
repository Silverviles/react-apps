import './CSS/Todo.css'
import {useEffect, useRef, useState} from "react";
import {TodoItem} from "./TodoItem.jsx";

let itemCount = 0;

export const Todo = () => {
	const [todos, setTodos] = useState([]);
	const inputRef = useRef(null);

	const addTodo = () => {
		setTodos([...todos, {no: itemCount++, text: inputRef.current.value, display: ""}])
		inputRef.current.value = "";
	}

	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem('todos')) || []);
		itemCount = parseInt(localStorage.getItem('itemCount')) || 0;
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		localStorage.setItem('itemCount', itemCount.toString());
	}, [todos]);

	return (
		<div className={'todo'}>
			<div className={'todo-header'}>To-Do List</div>
			<div className={'todo-add'}>
				<input ref={inputRef } type={'text'} placeholder={'Add your task'} className={'todo-input'}/>
				<div onClick={addTodo} className={'todo-add-button'}>Add</div>
			</div>
			<div className={'todo-list'}>
				{todos.map((todo, index) => {
					return <TodoItem key={index} no={todo.no} text={todo.text} display={todo.display} setTodos={setTodos()}/>
				})}
			</div>
		</div>
	)
}
