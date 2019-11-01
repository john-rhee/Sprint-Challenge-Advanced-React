import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import List from './List';
import Dashboard from './Dashboard';

class App extends React.Component {
  state = {
    myData: [],
    bData:[]
  };
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response);
        this.setState({
          myData: response.data
        });
      })
      .catch(error => console.log(error));
  };
  
render() {  
  return (
    <div>
      <h1 data-testid ="id2" >Soccer</h1>
       <Dashboard addOne={this.addOne} bData={this.state.bData}/>
       {<List myData={this.state.myData} key={this.state.myData.id}/>}
    </div>
    );
  };
}

export default App;
