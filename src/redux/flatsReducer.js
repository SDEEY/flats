import {flatsApi} from "../api/api";

const SET_FLATS = 'SET_FLATS'

const initialState = {
    flats: []
}

const flatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLATS:
            return{
                ...state,
                flats: action.flats
            }
        default: return state
    }
}

const setFlatsAC = (flats) => ({type: SET_FLATS, flats})

export const getFlatsTC = () => async (dispatch) => {
    const response = await flatsApi.getFlats()
    dispatch(setFlatsAC(response))
}

export default flatsReducer