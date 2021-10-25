import { createSlice } from '@reduxjs/toolkit'
import { Timestamp } from 'firebase/firestore'


const initialState = {
  loading: false,
  articles: [
    {
      comments: 0,
      description: '',
      user: {
        description: '',
        title: 'test',
        date: Timestamp.now().toDate(),
      },
    },
  ],
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setLoadingStatus: (state, action) => {
      state.loading = action.payload
    },
    setArticles: (state, action) => {
      state.articles = action.payload
    },
  },
})

export const { setLoadingStatus, setArticles } = articleSlice.actions
export default articleSlice.reducer
