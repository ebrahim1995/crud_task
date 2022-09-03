import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/uset";

class UserService {

    public async getUser(userId: string) {

        let id = new mongoose.Types.ObjectId(userId)._id

        let user = await User.findById(id)

        if (!user) throw { status: 404, message: "user not found" };

        return user

    }

    public async createUser(user: any) {

        let createUser = await User.create(user);

        return createUser;
    }


    public async updateUser(updatedUser: any) {

        let user = await this.getUser(updatedUser._id);

        await User.updateOne({ _id: user._id }, { $set: updatedUser })

        return updatedUser

    }


    public async DeleteUser(userId: string) {

        let id = new mongoose.Types.ObjectId(userId)._id

        await User.findByIdAndRemove(id)

    }
}

export const userService = new UserService()