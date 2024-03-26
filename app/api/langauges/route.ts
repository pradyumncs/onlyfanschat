import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/connectMongo'; // Assuming in this location

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { perPage, page } = req.query;

  try {
    const client = await connectToDatabase();
    const db = client.db("programming");

    const itemsPerPage = parseInt(perPage as string) || 8; // Default to 8 per page
    const currentPage = parseInt(page as string) || 1; // Default to page 1

    const items = await db
      .collection("languages")
      .find({})
      .skip((currentPage - 1) * itemsPerPage)
      .limit(itemsPerPage)
      .toArray();

    const itemCount = await db.collection("languages").countDocuments({});

    const response = { items, itemCount };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch data. Please try again later.' });
  } 
}

export default handler;
