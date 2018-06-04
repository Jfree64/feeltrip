import React from 'react'
import BlogItem from './blog/BlogItem.jsx'
import PageHeader from '../components/PageHeader.jsx'
import PageContent from '../components/PageContent.jsx'
import * as contentful from 'contentful'

class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'qu10m4oq2u62',
    accessToken: 'f4a9f68de290d53552b107eb503f3a073bc4c632f5bdd50efacc61498a0c592a'
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
      <PageHeader color="is-info" title="Code Blog">
  Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
</PageHeader>
      <br/>
      { this.state.posts.map(({fields}, i) =>
        <BlogItem key={i} {...fields} />
      )}
    </div>
    )
  }
}
export default Blog
