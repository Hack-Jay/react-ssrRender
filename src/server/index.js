import express from 'express'
import React from 'react'
import Home from '../containers/Home'
import { renderToString } from 'react-dom/server'

const app = express()
const content = renderToString(<Home />)
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send(
    `<html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>`
  )
})

app.listen(3000,()=>console.log('server is running at port 3000'))