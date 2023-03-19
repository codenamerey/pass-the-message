// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  question: string,
  wanted_answers: String[]
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ question: 'Anong tawag sa higaan na may laude?', wanted_answers: ['quirky'], })
}
