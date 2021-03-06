import React from 'react';

function Stats(props) {
    const total = props.todos.length;
    const completed = props.todos.filter(todo => todo.completed).length;
    const uncompleted = total - completed;

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>Вссього задач:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Виконано:</th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>Залишилось:</th>
                    <td>{uncompleted}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

export default Stats;
