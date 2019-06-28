import React, { Component } from 'react';

// import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import TextInput from '../../components/forms/TextInput';


//const Page1Component = () => (
//  <Box>
//    <Box>
//          Hello page11!!
//    </Box> 
//    <Box>
//            Hello page22!!
//    </Box> 
//  </Box>
//);


// HomeComponent.propTypes = {
// };

// HomeComponent.defaultProps = {
// };

class Page1Component extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value1: '1',
      value2: '2'
    };
  
    this.onChange = this.onChange.bind(this);      
  }
  onChange(event) {
    var { value } = event.target;
    const { name } = event.target;
    //let pippo = name + 'pippo';
    var pippo = name;
    var val = {};
    if (pippo == 'txt01') {
      val = { value1: value };
    } else {
      val = { value2: value };
    }


    this.setState(val);
  }


  render() {
    const {
      value1,
      value2
    } = this.state;

    //eslint-disable-next-line 
    console.log('sum=' + (eval(this.state.value1) + eval(this.state.value2)));

    return (
      <Box>
        <Box style={({ color:'red'})}>
              Hello page11!!
        </Box> 
        <Box>
          <TextInput style={({ border: '1px solid black' })}
            name="txt01"  
            value={value1}
            onChange={this.onChange}            
          />
          <TextInput style={({ border: '1px solid black' })}
            name="txt02"
            value={value2}
            onChange={this.onChange}
          />
        </Box>
      </Box>    
    );
  }
}

export default Page1Component;
