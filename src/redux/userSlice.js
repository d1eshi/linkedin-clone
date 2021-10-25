import { createSlice} from '@reduxjs/toolkit'

const initialState = { actor: null }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.actor = action.payload
    },
  },
})

export const selectUser = (state) => state.user
export const { setUser } = userSlice.actions
export default userSlice.reducer
