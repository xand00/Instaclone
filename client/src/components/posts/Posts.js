import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadPosts } from '../../actions/posts'
import LikeUnlike from '../post/LikeUnlike'
import Comments from '../post/Comments'
import NewCommentForm from '../post/NewCommentForm'
import PostsList from './PostsList'
import Spinner from '../layout/Spinner'
import NoPosts from '../layout/NoPosts'

const Posts = ({ loadPosts, posts: { posts, postsLoading } }) => {
  useEffect(() => {
    loadPosts()
  }, [])

  if (postsLoading) {
    return <Spinner />
  } else if (posts.length < 1) {
    return <NoPosts />
  } else {
    return <PostsList posts={posts} />
  }
}

Posts.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(
  mapStateToProps,
  { loadPosts }
)(Posts)
