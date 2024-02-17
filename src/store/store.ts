import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";
const reducers = combineReducers({
   
  });
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["LOGIN_USER"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
    reducer: persistedReducer ,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions:  [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
  });
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
