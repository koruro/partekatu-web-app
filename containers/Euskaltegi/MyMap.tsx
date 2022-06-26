import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import * as ReactDOMServer from "react-dom/server";
import {
  Euskaltegi,
  getFormatedName,
} from "../../models/euskaltegi/Euskaltegi";
import RankStars from "../../components/Euskaltegi/RankStars";
import { useRouter } from "next/router";

interface Props {
  euskaltegis: Euskaltegi[];
}

const containerStyle = {
  width: "100%",
  height: "600px",
};

const MyMap: React.FC<Props> = ({ euskaltegis }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAKtcRC_LOfsTOR3S22DUi70pxWRCMBY1c",
  });

  const [, setMap] = React.useState<google.maps.Map | null>(null);
  const router = useRouter();

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds();

    for (const euskaltegi of euskaltegis) {
      const s = ReactDOMServer.renderToString(
        <RankStars stars={euskaltegi.rating.stars} />
      );
      const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        `<h1 id="firstHeading" class="firstHeading">${euskaltegi.name}</h1>` +
        `<div>${s}</div>` +
        '<div id="bodyContent">' +
        `<div style="display:grid;grid-template-columns:90px 1fr;">` +
        `<div"><img style="max-width:100%;" src="${euskaltegi.imgUrl}" /></div>` +
        `</div>` +
        "</div>" +
        "</div>";

      bounds.extend(euskaltegi.coordinates);
      const infowindow = new window.google.maps.InfoWindow({
        position: euskaltegi.coordinates,
        content: contentString,
      });

      const marker = new window.google.maps.Marker({
        position: euskaltegi.coordinates,
        map,
        title: euskaltegi.name,
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
        router.push(`#${getFormatedName(euskaltegi.name)}`);
      });
    }
    // const bounds2 = new window.google.maps.LatLngBounds({ lat: 43, lng: 23 });

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

export default React.memo(MyMap);
