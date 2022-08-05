import { Location } from "../../models/euskaltegi/Euskaltegi";

export const getExternalLocationInfo = async (
  name: string,
  key: string
): Promise<Location | undefined> => {
  const data = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=place_id,geometry,rating,name,type&input=${name}&inputtype=textquery&key=${key}&locationbias=rectangle%3A36.4445%2C%20-9.7099%7C43.32509%2C%203.4639&language=es`
  ).then((res) => res.json());

  console.log(data.candidates);

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
    toIndex: false,
  };
};
