/**
* Blog Reducer
*/
import initialState from '../initialState'
import * as types from './types'
export default function blogReducer(state = initialState.blog, action) {
  switch (action.type) {
    case types.LOAD_BLOG_SUCCESS:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}
