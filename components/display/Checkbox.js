
import React from 'react';
import '../styles/checkbox.css';

export default class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;
    this.setState(({ isChecked }) => (
      { isChecked: !isChecked, }
    ));
    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox" onClick={this.toggleCheckboxChange}>
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}           
          />
          {label}
        </label>
      </div>
    );
  };
};
