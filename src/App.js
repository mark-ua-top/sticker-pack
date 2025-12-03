import './App.css';
import { Component } from 'react';
import StickerList from './components/StickerList/StickerList.jsx';
import Choice from './components/Choice/Choice.jsx';

class App extends Component {
  state = {
    selected: ''
  };

  handleSelect = (label) => {
    this.setState({ selected: label });
  };

  render() {
    return (
      <div className="App">
        <Choice selected={this.state.selected} />
        <StickerList onSelect={this.handleSelect} />
      </div>
    );
  }
}

export default App;
