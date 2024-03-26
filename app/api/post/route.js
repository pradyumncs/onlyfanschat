import {NextResponse} from "next/server"
import connect from "../../../db"
import Post from "../../../models/Post"

export const GET = async (req) => {

    try {
        await connect()
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), {status: 200})
     
    }
     catch (e) {
        return new NextResponse(e.message, {status: 500})
    }

}
