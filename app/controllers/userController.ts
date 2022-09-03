import { Request, Response } from "express";
import { userService } from "../services/userService";

export class UserController {

    public async getUser(req: Request, res: Response) {

        try {

            let user = await userService.getUser(req.params.id)

            return res.send({ result: user })

        } catch (error: any) {

            let status = error.status ? error.status : 500
            return res.status(status).send({ message: error.message })
        }
    }

    public async createUser(req: Request, res: Response) {

        try {

            let user = await userService.createUser(req.body)

            return res.send({ result: user })

        } catch (error: any) {

            let status = error.status ? error.status : 500
            return res.status(status).send({ message: error.message })
        }
    }


    public async updateUser(req: Request, res: Response) {

        try {


            let user = await userService.updateUser(req.body)

            return res.send({ result: user })

        } catch (error: any) {

            let status = error.status ? error.status : 500
            return res.status(status).send({ message: error.message })

        }
    }


    public async DeleteUser(req: Request, res: Response) {

        try {

            await userService.DeleteUser(req.params.id)

            return res.send({ message: "user deleted successfully" })


        } catch (error: any) {

            let status = error.status ? error.status : 500
            return res.status(status).send({ message: error.message })
        }

    }
}
