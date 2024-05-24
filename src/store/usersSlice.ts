// usersSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import {baseUrl} from "../config"; // Import RootState type from your store file


interface User {
    id: number;
    name: string;
    email: string;
    // Define other properties of the user
}

// Define a thunk action creator
export const fetchUser = createAsyncThunk<any, void, { rejectValue: string }>(
    `${baseUrl}/users`,
        async (_, { rejectWithValue }) => {
            try {
                const response = await fetch(`${baseUrl}/users`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }
                const userData = await response.json();
                return userData;
            } catch (error) {
                console.log(error);
                // return rejectWithValue(error?.message);
            }
        }
);

export const fetchUserById = createAsyncThunk<any, any, { rejectValue: string }>(
    'user/fetchUserById',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${baseUrl}/users/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            const userData = await response.json();
            return userData;
        } catch (error) {
            console.log(error);
            // return rejectWithValue(error.message);
        }
    }
);


// Create a slice to handle the state
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user: null as User | null,
        loading: 'idle' as 'idle' | 'pending' | 'fulfilled' | 'rejected',
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload || 'An error occurred';
            })
            .addCase(fetchUserById.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = 'fulfilled';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(fetchUserById.rejected, (state, action: PayloadAction<any>) => {
                state.loading = 'rejected';
                state.error = action.payload;
            });
    },
});

export default usersSlice.reducer;
