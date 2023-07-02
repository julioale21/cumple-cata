import { NextRequest, NextResponse } from "next/server";

import { connectMongo } from "@/backend/db/connectMongo";
import Message from "@/models/Message";
import Photo from "@/models/photo";


export default async function handler(req = NextRequest, res = NextResponse) {
    if (req.method === 'POST') {
        try {
            connectMongo();

            const { url } = req.body;

            const newPhoto = new Photo({ url, date: new Date() });

            await newPhoto.save();

            res.json({ newPhoto });
        } catch (error) {
            res.status(401).json({
                msg: error
            })
        }
    } else if (req.method === 'GET') {

    } else {
      // Handle any other HTTP method
    }
  }