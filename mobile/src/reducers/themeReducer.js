import dark from '../themes/dark'
import light from '../themes/light'

const INITIAL_STATE = {
    theme: dark
}

const reducers = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case 'TOGGLE_THEME':
            if (state.theme.title === 'dark') {
                return { theme: light }
            }
            return { theme: dark }
        default:
            return state;
    }
}

export { reducers }