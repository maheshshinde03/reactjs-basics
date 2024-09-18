import React, { useState } from 'react';
import { flushSync } from 'react-dom';

const ConditionRender = () => {

    const [isDiv1Visiable, setDiv1] = useState(true);
    const [isDiv2Visiable, setDiv2] = useState(true);

    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();

    const [isActive, setActive] = useState(false);

    const [selectCountry, setSelectCountry] = useState("");

    const showDiv1 = () => {
        setDiv1(true);
    }

    const hideDiv1 = () => {
        setDiv1(false);
    }

    const showHideDiv2 = () => {
        setDiv2(!isDiv2Visiable);
    }

    const changeInput1 = (event) => {
        setInput1(event.target.value)
    }

    const changeInput2 = (event) => {
        setInput2(event.target.value)
    }

    const changeActive = (event) => {
        setActive(event.target.checked)
    }

    const changeCountry = (event) => {
        setSelectCountry(event.target.value)
    }

    return (
        <div>
            <div className="mt-2 p-2 bg-secondary text-white rounded">
                <h3>Condition Rendering</h3>
            </div>

            <div className='row pt-3'>
                <div className='col-3'>
                    {
                        isDiv1Visiable && <div className='bg-danger p-3 text-center'>
                            <h1>Div-1</h1>
                        </div>
                    }

                </div>

                <div className='col-3'>

                    {
                        isDiv2Visiable && <div className='bg-success p-3 text-center'>
                            <h1>Div-2</h1>
                        </div>
                    }

                </div>

                <div className='col-3'>
                    {input1} -- {input2}
                    {
                        input1 == input2 && <div className='bg-secondary p-3 text-center'>
                        <h1>Div-3</h1>
                    </div>
                    }
                </div>

                <div className='col-3'>
                    {
                        isActive || selectCountry == 'USA' &&  <div className='bg-secondary p-3 text-center'>
                        <h1>Div-4</h1>
                    </div>
                    }
                </div>
            </div>

            <div className='row pt-3'>
                <div className='col-3 text-center'>
                    <button className='btn btn-danger' onClick={hideDiv1}>Hide</button>
                    <button className='btn btn-primary mx-3' onClick={showDiv1}>Show</button>
                </div>

                <div className='col-3 text-center'>
                    <button className='btn btn-success' onClick={showHideDiv2}>Toggle</button>
                </div>

                <div className='col-3'>
                    <div className="inline-text">
                        <input type='text' placeholder='Enter Value 1' onChange={(event) => changeInput1(event)} className="width-50"/>
                        <input type='text' placeholder='Enter Value 2' onChange={(event) => changeInput2(event)} className="width-50"/>
                    </div>

                </div>

                <div className='col-3'>
                    <div className='inline-text'>
                        <input type='checkbox' onChange={(event) => changeActive(event)} className="width-50"/>
                        <select onChange={(event) => changeCountry(event)}>
                            <option>Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default ConditionRender;