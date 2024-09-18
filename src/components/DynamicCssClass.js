import React, { useState } from 'react';

const DynamicCssClass = () => {

    const [div1Color, setDiv1] = useState("");
    const [div2Active, setDiv2Active] = useState(true);

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const [div4Color, setDiv4] = useState("");

    const addDiv1Color = (color) => {
        setDiv1(color);
    }

    const toggleDiv2 = () => {
        setDiv2Active(!div2Active);
    }

    const changeNum1 = (event) => {
        setNum1(event.target.value)
    }

    const changeNum2 = (event) => {
        setNum2(event.target.value)
    }

    const changeDiv4Color = (event) => {
        setDiv4(event.target.value);
    }
    return (
        <div>
            <div className="mt-2 p-2 bg-secondary text-white rounded">
                <h3>Dynamic CSS  and Dynamic Class</h3>
            </div>

            <div className='row pt-3'>
                <div className='col-3'>
                    <div className='p-3 text-center' style={{ 'backgroundColor': 'red', 'color': 'white' }}>
                        <h1>Div-1</h1>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='p-3 text-center' style={{ 'backgroundColor': div2Active ? 'green' : 'red' }}>
                        <h1>Div-2</h1>
                    </div>
                </div>

                <div className='col-3'>
                    <div className={`p-3 text-center ${num1 == num2 ? 'bg-success' : 'bg-danger'}`}>
                        <h1>Div-3</h1>
                    </div>
                </div>

                <div className='col-3'>
                    <div className={`p-3 text-center ${div4Color}`}>
                        <h1>Div-4</h1>
                    </div>
                </div>
            </div>

            <div className='row pt-3'>
                <div className='col-3 text-center'>
                    <label>Normal CSS</label>
                </div>

                <div className='col-3 text-center'>
                    <button className='btn btn-success' onClick={toggleDiv2}>Toggle</button>
                </div>

                <div className="col-3">
                    <div className="inline-text">
                        <input type='text' placeholder='num-1' className="width-50" onChange={(event) => changeNum1(event)}/>
                        <input type='text' placeholder='num-2' className="width-50" onChange={(event) => changeNum2(event)}/>
                    </div>
                </div>

                <div className='col-3'>
                <div className='inline-text'>
                        <input type='text'  className="width-50" onChange={(event) => changeDiv4Color(event)}/>
                    </div>
                </div>

            </div>

            <div className='row pt-3'>
                <div className='col-3'>
                    <div className='p-3 text-center' style={{ 'backgroundColor': div1Color, 'color': 'black' }}>
                        <h1>Div-1</h1>
                    </div>
                </div>
            </div>

            <div className='row pt-3'>
                <div className='col-3 text-center'>
                    <button className='btn btn-danger' onClick={() => addDiv1Color('red')}>Add Red</button>
                    <button className='btn btn-primary mx-2' onClick={() => addDiv1Color('blue')}>Add Blue</button>
                </div>
            </div>



        </div>
    );
};

export default DynamicCssClass;