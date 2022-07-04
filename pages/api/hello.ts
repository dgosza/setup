// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const testeFunction = () => {
  console.log('a');
  return 'string';
};

function getSeasonElement(season: any) {
  const { name } = season;
  const { element } = season;

  return `${name} has ${element}`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}
