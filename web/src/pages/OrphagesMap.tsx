import React from 'react';
import { Link } from 'react-router-dom';

import mapMarkerImg from '../image/marker.svg';
import '../styles/pages/orphanages-map.css';
import { FiPlus } from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphagesMap() {
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
      </Map>
      <Link to="" className="create-orphanage"> <FiPlus size={32} color='#fff' /></Link>
    </div>
  )
}

export default OrphagesMap;