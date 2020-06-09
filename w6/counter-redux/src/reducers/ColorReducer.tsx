import ColorState from "../types/ColorState"

const initialState: ColorState = {
    color: 'black'
}
const colorReducer = (state: ColorState = initialState, action: any) => {
    switch(action.type) {
        case 'SET_COLOR':
            let setColorState = {
                color: action.color
            }
            return setColorState;
        default:
            return state;
    }
}

export default colorReducer;