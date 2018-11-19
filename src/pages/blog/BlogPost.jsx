import React from 'react'
import PageContent from '../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'
import Disqus from 'disqus-react';
import { Loader } from '../../components/Loader'

const disqusShortname = 'feeltripride';

const disqusConfig = (props) => {
  return{
    url: `http:feeltrip.us/blog/${props.path}`,
    identifier: props.path,
    title: props.title,
  }
}

class BlogPost extends React.Component {
  render() {
    const { location } =  this.props

    if (!location) return <Loader className="has-text-primary" />

    const { props: data } = location.state

    return (
      <article>
        <section className="hero is-medium is-primary is-bold">
        <img
          className="blog-post-header"
          src={data.titleImage.fields.file.url}
          alt=""
        />
        </section>
        <PageContent>
          <BlogNav date={data.date} to="/blog" />
          <BlogContent {...data } />
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </PageContent>
      </article>
    )
  }
}

export default BlogPost
