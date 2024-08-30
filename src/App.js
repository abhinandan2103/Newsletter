import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes, // Import Routes instead of Switch
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API;
  
  c = 'john';
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress})
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        <LoadingBar
        height={3}
          color='#f11946'
          progress={this.state.progress}
        />
          <Routes> {/* Use Routes instead of Switch */}
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general"  pageSize={5} country="in" category="general" />} />
            <Route exact path="/Business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={5} country="in" category="business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route exact path="/Health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={5} country="in" category="health" />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={5} country="in" category="science" />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={5} country="in" category="sports" />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={5} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
