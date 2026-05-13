import { Hono } from 'hono'
import { cors } from 'hono/cors'
import auth from './router/auth'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('*', logger())
app.use('/api/*', cors())

app.get('/', (c) => {
  return c.text('Grape is running!')
})

app.route('/api/auth', auth)

export default app
