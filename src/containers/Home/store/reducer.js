import { CHANGE_LIST } from './contants'

const defaultState = {
    name: 'zll an hj .',
    newsList: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
			case CHANGE_LIST:
				return {
					...state,
					newsList: action.list
				}
			default:
				return state
    }
}