import { NextRequest, NextResponse } from "next/server";

import { connectMongo } from "@/backend/db/connectMongo";
import Message from "@/models/Message";


export default async function handler(req = NextRequest, res = NextResponse) {
    console.log('entro')
    if (req.method === 'POST') {
        console.log('entro')
        try {
            connectMongo();

            const { name, message } = req.body;

            const newMessage = new Message({ name, message });

            await newMessage.save();

            res.json({ newMessage });
        } catch (error) {
            res.status(401).json({
                msg: error
            })
        }
    } else {
      // Handle any other HTTP method
    }
  }