import { useState, useContext } from 'react';
import './AddSlider.css';
import { Slider } from '@material-ui/core';
import MyContext from '../../MyContext';

const AddSlider = ({ products }) => {
    const { productsData } = useContext(MyContext);

    const mark = [
        {
            value: 0,
            label: "start"
        },
        {
            value: 500,
            label: "middle"
        },
        {
            value: 999,
            label: "end"
        }
    ]

    // const getValue = (e, val) => {
    //     console.warn(val)
    // }

    const [val, setVal] = useState([0, 999])
    const updateRange = (e, data) => {
        setVal(data);
        console.log(data)
    }

    // const price = productsData
    //     .map(p => p.price).filter((value, index, array) => array.indexOf(value) === index);

    return (
        <div style={{ width: 270, margin: 30 }}>
            <Slider
                color='secondary'
                value={val}
                defaultValue={999}
                max={999}
                step={50}
                marks={mark}
                valueLabelDisplay={"auto"}
                onChange={updateRange}
            // orientation="vertical"
            />
        </div>
    );
}

export default AddSlider