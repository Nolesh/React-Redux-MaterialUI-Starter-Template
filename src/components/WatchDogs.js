import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// import {fetchDog} from "../actions/WatchDogs";
import ACTIONS from "../actions/WatchDogs";

class WatchDogs extends Component {

    requestImage(){
        this.props.dispatch(ACTIONS.fetchDog());
    }

    render() {

        const {data} = this.props;

        return (
            <Paper style={{margin:20, padding:10}}>
                <h3>An example of async request using redux-thunk.</h3>
                <div style={{width:250, height:250, border: 'dashed 1px black', display:'inline-block'}}>
                {
                    data.loading 
                    ? <p>Loading...</p> 
                    : data.error
                        ? <p>Error, try again</p>
                        : <img src={data.url} alt="" width="250" height="250"/>
                }
                </div>
                <br/>
                <Button 
                    variant="contained" 
                    color="primary"
                    style={{marginTop: 10}}
                    onClick={this.requestImage.bind(this)} 
                    >
                    REQUEST IMAGE 
                </Button>         
               
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    data: state.watchDogsReducer
});
  
export default connect(mapStateToProps)(WatchDogs)