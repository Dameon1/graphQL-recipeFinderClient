import React from "react";
import { IngredientBox } from "./styles";

export class Checkbox extends React.Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;
    this.setState(({ isChecked }) => ({ isChecked: !isChecked }));
    handleCheckboxChange(label);
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <IngredientBox onClick={this.toggleCheckboxChange}>
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </IngredientBox>
    );
  }
}

export default Checkbox;