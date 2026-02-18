import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { orchidSpecies } from '@/lib/orchidData';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const reportIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  className: 'hue-rotate-180',
});

interface ReportedPin {
  lat: number;
  lng: number;
}

const ClickHandler = ({ onAdd }: { onAdd: (pin: ReportedPin) => void }) => {
  useMapEvents({
    click(e) {
      onAdd({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
};

const MapPage = () => {
  const { lang, t } = useI18n();
  const [reports, setReports] = useState<ReportedPin[]>([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-serif text-3xl font-bold mb-2">{t('mapTitle')}</h1>
        <p className="text-muted-foreground mb-2">{t('mapDesc')}</p>
        <p className="text-sm text-primary font-medium mb-6">{t('clickToReport')}</p>
      </motion.div>

      <div className="rounded-xl overflow-hidden border shadow-lg" style={{ height: '65vh' }}>
        <MapContainer
          center={[48.0, 67.0]}
          zoom={5}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Known populations */}
          {orchidSpecies.map(species =>
            species.coordinates.map(([lat, lng], i) => (
              <Marker key={`${species.id}-${i}`} position={[lat, lng]}>
                <Popup>
                  <strong className="font-serif">{species.name[lang]}</strong>
                  <br />
                  <em className="text-xs">{species.scientificName}</em>
                  <br />
                  <span className="text-xs">{species.regions[Math.min(i, species.regions.length - 1)]}</span>
                </Popup>
              </Marker>
            ))
          )}

          {/* User reports */}
          {reports.map((pin, i) => (
            <Marker key={`report-${i}`} position={[pin.lat, pin.lng]} icon={reportIcon}>
              <Popup>
                <strong>{t('yourReport')}</strong>
                <br />
                <span className="text-xs">
                  {t('reportedAt')} {pin.lat.toFixed(4)}, {pin.lng.toFixed(4)}
                </span>
              </Popup>
            </Marker>
          ))}

          <ClickHandler onAdd={(pin) => setReports(prev => [...prev, pin])} />
        </MapContainer>
      </div>

      {reports.length > 0 && (
        <div className="mt-4 text-sm text-muted-foreground">
          {t('reportPopulation')}: {reports.length} pin{reports.length > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
};

export default MapPage;
