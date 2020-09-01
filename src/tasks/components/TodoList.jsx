import React from 'react';
import TasksList from './TasksList';
import CreateTaskInput from "./CreateTaskInput";
import { createTask, fetchTasksList } from "../tasksGateway";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as tasksActions from "../tasks.actions";
import { sortedTasksListSelector } from "../tasks.selectors"

class TodoList extends React.Component {
        
    componentDidMount() {
        this.props.getTasksList();
    }
  
    render () {
        
        return (
            <>
            <h1 className="title">Todo List</h1>
            <main className="todo-list">
                <CreateTaskInput onCreate={this.props.createTask} />
                <TasksList
                    tasks={this.props.tasks}
                    handleTaskStatusChange={this.props.updateTask}
                    handleTaskDelete={this.props.deleteTask}
                />
            </main>  
            </> 
        );
    }
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    getTasksList: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
}
const mapState = state => {
    return {
        tasks: sortedTasksListSelector(state)
    }
}

const mapDispatch = {
    getTasksList: tasksActions.getTasksList,
    updateTask: tasksActions.updateTask,
    deleteTask: tasksActions.deleteTask,
    createTask: tasksActions.createTask,
}

export default connect(mapState, mapDispatch)(TodoList);