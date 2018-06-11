import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const BlogNav = ({ to, date }) => (
  <nav className="level">
    <div className="level-left">
    <Link className="level-item button is-small is-link is-outlined" to={to}>
{ to === '/blog' ? 'Back to Blog' : 'Read More'}
</Link>
    </div>
    <div className="level-right">
      <p className="level-item has-text-link">
        {moment(date).calendar(null, {
          sameDay: '[Today]',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM Do YYYY'
        })}
      </p>
    </div>
  </nav>
)
export default BlogNav
