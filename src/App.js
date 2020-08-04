import React from 'react';

import {AutoComplete} from './Components/AutoComplete'
import {fetchUsers} from './DataServices/users'
import {filterUsers} from './utils/autoComplete'

import './App.css';

export class App extends React.Component {
  state = {
    autoCopmleteOptions: [],
  }

  getOptions = (search) => {
    /*
    For real production project I would use 
    React.useDebounce or _.debounce, or redux-saga debounce  
    */
    fetchUsers().then(items => 
      this.setState({autoCopmleteOptions: filterUsers(items, search)})
    )
  }

  render() {
    return (
      <div className="App">
        <div className="content-block">
          <AutoComplete 
            onQueryUpdate={this.getOptions}
            options={this.state.autoCopmleteOptions}
          />
        </div>
      </div>
    );
  }
}

export default App;
