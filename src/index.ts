import chalk from 'chalk';
import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()

const port = +process.env.PORT || 9000

app.listen(port, () => {
  console.log("server is running on port")
  console.log('')
  console.log(chalk.green.bold(`Server is up and running on port ${port}`))
  console.log(
    chalk.yellow.bold(`Mode: ${process.env.MODE || 'not defined -> DEV'}`),
  )
  console.log(chalk.yellow(`Verbose: ${process.env.VERBOSE || 'false'}`))
  console.log('---------------------------------------')
})
