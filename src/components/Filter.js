import React from "react";
import {Input, InputGroupText, InputGroupAddon, InputGroup} from 'reactstrap'

const Filter = () =>
    <InputGroup>
        <InputGroupAddon addonType="prepend">
            <InputGroupText>Filter Term</InputGroupText>
        </InputGroupAddon>
        <Input type="text" id="filter"  placeholder="enter filter term" />
    </InputGroup>




export default Filter
