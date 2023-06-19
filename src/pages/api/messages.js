import { NextRequest, NextResponse } from "next/server";

import { connectMongo } from "@/backend/db/connectMongo";
import Message from "@/models/Message";


export default async function handler(req = NextRequest, res = NextResponse) {
    if (req.method === 'POST') {
        try {
            connectMongo();

            const { name, message } = req.body;

            const newMessage = new Message({ name, message, date: new Date() });

            await newMessage.save();

            res.json({ newMessage });
        } catch (error) {
            res.status(401).json({
                msg: error
            })
        }
    } else if (req.method === 'GET') {
        try {
            connectMongo();

            const messages = await Message.find();

            return res.json(messages);
            
        } catch (error) {
            res.status(401).json({
                msg: error
            });
        }
    } else {
      // Handle any other HTTP method
    }
  }