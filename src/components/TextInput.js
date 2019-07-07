import React, { Component } from "react";

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ACTIONS from "../actions/TextChange";
import { connect } from "react-redux";

class TextInput extends Component {

    constructor(props){
        super(props);

        this.state = {
            text: ""
        }
    }
    
    handleChange(e){
        // console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }

    handleAdd(a){
        console.log(this.state.text);
        this.props.changeText(this.state.text);
    }

    render() {
                
        return (
            <Paper style={{margin:20}}>
                <TextField
                    id="textInput"
                    label="Enter your text"                    
                    value={this.state.text}
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    style={{marginTop: 27, marginLeft: 10}}
                    onClick={this.handleAdd.bind(this)} 
                    >
                    CHANGE TEXT
                </Button>         
            </Paper>
        );
    }
}
  
const mapDispatchToProps = dispatch => ({
    changeText: text => dispatch(ACTIONS.changeText(text))    
});

export default connect(null, mapDispatchToProps)(TextInput)