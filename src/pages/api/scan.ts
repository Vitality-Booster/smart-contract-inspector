import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { solidityContract } = req.body;
    if (!solidityContract) {
      return res.status(400).end('Solidity contract is required.');
    }

    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Answer only with 'true' or 'false', and do not write any context. Is this smart-contract is vulnerable to reentrancy attacks: ${solidityContract}`,
          },
        ],
      });

      if (!completion.data.choices[0]) {
        return res.status(500).end('No answer was found.');
      }

      const answer = completion.data.choices[0].message;

      res.status(200).json(answer);
    } catch (error) {
      console.log(error);
      res.status(500).end('Something went wrong.');
    }
  } else {
    res.status(405).end();
  }
}
