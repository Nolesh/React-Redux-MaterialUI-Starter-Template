import React, { Component } from "react";

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import ACTIONS from "../actions/Todo";
import { connect } from "react-redux";

class Todo extends Component {

    constructor(props){
        super(props);

        this.state = {
            item: ""
        }
    }

    handleChange(e){
       this.setState({
           item: e.target.value
       })        
    }

    handleAdd(a){      
        if(this.state.item==="") return;
        this.props.createItem(this.state.item);
        this.setState({
            item: ""
        })
    }

    handleDelete(id) {
        // delete the item from the store
        this.props.deleteItem(id);
    };

    render() {

        const {items} = this.props;

        return (
            <Paper style={{margin:20, padding:10}}>
                <h3>An example of a complex component.</h3>
                <TextField
                    id="textInput"
                    label="Todo description"                    
                    value={this.state.item}
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    style={{marginTop: 27, marginLeft: 10}}
                    onClick={this.handleAdd.bind(this)} 
                    >
                    ADD 
                </Button>
                <br/>
                <h3>Todo list</h3>
                <div style={{display:"inline-flex"}}>
                <List aria-label="Todo list" style={{width:400}}>
                {                    
                    items.map( (item,i) =>   
                        <ListItem key={"item-"+i} button>
                        <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                        primary={item.description}                        
                        />
                        <ListItemSecondaryAction>
                        <IconButton 
                            edge="end" 
                            aria-label="Delete" 
                            onClick={this.handleDelete.bind(this, item.id)} >
                            <DeleteIcon />
                        </IconButton>
                        </ListItemSecondaryAction>
                        </ListItem>
                    )
                }                                        
                </List>
                </div>
               
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    items: state.todoReducer.items
});
  
const mapDispatchToProps = dispatch => ({
    createItem: todo => dispatch(ACTIONS.createItem(todo)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo)