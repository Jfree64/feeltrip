import React from 'react'
import BlogItem from './blog/BlogItem.jsx'
import PageHeader from '../components/PageHeader.jsx'
import * as contentful from 'contentful'

class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'map6q868erex',
    accessToken: 'becd0b9c6718713ac430ddf0131bbf958a6bedf27cbd83d1fb2692cbf8960d73'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
      <div>
    {/*<PageHeader color="is-info" title="Code Blog">
  Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
</PageHeader> */}
      { this.state.posts.map(({fields}, i) =>
        <BlogItem key={i} {...fields} />
      )}
    </div>
    )
  }
}
export default Blog
