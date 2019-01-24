import React from "react";
import "./styles/loginInput.css";

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    // if (!prevProps.meta.active && this.props.meta.active) {
    //     this.input.focus();
    // }
  }

  render() {
    let error;   
    let warning;
   
    return (
      <div className="form-input">
        {error}
        {warning}
        <input
          className="text-input"
          id={this.props.name}
          placeholder={` ${this.props.name}`}
          type={this.props.type}
          ref={input => (this.input = input)}
          {...this.props.input}
        />
      </div>
    );
  }
}
