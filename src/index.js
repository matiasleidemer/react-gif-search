import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList'
import GifModal from './components/GifModal'
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    }
  }

  openModal = (gif) => {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  handleTermChange = (term) => {
    const escapedTerm = term.replace(/\s/g, '+');
    const apiKey = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${escapedTerm}&api_key=${apiKey}`;

    request.get(url, (err, res) => {
      console.log(res.body.data);
      this.setState({ gifs: res.body.data });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs}
                 onGifSelect={ selectedGif => this.openModal(selectedGif) }/>
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));