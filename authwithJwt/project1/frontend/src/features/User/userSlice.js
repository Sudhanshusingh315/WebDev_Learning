import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/user/auth", userCredentials);
      return response.data;
    } catch (err) {
      console.log("this is comming from err", err);
      return rejectWithValue(err.resonse.data);
    }
  }
);

export const logOutUser = createAsyncThunk("user/logOutUser", async () => {
  "users/logOutUser";
  console.log("disptach called");
  const response = await axios.post("/api/user/logout");
  return response.data;
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/user/", userCredentials);
      // res data -> action.payload
      return response.data;
    } catch (err) {
      // -> action.error
      // res error
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  // if there is anything is the localstorage? if there is set that to userInfo state, other wise put null
  // this initialstate matters a lot and this is what handles everythign since this is going to decide everything
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  error: null,
  isLoading: null,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // addition action
    reset: (state) => {
      state.error = null;
    },
    // logOut: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLoading = false;
        state.error = null;
        if (action.payload) {
          localStorage.setItem("userInfo", JSON.stringify(action.payload));
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload.Error;
        state.isLoading = false;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.userInfo = null;
          localStorage.removeItem("userInfo");
        }
      })
      .addCase(logOutUser.rejected, (state, action) => {
        console.log("logout rejected", action.payload);
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userInfo = action.payload;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log("comming from rejected value", action.payload);
        state.error = action.payload.Error;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = userSlice.actions;
export default userSlice.reducer;
