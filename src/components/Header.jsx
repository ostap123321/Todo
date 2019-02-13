import React from 'react';

import Stats from './stats';


function Header(props) {
    return (
        <header>
            <Stats todos={props.todos} />
            <h1>Todo</h1>

        </header>
    );
}

Header.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default Header;