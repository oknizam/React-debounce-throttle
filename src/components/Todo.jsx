import React, { useState } from "react";

const Todo = () => {

    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [selectedId, setSelectedId] = useState(null);


    const handleChange = e => {
        setName(e?.target?.value)
    }

    const handleSubmit = () => {
        if(selectedId){
            let temp=[...list];
            let index = temp.findIndex(item => item.id === selectedId);
            temp.splice(index, 1);
            setList(temp);
        }
        let id = selectedId ? selectedId : Math.floor(Math.random() * 1000);
        setList((prev) => [...prev, { name, id }]);
        setName("");
        setSelectedId(null);
    }

    const handleDelete = index  => {
        let temp = [...list];
        temp.splice(index, 1);
        setList(temp);
    }

    

    return (
        <div className="list-container">
            <h2> To Do List</h2>

            <div className="container-input">
                <input type="text" name="name" value={name} onChange={handleChange} />
                <button className="btn" onClick={() => handleSubmit(undefined)}>{selectedId ? "Update" : "Add"} Task</button>
            </div>
            <div className="list-container">
                {list?.sort((a, b) => a.id - b.id).map((item, index) => {
                    return (
                        <div className="list-item" key={item.id} >
                            {item.name}
                            <button className="btn" onClick={() => { setSelectedId(item.id); setName(item.name) }}>Edit</button>
                            <button className="btn" onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )

}

export default Todo;