import React from 'react'
import BlogNav from '../shared/blogNav'
import BlogContent from '../shared/blogContent'

const BlogItem = (props) => (
<section>
  <section className="hero is-bold" >
      <img src={props.titleImage.fields.file.url} className="blog-item-header"
      alt=""/>
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
