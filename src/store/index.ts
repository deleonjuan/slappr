import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import reducers from './reducers'

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)
export default store