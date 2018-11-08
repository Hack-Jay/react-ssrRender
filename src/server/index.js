import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import { getStore } from '../store'
import routes from '../Routes'
import { render } from './utils'

const app = express()
app.use(express.static('public'))

app.use('api', proxy('http://47.95.113.63', {
	proxyReqPathResolver: function (req) {
		return '/ssr/api' + req.url
	}
}))
app.get('*', function (req, res) {
  const store = getStore()
	// 根据路由填充store

	const matchedRoutes = matchRoutes(routes, req.path)

	const promises = []
	matchedRoutes.forEach(item => {
		if( item.route.loadData ) {
			promises.push(item.route.loadData(store))
		}
  })
  Promise.all(promises).then(()=>{
    res.send(render(store, routes, req))
	})

})

app.listen(3000,()=>console.log('server is running at port 3000'))