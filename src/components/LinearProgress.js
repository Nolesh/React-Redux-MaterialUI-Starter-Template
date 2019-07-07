import React from "react";
import { connect } from "react-redux";

import MaterialLinearProgress from '@material-ui/core/LinearProgress';

const LinearProgress = ({ loading, dispatch, ...props }) => {
    return (
        loading ? <MaterialLinearProgress {...props} /> : null
    );
}

const mapStateToProps = state => ({
    loading: state.watchDogsReducer.loading
});     

export default connect(mapStateToProps)(LinearProgress)
