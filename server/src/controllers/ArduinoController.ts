import { Request, Response } from 'express'
import { Controller, Get } from '@overnightjs/core'
// import { Board, Led } from 'johnny-five'
// let board = new Board()

@Controller('api/arduino')
class ArduinoController{
  @Get('open-light')
  openLight(request: Request, response: Response) {
    // board.on("ready", () => {
    // const led = new Led(9)
    // led.toggle()
    // setTimeout(() => {
    //   led.toggle()
    // }, 2000)
    // })
    response.send('success!')
  }
}

export default new ArduinoController();