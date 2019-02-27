import React from 'react'
import * as Markdown from 'react-markdown'

const BlogContent = (props) => (
  <article className="section">
    <div className="media-content is-constrained">
      <div className="content">
        <h1>{props.title}</h1>
        <Markdown
          source={
            props.limit
            ? props.content.split(" ").splice(0,props.limit).join(" ").concat('...')
            : props.content
          }
        />
      </div>
      { props.children }
    </div>
    {window.scrollTo(0, 0)}
  </article>
)
export default BlogContent
