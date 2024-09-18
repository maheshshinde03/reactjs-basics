//rsc => react stateless component
import React from 'react';

const Employee = () => {
    return (
        // Everthing (all html code) should wrap inside this div. only one parent element will be there.
        <div>
            <p>This is employee Page.</p>
        </div>
        // <p></p> it'll throw error. cause only one parent will be there.(div)
    );
};

export default Employee;

//JSX => JSX is a technology which allows us to write HTML like code in javascript