
import React from 'react';
import '../styles/loginInput.css';


export default class Input extends React.Component {

    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    };
   
    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className = "form-error">{ this.props.meta.error }</div>;
        };

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className = "form-warning">{ this.props.meta.warning }</div>
            );
        };

        return (
          <div className="form-input">
            { error }
            { warning }
            <input className="text-input"
                   id={ this.props.input.name }
                   placeholder={` ${this.props.input.name}`}
                   type={ this.props.type }
                   ref={ input => (this.input = input) }
            { ...this.props.input }
            />
          </div>
        );
    };
};
