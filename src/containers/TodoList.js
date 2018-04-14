import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { removeItem } from '../actions';

let item = '';

class TodoList extends React.Component {
    state = {};

    onClick = () => this.props.dispatch(removeItem(item))

    render() {
        const { word } = this.props;
        return (
            <div>
                {word ? word.map((e, i) => {
                    item = e;
                        return (
                            <div key={i}>
                            {e}
                            {e ? <button onClick={this.onClick}>X</button> : null}
                            </div>
                        )
                    } 
                ) 
                : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      word: state.todos
    }
  }

  const mapDispatchToProps = (dispatch) => {
    let actions = bindActionCreators({ removeItem });
    return { ...actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);