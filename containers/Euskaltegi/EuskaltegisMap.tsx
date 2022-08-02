import React from "react";
import {
  GoogleMap,
  MarkerClusterer,
  useJsApiLoader,
} from "@react-google-maps/api";
import * as ReactDOMServer from "react-dom/server";
import { Euskaltegi } from "../../models/euskaltegi/Euskaltegi";
import RankStars from "../../components/Euskaltegi/RankStars";
import EuskaltegiAccess from "../../components/Euskaltegi/EuskaltegiAccess/EuskaltegiAccess";
import { getEuskaltegiImgUrl } from "../../components/Euskaltegi/getEuskaltegiImgUrl";

interface Props {
  euskaltegis: Euskaltegi[];
  onMarkerClick: (euskaltegi: Euskaltegi) => void;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const EuskaltegisMap: React.FC<Props> = ({ euskaltegis, onMarkerClick }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  const [, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds();

    const markers = euskaltegis.map((euskaltegi) => {
      const stars = ReactDOMServer.renderToString(
        <RankStars stars={euskaltegi.rating.score} />
      );
      const access = ReactDOMServer.renderToString(
        <EuskaltegiAccess access={euskaltegi.access} />
      );
      const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        `<h4 style="font-size:1.2rem;" id="firstHeading" class="firstHeading">${euskaltegi.name}</h4>` +
        `<div>${euskaltegi.net} ${access}</div>` +
        `<div>${stars}</div>` +
        '<div id="bodyContent">' +
        `<div style="display:grid;grid-template-columns:90px 1fr;">` +
        `<div"><img style="max-width:100%;" src="${getEuskaltegiImgUrl(
          euskaltegi
        )}" /></div>` +
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
        title: euskaltegi.name,
        map,
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
        onMarkerClick(euskaltegi);
      });

      return marker;
    });

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

export default React.memo(EuskaltegisMap);
