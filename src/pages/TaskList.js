import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
const TaskList = ({setAllTasks,allTasks,completedTasks, setCompletedTasks,isCompletedScreen, setIsCompletedScreen}) =>{
    const handleTaskDelete = index => {
        let reducedTasks = [...allTasks];
        reducedTasks.splice (index,1);
        // console.log (index);
    
        // console.log (reducedTasks);
        localStorage.setItem ('Tasklist', JSON.stringify (reducedTasks));
        setAllTasks (reducedTasks);
      };
      const handleComplete = index => {
        const date = new Date ();
        var dd = date.getDate ();
        var mm = date.getMonth () + 1;
        var yyyy = date.getFullYear ();
        var hh = date.getHours ();
        var minutes = date.getMinutes ();
        var ss = date.getSeconds ();
        var finalDate =
          dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;
    
        let filteredTask = {
          ...allTasks[index],
          completedOn: finalDate,
        };
    
        // console.log (filteredTask);
    
        let updatedCompletedList = [...completedTasks, filteredTask];
        console.log (updatedCompletedList);
        setCompletedTasks (updatedCompletedList);
        localStorage.setItem (
          'completedTasks',
          JSON.stringify (updatedCompletedList)
        );
        // console.log (index);
    
        handleTaskDelete (index);
      };
      const handleCompletedTaskDelete = index => {
        let reducedCompletedTasks = [...completedTasks];
        reducedCompletedTasks.splice (index);
        // console.log (reducedCompletedTasks);
        localStorage.setItem (
          'completedTasks',
          JSON.stringify (reducedCompletedTasks)
        );
        setCompletedTasks (reducedCompletedTasks);
      };

    return(
        <div className="Task-list">

          {isCompletedScreen === false &&
            allTasks.map ((item, index) => (
              <div className="Task-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                </div>
                <div>
                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    onClick={() => handleTaskDelete (index)}
                  />
                  <BsCheckLg
                    title="Completed?"
                    className=" check-icon"
                    onClick={() => handleComplete (index)}
                  />
                </div>
              </div>
            ))}

          {isCompletedScreen === true &&
            completedTasks.map ((item, index) => (
              <div className="Task-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p> <i>Completed at: {item.completedOn}</i></p>
                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleCompletedTaskDelete (index)}
                  />
                </div>
              </div>
            ))}
        </div>
    )
}

export default TaskList;