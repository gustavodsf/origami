import { Request, Response } from 'express';


class UserController {

  getUserListGet(request: Request, response: Response){
    // TODO Melhorar na próxima versão
    return response.status(200).json({
      usj: "HELLO WORLD!!! 21:08 (GET)" 
    })
  }

  getUserListPost(request: Request, response: Response){
    return response.status(200).json({
      usj: "HELLO WORLD!!! 21:08 (POST)" 
    })
  }
}

export { UserController };