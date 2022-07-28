import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { getFormatedName, Location } from "../../models/euskaltegi/Euskaltegi";
import { useRouter } from "next/router";

interface Props {
  locations: Location[];
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const LocationMap: React.FC<Props> = ({ locations }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAKtcRC_LOfsTOR3S22DUi70pxWRCMBY1c",
  });

  const [, setMap] = React.useState<google.maps.Map | null>(null);
  const router = useRouter();

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds();

    for (const location of locations) {
      const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        `<h4 style="font-size:1.2rem;" id="firstHeading" class="firstHeading">${location.name}</h4>` +
        '<div id="bodyContent">' +
        `<div style="display:grid;grid-template-columns:90px 1fr;">` +
        `<div"><img style="max-width:100%;" src="${location.imgUrl}" /></div>` +
        `</div>` +
        "</div>" +
        "</div>";

      bounds.extend(location.coordinates);
      const infowindow = new window.google.maps.InfoWindow({
        position: location.coordinates,
        content: contentString,
      });

      const marker = new window.google.maps.Marker({
        position: location.coordinates,
        map,
        title: location.name,
      });

      marker.addListener("mouseover", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });

      marker.addListener("mouseout", () => {
        infowindow.close();
      });

      marker.addListener("click", () => {
        router.push(`#${getFormatedName(location.name)}`);
      });
    }

    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
      zoom={10}
      options={{ fullscreenControl: false }}
    ></GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(LocationMap);
