import mongoose from 'mongoose';
import validator from 'validator';

import db from '../mongodb.config';
const instance = db.instance;

export interface IUser {
    name: string;
    phone?: string;
    imgUrl?: string;
    email: string;
    bio?: string;
    avatar?: string;
    location?: string;
    password: string;
    createdOn?: Date;
    updatedOn?: Date;
}

export type UserDocument = mongoose.Document & IUser;

const userSchema = new instance.Schema({
    name: { type: String, required: [true, 'User must have a name. '] },
    phone: { type: String, default: '' },
    imgUrl: { type: String, default: '' },
    email: {
        type: String,
        unique: true,
        required: [true, 'User must have an email address.'],
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    bio: { type: String, default: '' },
    avatar: { type: String, default: 'user' },
    location: { type: String, default: 'Canada' },
    password: {
        type: String,
        required: [true, 'User must have a password'],
        select: false,
    },
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
});

export const User = instance.model<UserDocument>('User', userSchema);
