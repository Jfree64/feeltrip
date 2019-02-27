import React from 'react'

const PageHeader = (props) => (
  <section className={`hero is-bold`}>
    <img src={props.img} className="page-header" />
    <div className="page-header-title">
      <div className="container">
        <h1 className="title">
          {props.title}
        </h1>
        <h2 className="subtitle">
          {props.children}
        </h2>
      </div>
    </div>
  </section>
)
export default PageHeader
