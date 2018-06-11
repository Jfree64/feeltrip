import React from 'react'
import PageContent from '../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'



const BlogPost = ({ location: { state: { props } }}) => (
  <article>
    <section class="hero is-medium is-primary is-bold">
        <img className="blog-post-header" src={props.titleImage.fields.file.url} />
    </section>
    <PageContent>
      <BlogNav date={props.date} to="/blog" />
      <BlogContent {...props } />
    </PageContent>
  </article>
)
export default BlogPost
