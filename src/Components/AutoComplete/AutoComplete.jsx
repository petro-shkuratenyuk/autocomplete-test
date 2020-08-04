import React from 'react'

import {HighlightedText as Text} from '../HighlightedText'
import './styles.scss' 

export class AutoComplete extends React.Component {
  state = {
    search: '',
    isOpen: false,
  }

  onChange = (event) => {
    this.setState({search:event.target.value, isOpen: true})
    this.props.onQueryUpdate(event.target.value)
  }

  onOptionSelect = (option) => {
    this.setState({search:`${option.first_name} ${option.last_name}`, isOpen: false})
  }
  /* Options navigation via keyboard should be implemented here */

  render() {
    const {options} = this.props;
    
    return <div>
      <p>Autocomplete input:</p>
      <input 
        onChange={this.onChange}
        type="text" 
        placeholder="Type here..."
        className="autocomplete-input"
        value={this.state.search}
      />
      {/*
      For real production project list should have dynamic
      position class added depending on vertical position of input on a screen.
      (So if input is in the bottom part list should be shown above it)
      */}
      {this.state.isOpen && options.length > 0 && (
        <ul className="autocomplete-options">
          {options.map(option => (
            <li 
              key={option.id}
              onClick={() => this.onOptionSelect(option)}
              >
              <Text 
                value={`${option.first_name} ${option.last_name}`} 
                highlight={this.state.search}/>
              <Text 
                value={option.email} 
                highlight={this.state.search}/>
            </li>))}
        </ul>
      )}
    </div>;
  }
}