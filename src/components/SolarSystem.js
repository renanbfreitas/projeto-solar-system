import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const planetas = Planets.map((planeta, index) => (
      <PlanetCard
        key={ index }
        planetName={ planeta.name }
        planetImage={ planeta.image }
      />
    ));
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="Planetas" />
        <section className="list-planets">
          { planetas }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
