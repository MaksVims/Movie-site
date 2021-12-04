import {NextApiRequest, NextApiResponse} from "next";
import {readFileSync} from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = process.cwd() + '\\pages\\api\\filters\\filters.json'
  const fileContent = readFileSync(filePath, 'utf8')

  res.status(200).json(fileContent)
}