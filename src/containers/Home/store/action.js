import axios from 'axios'
import { CHANGE_LIST } from './contants'

const changeList = (list) => ({
	type: CHANGE_LIST,
	list
})

export const getHomeList = () => dispatch => {
	return axios.get('http://47.95.113.63/ssr/api/new.json?secret=abcd')
	.then(res => {
		console.log(res.data)
		dispatch(changeList(res.data))
	})
}