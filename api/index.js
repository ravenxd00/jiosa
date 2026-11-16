import { handle } from 'hono/vercel'
import app from '../src/app'   // adjust path if needed

export default handle(app)
