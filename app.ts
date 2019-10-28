import * as express from 'express'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)

    router.get('/custom',(req,res)=>{
        res.json({
            message:"Hello Miqdad!"
        })
    })
    this.express.use('/custom',router)
  }
}

export default new App().express