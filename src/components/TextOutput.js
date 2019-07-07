import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from '@material-ui/core/Paper';

class TextOutput extends Component {
   
    render() {
        return (
            <Paper style={{margin:20, padding:10, background:'#eee'}}>
            <h2>
                Text:
                <span style={{color:'green', fontWeight:'bold'}}> {this.props.text}</span>
            </h2>            
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    text: state.textChangeReducer.text
});

  
export default connect(mapStateToProps)(TextOutput)