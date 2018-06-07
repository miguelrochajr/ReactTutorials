import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCc3kKoPJ1uIOLm1WsOmSwvz6Uxy4aRlis';

// Create a new component. This should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    // perfoming the initial search
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState( { videos: videos} );  // same as below
      this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }

  render () {
    // this function can only be called each 300ms
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }  
};

// Take it and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
