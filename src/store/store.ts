// store.ts
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';

const store = configureStore({
    reducer: {
        users: usersReducer,
        // Other reducers can be added here
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
