import logo from './logo.svg';
import { useState } from 'react';
import { useEffect } from "react";
import './App.css';
import Tasklist from './Tasklist';
import Github from './Github';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

    const [task, settask] = useState("");
    const [tasklist, settasklist] = useState([]);

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    const addtask = (e) => {
        settask(e.target.value);
    };

    //To add update the task in the resultant task array
    const addbtn = () => {
        if (task.trim("")=="") {
            alert('Please fill the task input first.');
            return;
        }

        settasklist((oldlist) => {
            return [...oldlist, task];
        });

        settask('');
    };

    // Function to remove array element which is clicked
    const deletetask = (id) => {

        settasklist((oldlist) => {
            // it only selects the task wich donot matches with the clicked id
            return oldlist.filter((arrelement, index) => {
                return index != id;
            });
        });

    };


    return (
        <>
            <div className="todo">
                <div className="todo-box" data-aos="zoom-in">

                    <div className="todo-box-head">
                        <div className="heading">
                            Your TO-DO
                        </div>

                        <div className="head-fun">
                            <div className="head-fun-body">

                                <div className="search">
                                    <input type='text' placeholder='Add a Task' value={task} onChange={addtask} />
                                </div>

                                <div className="add">
                                    <div className='addbtn' onClick={addbtn}>
                                    <img width="32" height="32" src="https://img.icons8.com/windows/32/add-to-clipboard.png" alt="add-to-clipboard"/>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="todo-box-body">
                        {tasklist.length > 0 ? (
                            tasklist.map((itemval, index) => {
                                return (
                                    <Tasklist
                                        text={itemval}
                                        id={index}
                                        key={index}
                                        onSelect={deletetask}
                                    />
                                );
                            })
                        ) : (
                            <div className="no-task">
                                <h1>No Task</h1>
                            </div>
                        )}
                    </div>

                </div>

                <Github link="https://github.com/lalit-code/TODO-ReactJS" />

            </div>
        </>
    );
}

export default App;
