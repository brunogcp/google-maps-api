<div align="center">
  <h3 align="center">Google Maps</h3>
  <div>
  <a href="https://bgcp.com.br/article/24b92377-cd3a-4325-a572-ea683debc334">
  <img src="https://img.shields.io/badge/Download PDF (ENGLISH)-black?style=for-the-badge&logoColor=white&color=000000" alt="three.js" />
  </a>
  </div>
</div>

## 🌍 Introdução à API do Google Maps com React

Criar uma aplicação com mapas interativos é uma ótima maneira de visualizar dados geográficos, fornecer direções e compartilhar locais de interesse. Com a API do Google Maps e React, podemos facilmente adicionar funcionalidades de mapeamento avançadas a nossas aplicações web. Este tutorial mostrará como criar um mapa que plota pontos de interesse com informações detalhadas em cada marcador, tudo isso diretamente em um projeto React.

### 🌟 Principais Características:

- **🗺️ Exibição de Mapas**: Mostra um mapa interativo na sua aplicação.
- **📍 Marcadores de Pontos de Interesse**: Plota locais específicos no mapa.
- **💬 Caixas de Informação**: Exibe detalhes sobre cada ponto ao clicar nos marcadores.
- **👀 Visualização Personalizada**: Ajuste de zoom e centro do mapa para uma melhor visualização.

## 🛠️ Setup do Projeto React

1. **Criação do Projeto**:
   - Utilize o Vite para criar um novo projeto React: `npm create vite@latest nome-do-projeto -- --template react`
   - Navegue até a pasta do projeto: `cd nome-do-projeto`
   - Instale as dependências necessárias: `npm install`

2. **Instalação da Biblioteca do Google Maps**:
   - `npm install @react-google-maps/api` para integrar a API do Google Maps na aplicação React.

## 📊 Implementação

### Aplicação React

- **App.jsx**: Implementação do mapa com marcadores e caixas de informação.

```jsx
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
```

## 🏆 Conclusão

Você agora tem uma aplicação React que integra a API do Google Maps para exibir um mapa interativo com pontos de interesse. Ao clicar em um marcador, uma caixa de informação é exibida, mostrando mais detalhes sobre o local. Este exemplo básico pode ser expandido com funcionalidades adicionais, como pesquisa de locais, traçado de rotas e visualizações personalizadas, para criar aplicações ricas e interativas.

Explorar a API do Google Maps abre um vasto leque de possibilidades para adicionar contextos geográficos às suas aplicações, enriquecendo a experiência do usuário. Divirta-se criando e personalizando seus próprios mapas! 🚀🌍