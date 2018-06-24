import React from 'react';
import { connect } from 'react-redux';

class TextAreaComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            number : props.number
        };
        this.textChange = this.textChange.bind(this);
    }


    textChange(e) {
        this.setState({ text: e.target.value })
    }



    render() {
        return (
            <div className="editArea">                
                <button >Edit {this.state.number}</button>
                <textarea className="textArea" type='text' onChange={this.textChange} value={this.state.text} onKeyDown={this.enterPress} />
            </div>
        );
    }
}



export default connect(null)(TextAreaComponent);