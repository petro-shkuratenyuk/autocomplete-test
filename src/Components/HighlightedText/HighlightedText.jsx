import React from 'react'
/* since it's not allowed to use 3rd party packages I had to implement this Component
otherwise I'd use 'react-highlight-words' */

export class HighlightedText extends React.Component {
  render() {
    const {value, highlight} = this.props;
    const highlightedText = <mark>{highlight}</mark>;
    const splittedValue = value.split(highlight)
    .map((item, index) => index ? [highlightedText, item] : item).flat()
    
    return <p title={value}>{splittedValue.map(text => text !== highlight ? text : highlightedText)}</p>
  }
}