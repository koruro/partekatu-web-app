import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;
  const data = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=place_id,geometry,rating,name,type&input=${name}&inputtype=textquery&key=${process.env.PRIVATE_GOOGLE_MAPS_API_KEY}`
  ).then((res) => res.json());

  if (!data.candidates)
    return res.status(400).json({ message: "No candidates found" });

  const filteredCandidates = data.candidates.filter((candidate: any) =>
    candidate.types.includes("locality")
  );

  const candidate = filteredCandidates[0];

  if (!candidate)
    return res.status(400).json({ message: "No candidates found" });

  res.status(200).json({
    name: candidate.name,
    coordinates: {
      lat: candidate.geometry.location.lat,
      lng: candidate.geometry.location.lng,
    },
  });
}
