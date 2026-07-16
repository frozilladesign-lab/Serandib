import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Tour } from '../../lib/tours';
interface Props {
  tour: Tour;
}

const LOCATION_COORDS: Record<string, [number, number]> = {
  Airport: [7.1800, 79.8851],
  Negombo: [7.2050, 79.8467],
  Galle: [6.0535, 80.2210],
  Yala: [6.3590, 81.3283],
  Ella: [6.8480, 81.0530],
  'Nuwara Eliya': [6.9497, 80.7890],
  Kandy: [7.2906, 80.6337],
  Sigiriya: [7.9570, 80.7603],
  Trincomalee: [8.5870, 81.2152],
  Colombo: [6.9271, 79.8612],
  Anuradhapura: [8.3114, 80.4037],
  Dambulla: [7.8566, 80.6513],
};

function extractLocationsFromTitle(title: string) {
  const keys = Object.keys(LOCATION_COORDS);
  const found: string[] = [];
  const titleLower = title.toLowerCase();

  for (const key of keys) {
    const regex = new RegExp(`\\b${key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
    if (regex.test(titleLower)) {
      found.push(key);
    }
  }

  if (found.length) {
    return found;
  }

  if (/airport/i.test(title)) {
    return ['Airport'];
  }

  return [];
}

function buildRouteFromItinerary(itinerary: Tour['itinerary']) {
  const stops: string[] = [];
  itinerary.forEach((day) => {
    const locations = extractLocationsFromTitle(day.title);
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
          zoom={7}
          scrollWheelZoom={false}
          className="h-full w-full">
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
          <Polyline
            positions={route.length > 0 ? route : [fallbackBasePos]}
            color="#2B7772"
            weight={3}
            opacity={0.7}
            dashArray="10, 10" />
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