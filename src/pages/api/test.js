// src/pages/api/test.js
import { NextResponse } from "next/server";

import dbConnect from '@/utils/db';  // Adjust the path if necessary
import User from '@/models/users';   // Adjust the path if necessary

export default function handler(req, res) {
     dbConnect(); 
    console.log(req.method);
    const users = User.find({});
    return NextResponse.json(users, { status: 200 });
    res.status(200).json({ message: 'Test successful!' });
}