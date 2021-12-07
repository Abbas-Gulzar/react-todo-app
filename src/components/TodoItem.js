import React from "react"

function TodoItem ({name}) {
        return (
            <li>
                <input type="checkbox" />
                {/* {this.props.todo.title} */}
                {name}
            </li>
        )
    }

export default TodoItem