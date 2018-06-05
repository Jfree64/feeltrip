import React from 'react'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'

const BlogItem = (props) => (
<section>
  <section class="hero is-bold" >
      <img src={props.titleImage.fields.file.url} alt="Image" />
    </section>
  <div className="box">
    <BlogContent limit={150} {...props }>
      <BlogNav date={props.date} to={{
        pathname: `/blog/${props.path}`,
        state: { props }
      }} />
    </BlogContent>
  </div>
</section>
)
export default BlogItem
