import { Location } from "../../models/euskaltegi/Euskaltegi";

export const getExternalLocationInfo = async (
  name: string,
  key: string
): Promise<Location | undefined> => {
  const data = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=place_id,geometry,rating,name,type&input=${name}&inputtype=textquery&key=${key}`
  ).then((res) => res.json());

  console.log(data);

  if (!data.candidates) return;

  const filteredCandidates = data.candidates.filter((candidate: any) =>
    candidate.types.includes("locality")
  );

  const candidate = filteredCandidates[0];

  if (!candidate) return;

  return {
    name: candidate.name,
    coordinates: {
      lat: candidate.geometry.location.lat,
      lng: candidate.geometry.location.lng,
    },
  };
};
