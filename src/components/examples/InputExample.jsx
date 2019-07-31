import React from 'react';

// var InputExample = React.createClass({
//   getInitialState() {
//     return (
//       { name: '-'}
//     );
//   },
//   handleChange(event) {
//     this.setState({ name: event.target.value });
//   },
//   render() {
//     return (
//       <input type="text"
//         value={this.state.name}
//         onChange={this.handleChange}
//       />
//     );
//   }
// });

class InputExample extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { name: '-' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <label>
          {this.state.name}
        </label>
        <br/>
        <input type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}


export default InputExample;
