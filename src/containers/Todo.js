import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addItem } from '../actions';
 
class AddTodo extends React.Component {
    state = {
        word: ''
    }

    onInputChange = (e) => this.setState({ word: e.target.value })

    onClick = () => this.props.dispatch(addItem(this.state.word))

    render() {
        return (
            <div>
                <input onChange={this.onInputChange} />
                <button onClick={this.onClick}>Add</button>
            </div>
        )
    }
}

  
const mapStateToProps = state => {
    console.log(state)
    return {
      word: state.word
    }
  }


const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({ addItem });
    return { ...actions, dispatch };
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)
 
export default AddTodo