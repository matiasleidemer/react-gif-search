import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  onKeyPress = (target) => {
    if (target.charCode === 13) {
      const term = this.refs.gifInput.value;

      this.setState({term});
      this.props.onTermChange(term)
    }
  }

  render() {
    return(
      <div className="search">
        <input placeholder="Enter text to search for gifs!" ref="gifInput" onKeyPress={this.onKeyPress}/>
      </div>
    );
  }
}

export default SearchBar;
