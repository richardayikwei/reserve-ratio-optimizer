import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        'activeUsers': 0,
        'batteriesSwapStations': 0,
    },
    reducers: {
        addUsers: (state, action) => {
            state.activeUsers = action.payload;
        },
        addBatteries: (state, action) => {
            state.batteriesSwapStations = action.payload;
        }
    }
});

export const { addUsers, addBatteries } = dashboardSlice.actions;
export const selectDashboard = (state: RootState) => state.dashboard;
export default dashboardSlice.reducer