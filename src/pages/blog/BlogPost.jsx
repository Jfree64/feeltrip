import React from 'react'
import PageContent from '../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'
import Disqus from 'disqus-react';

{/*const disqusShortname = 'feeltripride';
const disqusConfig = (props) => {
    url: `http://feeltrip.us/blog/${props.path}`,
    identifier: props.path,
    title: props.title,
};*/}

const BlogPost = ({ location: { state: { props } }}) => (
  <article>
    <section class="hero is-medium is-primary is-bold">
        <img className="blog-post-header" src={props.titleImage.fields.file.url} />
    </section>
    <PageContent>
      <BlogNav date={props.date} to="/blog" />
      {/*<Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
      </Disqus.CommentCount>*/}
      <BlogContent {...props } />
      {/*<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />*/}
    </PageContent>
  </article>
)
export default BlogPost
