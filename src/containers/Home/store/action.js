import { CHANGE_LIST } from './contants'

const changeList = (list) => ({
	type: CHANGE_LIST,
	list
})

// http://47.95.113.63/ssr/api/new.json?secret=abcd
export const getHomeList = () => (dispatch, getState, axiosInstance) => {
	return axiosInstance.get('/api/new.json?secret=abcd')
	.then(res => {
		dispatch(changeList(res.data))
	})
}