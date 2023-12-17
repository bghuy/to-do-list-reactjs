import React from "react";
import "./DisplayToDo.scss";  // Import stylesheet

class DisplayToDo extends React.Component {

    render() {
        let { listToDos, editToDo } = this.props;
        let isEmptyObject = Object.keys(editToDo).length === 0;
        console.log(isEmptyObject);
        return (
            <>
                {listToDos.map((job, index) => {
                    return (
                        <>
                            <hr />
                            <div className="job" key={job.id}>
                                <div className="title">
                                    {isEmptyObject === true ?
                                        <span>{index + 1} - {job.title}</span>
                                        :
                                        <>
                                            {editToDo.id === job.id ?
                                                <span>{index + 1} - <input value={editToDo.title}
                                                    onChange={(event) => { this.props.handleOnChangeEdit(event) }}>
                                                </input></span>
                                                :
                                                <span>{index + 1} - {job.title}</span>}
                                        </>

                                    }
                                </div>
                                <div className="buttons">
                                    <button onClick={() => { this.props.handleEditJob(job) }}>
                                        {(isEmptyObject === false && editToDo.id === job.id) ? "Save" : "Edit"}
                                    </button>
                                    <button onClick={() => { this.props.handleDeleteJob(job.id) }}>Delete</button>
                                </div>

                            </div>

                        </>
                    )
                })}
            </>
        )
    }
}

export default DisplayToDo;
