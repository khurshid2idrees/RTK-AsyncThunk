import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//  create action

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://66535be5813d78e6d6d80e4c.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// show user action

export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    const response = await fetch(
      "https://66535be5813d78e6d6d80e4c.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// action to delete user

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://66535be5813d78e6d6d80e4c.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );

    try {
      const result = await response.json();
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// fetch user details by id

export const EditUser = createAsyncThunk(
  "EditUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://66535be5813d78e6d6d80e4c.mockapi.io/crud/`,
      {
        method: "GET",
      }
    );

    try {
      const result = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: true,
    error: null,
  },
  reducers: {
    // put reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetail.reducer;
