import React, {useState, useEffect} from 'react';

 const Taskform =({allTasks,setAllTasks,setCompletedTasks})=> {
    const [newTaskTitle, setNewTaskTitle] = useState ('');
    const [newDescription, setNewDescription] = useState ('');  
   
   const handleAddNewTask = () => {
    let newTaskObj = {
      title: newTaskTitle,
      description: newDescription,
    };
    // console.log (newTaskObj);
    let updatedTaskArr = [...allTasks];
    updatedTaskArr.push (newTaskObj);
    // console.log (updatedTaskArr);
    setAllTasks (updatedTaskArr);
    localStorage.setItem ('Tasklist', JSON.stringify (updatedTaskArr));
    setNewDescription ('');
    setNewTaskTitle ('');
  };
  useEffect (() => {
    let savedTasks = JSON.parse (localStorage.getItem ('Tasklist'));
    let savedCompletedTasks = JSON.parse (
      localStorage.getItem ('completedTasks')
    );
    if (savedTasks) {
      setAllTasks (savedTasks);
    }

    if (savedCompletedTasks) {
      setCompletedTasks (savedCompletedTasks);
    }
  },[]);
  

   return(
    <div className="Task-input">
    <div className="Task-input-item">
      <label>Title:</label>
      <input
        type="text"
        value={newTaskTitle}
        onChange={e => setNewTaskTitle (e.target.value)}
        placeholder="What's the title of your Task?"
      />
    </div>
    <div className="Task-input-item">
      <label>Description:</label>
      <input
        type="text"
        value={newDescription}
        onChange={e => setNewDescription (e.target.value)}
        placeholder="What's the description of your Task?"
      />
    </div>
    <div className="Task-input-item">
      <button
        className="primary-btn"
        type="button"
        onClick={handleAddNewTask}
      >
        Add
      </button>
    </div>
  </div>
   )
}

export default Taskform;