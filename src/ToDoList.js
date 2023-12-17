import React from "react";
import DisplayToDo from "./DisplayToDo.js"
class ListToDo extends React.Component {
    state = {
        addTitle: "",
        listToDos: [{ id: 1, title: "homework" }],
        editToDo: {},
    }
    handleAddToDo = (e) => {
        e.preventDefault();
        let toDo = { id: this.state.listToDos.length + 1, title: this.state.addTitle };
        this.setState({
            listToDos: [toDo, ...this.state.listToDos]
        })
    }
    handleDeleteJob = (jobId) => {
        let listToDoClone = [...this.state.listToDos];
        listToDoClone = listToDoClone.filter(job => job.id !== jobId);
        this.setState({
            listToDos: listToDoClone
        })
    }
    handleEditJob = (toDo) => {
        let { listToDos, editToDo } = this.state;
        let isEmptyObject = Object.keys(editToDo).length === 0;
        let cloneListToDo = [...listToDos];
        if (isEmptyObject === false && editToDo.id === toDo.id) {
            let objIndex = cloneListToDo.findIndex((obj => obj.id === toDo.id));
            //Update object's name property.
            cloneListToDo[objIndex].title = toDo.title;
            this.setState({
                listToDos: cloneListToDo,
                editToDo: {}
            })

            return;
        }
        this.setState({
            editToDo: toDo
        })
        console.log(this.state.editToDo)
    }
    handleOnChange = (title) => {
        this.setState({
            addTitle: title
        })
    }
    handleOnChangeEdit = (e) => {
        let edit = this.state.editToDo;
        edit.title = e.target.value;
        this.setState({
            editToDo: edit
        })
    }
    render() {
        return (
            <div className="list-to-do-container">
                <div className="add-to-do">
                    <form onSubmit={(event) => this.handleAddToDo(event)}>
                        <input type="text" onChange={(event) => { this.handleOnChange(event.target.value || "") }} />
                        <button type="submit">Add</button>
                    </form>
                </div>
                <div className="list-to-to-content">
                    <DisplayToDo
                        listToDos={this.state.listToDos}
                        handleDeleteJob={this.handleDeleteJob}
                        handleEditJob={this.handleEditJob}
                        editToDo={this.state.editToDo}
                        handleOnChangeEdit={this.handleOnChangeEdit}
                    />
                </div>
            </div>
        )
    }
}

export default ListToDo