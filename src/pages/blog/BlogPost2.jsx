import React from 'react'
import PageContent from '../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'
import Disqus from 'disqus-react';


const disqusShortname = 'feeltripride';

{/*const disqusConfig = {
    url: this.props.url,
    identifier: this.props.path,
    title: this.props.title,
}*/}

const BlogPost = ({ location: { state: { props } }}) => (
  <article>
    <section class="hero is-medium is-primary is-bold">
        <img className="blog-post-header" src={props.titleImage.fields.file.url} />
    </section>
    <PageContent>
      <BlogNav date={props.date} to="/blog" />
      <Disqus.CommentCount shortname={disqusShortname} >
                    Comments
      </Disqus.CommentCount>
      <BlogContent {...props } />
      <Disqus.DiscussionEmbed shortname={disqusShortname} />
      {console.log('FUCK YES')}
    </PageContent>
  </article>
)

{/*config={disqusConfig}*/}

export default BlogPost
