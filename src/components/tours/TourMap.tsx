import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Tour } from '../../lib/tours';
interface Props {
  tour: Tour;
}

const LOCATION_COORDS: Record<string, [number, number]> = {
  Airport: [7.1800, 79.8851],
  Negombo: [7.2050, 79.8467],
  Colombo: [6.9271, 79.8612],
  Galle: [6.0535, 80.2210],
  Mirissa: [5.9522, 80.4505],
  Bentota: [6.4197, 79.9859],
  Hikkaduwa: [6.1430, 80.1002],
  Trincomalee: [8.5870, 81.2150],
  Jaffna: [9.6615, 80.0255],
  Polonnaruwa: [7.9408, 81.0000],
  Dambulla: [7.8566, 80.6513],
  Sigiriya: [7.9570, 80.7603],
  Kandy: [7.2906, 80.6337],
  'Nuwara Eliya': [6.9497, 80.7890],
  Hatton: [6.8225, 80.5981],
  Ella: [6.8480, 81.0530],
  Yala: [6.3590, 81.3283],
  Wilpattu: [8.4667, 79.6667],
  Minneriya: [8.0000, 80.8833],
  Kataragama: [6.7195, 81.3303],
  Udawalawe: [6.4167, 80.9333],
  Anuradhapura: [8.3114, 80.4037],
  Pinnawala: [7.2930, 80.5078],
  Kitulgala: [6.8039, 80.4584],
  'Little Adam’s Peak': [6.8544, 81.0497],
  'Nine Arch Bridge': [6.8689, 81.0444],
  Habarana: [7.5167, 80.7714],
};

const LOCATION_KEYWORDS: Array<[string, RegExp]> = [
  ['Airport', /\bairport\b/i],
  ['Negombo', /\bnegombo\b/i],
  ['Colombo', /\bcolombo\b/i],
  ['Galle', /\bgalle\b/i],
  ['Mirissa', /\bmirissa\b/i],
  ['Bentota', /\bbentota\b/i],
  ['Hikkaduwa', /\bhikkaduwa\b/i],
  ['Trincomalee', /\btrincomalee\b/i],
  ['Jaffna', /\bjaffna\b/i],
  ['Polonnaruwa', /\bpolonnaruwa\b/i],
  ['Dambulla', /\bdambulla\b/i],
  ['Sigiriya', /\bsigiriya\b|\bpidurangala\b/i],
  ['Kandy', /\bkandy\b|\bpinnawala\b/i],
  ['Nuwara Eliya', /\bnuwara eliya\b|\bnanu oya\b/i],
  ['Hatton', /\bhatton\b/i],
  ['Ella', /\bella\b|\bnine arch\b|\blittle adam/i],
  ['Yala', /\byala\b/i],
  ['Wilpattu', /\bwilpattu\b/i],
  ['Minneriya', /\bminneriya\b/i],
  ['Kataragama', /\bkataragama\b/i],
  ['Udawalawe', /\budawalawe\b/i],
  ['Anuradhapura', /\banuradhapura\b/i],
  ['Kitulgala', /\bkitulgala\b/i],
  ['Habarana', /\bhabarana\b/i],
];

function extractLocationsFromText(text: string) {
  const found: string[] = [];

  for (const [location, pattern] of LOCATION_KEYWORDS) {
    if (pattern.test(text) && !found.includes(location)) {
      found.push(location);
    }
  }

  if (!found.length && /airport/i.test(text)) {
    return ['Airport'];
  }

  return found;
}

function buildRouteFromItinerary(itinerary: Tour['itinerary']) {
  const stops: string[] = [];

  itinerary.forEach((day) => {
    const candidateText = `${day.title} ${day.description}`;
    const locations = extractLocationsFromText(candidateText);

    locations.forEach((location) => {
      if (stops[stops.length - 1] !== location) {
        stops.push(location);
      }
    });
  });

  return stops
    .map((name) => LOCATION_COORDS[name])
    .filter((coord): coord is [number, number] => Boolean(coord));
}

export function TourMap({ tour }: Props) {
  const route = buildRouteFromItinerary(tour.itinerary);
  const fallbackBasePos: [number, number] = [7.8731, 80.7718];
  const mapCenter = route.length > 0 ? route[Math.floor(route.length / 2)] : fallbackBasePos;
  const markerLabels = route.map((pos) => {
    const entry = Object.entries(LOCATION_COORDS).find(([, coord]) => coord[0] === pos[0] && coord[1] === pos[1]);
    return entry ? entry[0] : 'Stop';
  });

  return (
    <section className="py-12">
      <h2 className="font-heading text-4xl text-primary font-medium mb-8">
        Journey Route
      </h2>
      <div className="h-[450px] w-full rounded-lg overflow-hidden shadow-sm border border-primary/10 hover:shadow-md hover:border-primary/20 transition-all duration-300 relative z-0">
        <MapContainer
          center={mapCenter}
          zoom={route.length > 1 ? 7 : 8}
          bounds={route.length > 1 ? route : undefined}
          boundsOptions={{ padding: [40, 40] }}
          scrollWheelZoom={false}
          className="h-full w-full">
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
          {route.length > 1 && (
            <Polyline
              positions={route}
              color="#2B7772"
              weight={3}
              opacity={0.7}
              dashArray="10, 10" />
          )}
          {route.map((pos, idx) => (
            <Marker key={idx} position={pos}>
              <Popup>
                <div className="font-heading font-medium text-primary text-sm">
                  {markerLabels[idx]}{markerLabels[idx] === 'Airport' ? '' : ` · Stop ${idx + 1}`}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}