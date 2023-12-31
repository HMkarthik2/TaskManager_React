const Button = ( {setCompletedTasks, setCompletedTaskssetCompletedTasks,isCompletedScreen, setIsCompletedScreen}) =>{


    return(
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen (false)}
          >
            To Do
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen (true)}
          >
            Completed
          </button>
        </div> 
    )
}

export default Button ;