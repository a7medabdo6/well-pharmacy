import baseUrl from "@/baseURL";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const requestCall = createAsyncThunk(
  "contactusSlice/postContactus",
  async (params) => {
    const { data } = await baseUrl.post("/contactus/", params);
    return data;
  }
);

const contactusSlice = createSlice({
  name: "contactusSlice",
  initialState: {
    loading: false,
    contact: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestCall.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(requestCall.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
      console.log(action.payload);
    });
    builder.addCase(requestCall.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default contactusSlice.reducer;
