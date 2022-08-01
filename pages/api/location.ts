import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  const data = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=place_id,geometry,rating,name&input=${name}&inputtype=textquery&key=AIzaSyAKtcRC_LOfsTOR3S22DUi70pxWRCMBY1c`
  ).then((res) => res.json());

  if (!data.candidates)
    return res.status(400).json({ message: "No candidates found" });

  const candidate = data.candidates[0];
  res.status(200).json({
    name: candidate.name,
    coordinates: {
      lat: candidate.geometry.location.lat,
      lng: candidate.geometry.location.lng,
    },
  });
}
