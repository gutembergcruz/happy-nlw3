import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/orphanages-map.css';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from '../utils/mapIcon';

import mapMarkerImg from '../image/marker.svg';
import api from '../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: String;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolhar um orfanato no mapa</h2>
          <p>Muitas crianças estao esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map center={[-23.5411169, -46.6415725]} zoom={15} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {orphanages.map(orphanages => {
          return (
            <Marker key={orphanages.id} position={[orphanages.latitude, orphanages.longitude]} icon={mapIcon}>
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanages.name}
                <Link to={`/orphanages/${orphanages.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>
      <Link to="/orphanages/create" className="create-orphanage"> <FiPlus size={32} color='#fff' /></Link>
    </div>
  )
}

export default OrphanagesMap;