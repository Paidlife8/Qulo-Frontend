import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profile-service";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (thunkAPI) => {
    try {
      const delivered = await profileService.getProfile();
      console.log(delivered, "delivered request");
      return delivered;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async (requestData, thunkAPI) => {
    try {
      const { id, data } = requestData;
      console.log(data, "request data from edit");
      const delivered = await profileervice.editProfile(id, data);
      console.log(delivered, "delivered request");
      return delivered;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    gettingProfile: false,
    getProfileSuccess: false,
    getProfileError: false,

    //edit profile
    editingProfile: false,
  },
  reducers: {
    clearState: (state) => {
      state.profile = {};
      state.gettingProfile = false;
      state.getProfileSuccess = false;
      state.getProfileError = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.gettingProfile = true;
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.gettingProfile = false;
        state.getProfileSuccess = true;
        state.profile = payload;
        console.log(state.profile, "profile");
      })
      .addCase(getProfile.rejected, (state) => {
        console.log("getProfile");
        state.isFetching = false;
        state.isError = true;
      })
      .addCase(editProfile.pending, (state, action) => {
        state.isPending = true;
        console.log("pending");
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.isUpdateSuccess = true;
        state.singleRequest = action.payload;
        state.isUpdateError = false;
        console.log(state.singleRequest, "slice request updated");
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.isFetching = false;
        state.isUpdateError = true;
        state.updateErrorMessage = action.payload;
        console.log("is rejected", state.updateErrorMessage);
      });
  },
});

export const { clearState } = profileSlice.actions;
export const profileSelector = (state) => state.profile;
