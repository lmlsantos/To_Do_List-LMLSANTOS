import React, { useState } from "react";


//<button type ="submit" onClick={()=>{
						//if (todo ===""){
							//alert("Insert a task!");
						//} else {
							//setToDoList([...todoList, todo])
							//setToDo("");
						//}	
					//}}>Add task</button>




//create your first component
const Home = () => {
	
	const [todo, setToDo] = useState ("");
	const [todoList, setToDoList] = useState([]);
	
	
	// delete a task
	const handleDelete = (deleteItem) => {
		
		const newTask = todoList.filter((todoItem) => todoItem !== deleteItem);
		setToDoList(newTask);
	}

	// the function that replaces the button
	const handleKeyDown = (e) => {
		
		if(e.key === "Enter"){
			if (todo ===""){
				alert("Insert a task!");
			} else {
				setToDoList([...todoList, todo])
				setToDo("");
			}	
		}
	}

	return (
		
		<div className="container">	
			<h2>todos</h2>
			
			<div className="notepad">				
				<div className="inputArea">
					<input type="text"
						value={todo}
						onChange={(e) => {
						setToDo(e.target.value)
						}}
						onKeyDown={handleKeyDown}
						placeholder="What needs to be done?"/>		
				</div>
			<div className="text-center">
  				<ul className="listItems">
    				{todoList.length !== 0 &&
      				todoList.map((todoItem) => (
        			<li key={todoItem}>
          			<div className="listItemContainer">
            			<span className="todoItem">{todoItem}</span>
            			<i className="fas fa-times" onClick={() => handleDelete(todoItem)}></i>   						
          			</div>
        			</li>
      				))}
  				</ul>
			</div>

			<div className="bottom">
					<p className="mb-0 mt-0"> {todoList.length>0 ? todoList.length: ""} item left</p>
			</div>	
			</div>
			<div className="sheet1"></div>
			<div className="sheet2"></div>
		</div>	
	);
};

export default Home;
