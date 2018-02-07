import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyDDg0lgolAKkjf-vWMAMeCuqI21kRSeSCs';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('');
  }
  
  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 500)
    return (
      <div>
        <div>
          <BookList />
          <BookDetail />
        </div>
        {/* <div className="divider" style={{ borderWidth: 5 }}> ^Redux project | No Redux v</div> */}
        <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}
