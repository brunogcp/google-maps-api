import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "400px",
  width: "100%"
};

const center = { lat: -23.563987, lng: -46.653492 }; // Exemplo: Centro de São Paulo

// Mock de dados para pontos de interesse
const locations = [
  { id: 1, name: "Ponto A", position: { lat: -23.563987, lng: -46.653492 } },
  { id: 2, name: "Ponto B", position: { lat: -23.565987, lng: -46.655492 } },
  { id: 3, name: "Ponto C", position: { lat: -23.567987, lng: -46.657492 } }
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey="SUA_CHAVE_DA_API_AQUI">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        {locations.map(loc => (
          <Marker
            key={loc.id}
            position={loc.position}
            onClick={() => setSelected(loc)}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={selected.position}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>{selected.name}</h2>
              <p>Informações do ponto de interesse aqui.</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </LoadScript>
  );
}

export default App;