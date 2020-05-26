import React, { Component } from 'react';
import './App.css';
import Accordion from './component/Accordion';

class App extends Component{
  render() {
    return(
      <div className="App">
        <Accordion heading="Heading">
          tạm biệt em đã lâu nhà anh không thật xa mới đây mà anh đã thấy
        </Accordion>
      </div>
    )
  }
}
export default App;