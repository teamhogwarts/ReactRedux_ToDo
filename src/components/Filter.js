import React from "react";
import {Input, InputGroupText, InputGroupAddon, InputGroup} from 'reactstrap'
import { useDispatch} from "react-redux";

const Filter = ({ filterTerm }) => {
    const dispatch = useDispatch();


    const changeFilterTerm = term =>{
        dispatch({ type: 'UPDATE_FILTER_TERM', filterTerm: term })
    }

    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Filter Term</InputGroupText>
            </InputGroupAddon>
            <Input type="text" id="filter" placeholder="enter filter term"
                   onChange={ event => changeFilterTerm(event.target.value) }/>
        </InputGroup>
    )
}


export default Filter
