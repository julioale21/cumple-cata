import { NextRequest, NextResponse } from "next/server";

import { connectMongo } from "@/backend/db/connectMongo";
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

        try {
            
            connectMongo();

            const photos = await Photo.find().sort({ date: -1 });

            res.json({ photos });
            
        } catch (error) {
            res.status(401).json({
                msg: error
            })
        }

    } else {
      // Handle any other HTTP method
    }
  }