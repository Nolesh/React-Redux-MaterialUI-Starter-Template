import React from "react";

import Paper from '@material-ui/core/Paper';

import TextInput from "../../components/TextInput";
import TextOutput from "../../components/TextOutput";

export default function() {
    return (
        <Paper style={{margin:20, padding:10}}>
            <h3>
                A text change example.                        
            </h3>
            <TextInput />            
            <TextOutput /> 
        </Paper>   
    );
}