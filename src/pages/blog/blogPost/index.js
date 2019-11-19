import React from 'react'
import PageContent from '../../../components/pageContent'
import BlogNav from '../shared/blogNav'
import BlogContent from '../shared/blogContent'
import Disqus from 'disqus-react';
import { Loader } from '../../../components/Loader'

const disqusShortname = 'feeltripride';

const disqusConfig = ({ path, title}) => {
  return{
    url: `http:feeltrip.us/blog/${path}`,
    identifier: path,
    title: title,
  }
}

const BlogPost = ( props ) => {
console.log('hi')
  const { location } =  this.props
  console.log(location)
  if (!location) { console.log('ah shit') }
  return <Loader className="has-text-primary" />
  console.log(location)
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

export default BlogPost
