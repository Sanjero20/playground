import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {},
      educationArray: [{}],
    };
  }

  inputHandler = (e, index) => {
    const { name, value } = e.target;
    const list = this.state.educationArray;
    list[index][name] = value;
    this.setState(
      {
        educationArray: [...list],
      },
      () => {
        console.clear();
        console.table(this.state.educationArray);
      }
    );
  };

  renderInputFields = () => {
    return this.state.educationArray.map((educ, index) => (
      <fieldset key={index}>
        <label htmlFor={`schoolName${index}`}> School Name</label>
        <input
          name="schoolName"
          type="text"
          id={`schoolName${index}`}
          value={educ.schoolName}
          onChange={(e) => this.inputHandler(e, index)}
        />
      </fieldset>
    ));
  };

  addInputField = () => {
    this.setState({
      educationArray: [...this.state.educationArray, { schoolName: '' }],
    });
  };

  render() {
    return (
      <div>
        {this.renderInputFields()}
        <button onClick={this.addInputField}>Add</button>
      </div>
    );
  }
}

export default App;
