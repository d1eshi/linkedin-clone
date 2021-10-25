import { configureStore } from '@reduxjs/toolkit'

import articleReducer from './articleSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
  },
  // middleware: getDefaultMiddleware => {

  // }
})


