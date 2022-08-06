import type { NextApiRequest, NextApiResponse } from "next";
import { getExternalLocationInfo } from "../../services/euskaltegi/getExternalLocationInfo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;

  if (!process.env.PRIVATE_GOOGLE_MAPS_API_KEY)
    return res.status(400).json({ message: "No Places API Key found" });
  if (typeof name !== "string")
    return res.status(400).json({ message: "No candidates found" });

  const location = getExternalLocationInfo(
    name,
    process.env.PRIVATE_GOOGLE_MAPS_API_KEY
  );

  if (!location)
    return res.status(400).json({ message: "No candidates found" });

  res.status(200).json(location);
}
