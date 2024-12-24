import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const storedUsers = localStorage.getItem('addUsers');
const users = storedUsers ? JSON.parse(storedUsers) : 0

const sotoredBatteries = localStorage.getItem('addBatteries');
const batteries = sotoredBatteries ? JSON.parse(sotoredBatteries) : 0;

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        'activeUsers': users,
        'batteriesSwapStations': batteries,
    },
    reducers: {
        addUsers: (state, action) => {
            state.activeUsers = action.payload;
            localStorage.setItem('addUsers', JSON.stringify(state.activeUsers))
        },
        addBatteries: (state, action) => {
            state.batteriesSwapStations = action.payload;
            localStorage.setItem('addBatteries', JSON.stringify(state.batteriesSwapStations));
        }
    }
});

export const { addUsers, addBatteries } = dashboardSlice.actions;
export const selectDashboard = (state: RootState) => state.dashboard;
export default dashboardSlice.reducer