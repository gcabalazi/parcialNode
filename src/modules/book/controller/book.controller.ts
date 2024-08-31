import { Types } from "mongoose";
import { IBook } from "../interface/book.interface";
import { BookModel } from "../models/user.model";

export const createBook = async (user: IBook) => {
    try {
        // Creacion en memoria
        const newUser = new BookModel(user);
        return await newUser.save();
    } catch (error) {
        throw new Error("Error could not save in database");
    }
};

export const getAllBooks = async () => {
    try {
        return await BookModel.find();
    } catch (error) {
        throw new Error("Error could not get the users stored");
    }
};

export const getBookById = async (id: string) => {
    try {
        return await BookModel.findById(id);
    } catch (error) {
        throw new Error("Error could not find the user");
    }
};

export const DeletedBook = async (id: string) => {
    try {
        return await BookModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Error could not find the user");
    }
};


export const UpdateBook = async (id: string,body:Body) => {
    try {
        return await BookModel.findByIdAndUpdate(id,body);
    } catch (error) {
        throw new Error("Error could not find the user");
    }
};