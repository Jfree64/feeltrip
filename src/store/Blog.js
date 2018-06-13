import * as contentful from 'contentful'
import * as actions from './blog/actions'
const client = contentful.createClient({
  space: 'map6q868erex',
  accessToken: 'becd0b9c6718713ac430ddf0131bbf958a6bedf27cbd83d1fb2692cbf8960d73'
})

const error = err => console.log(err)

export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading())
    return client.getEntries()
      .then(({items}) => {
        dispatch(actions.loadBlogSuccess(items))
      })
      .catch(error => {
        console.log(error)
        dispatch(actions.blogLoading(false))
      })
  }
}
