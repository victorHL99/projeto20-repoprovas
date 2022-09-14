import express from 'express'
import cors from 'cors'
import 'express-async-errors'

// import middlewares
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware'

// import routes
import indexRouter from './routes/index'

const app = express()

app.use(cors())
app.use(express.json())
app.use(indexRouter)
app.use(errorHandlerMiddleware)

export default app
