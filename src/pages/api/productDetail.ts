import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  const { id } = query;

  const data = await fetch(`https://fakestoreapi.com/products/${id}`);

  return data
    ? res.status(200).json(data)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
