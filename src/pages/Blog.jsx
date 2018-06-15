import React from 'react'
import { connect } from 'react-redux'
import BlogItem from './blog/BlogItem'
import PageHeader from '../components/PageHeader'
import { Loader } from '../components/Loader'

import blogHeader from '../images/blogHeader.png'

class Blog extends React.Component {
  render() {
    return (
      <div>
        <PageHeader color="is-info" title="" img={blogHeader}>
          don't just be about it, talk about it.
        </PageHeader>
        { this.props.blog.loading
          ? <Loader className="has-text-primary"></Loader>
          : <div>
          { this.props.blog.posts.map(({fields}, i) =>
            <BlogItem key={i} {...fields} />
          )}
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}

export default connect(mapStateToProps)(Blog)
