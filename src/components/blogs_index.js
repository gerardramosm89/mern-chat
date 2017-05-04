import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class BlogsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts("go through action!");
  }

  renderBlogs() {
    return _.map(this.props.blogs, blog => {
      return (
        <li className="list-group-item" key={blog.id}>
          {blog.title}
        </li>
      );
    });
  }

  render() {
    console.log("render", this.props.blogs);
    return (
      <div className="container">
        <h1>Blogs Index</h1>
        <Link to="/blogs/new">
          <button className="btn btn-primary">Add Post</button>
        </Link>
        <ul>
          {this.renderBlogs()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogs };
}
export default connect(mapStateToProps, { fetchPosts })(BlogsIndex);