import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map(td => (
                            <TodoItem key={td.id} todo={td} />
                        ))}
                </ul>
            </div>
        )
    }
}

export default TodosList