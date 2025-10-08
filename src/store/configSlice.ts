import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { Config } from '../types/config'

export interface ConfigState {
  data: Config | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error?: string
}

const initialState: ConfigState = {
  data: null,
  status: 'idle',
}

export const fetchConfig = createAsyncThunk<Config>('config/fetch', async () => {
  const res = await fetch('/config.json', { cache: 'no-cache' })
  if (!res.ok) throw new Error('Failed to load config.json')
  return (await res.json()) as Config
})

const slice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig(state, action: PayloadAction<Config>) {
      state.data = action.payload
      state.status = 'succeeded'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfig.pending, (state) => { state.status = 'loading' })
      .addCase(fetchConfig.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchConfig.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setConfig } = slice.actions
export default slice.reducer
