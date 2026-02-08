import React, { useState } from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'
import './portfolio.css'

const Portfolio = () => {
  // 1. Créer l'état pour la catégorie active (par défaut "All")
  const [type, setCategory] = useState('All');

  // 2. Fonction pour filtrer les projets selon la catégorie
  // On suppose que chaque objet dans ton fichier data.jsx possède une propriété 'type'
  const filteredPortfolio = type === 'All' 
    ? portfolio 
    : portfolio.filter((item) => item.type === type);

  return (
    <section className='portfolio__section'>
      <h2 className='section__title'>My <span>Portfolio</span></h2>

      {/* 3. La bannière horizontale de filtrage */}
      <div className="portfolio__filters">
        <span 
          className={`filter__item ${type === 'All' ? 'active-filter' : ''}`}
          onClick={() => setCategory('All')}
        >
          All
        </span>
        <span 
          className={`filter__item ${type === 'web' ? 'active-filter' : ''}`}
          onClick={() => setCategory('web')}
        >
          web
        </span>
        <span 
          className={`filter__item ${type === 'mobile' ? 'active-filter' : ''}`}
          onClick={() => setCategory('mobile')}
        >
          mobile
        </span>
      </div>

      <div className="portfolio__container container grid">
        {/* 4. On mappe maintenant sur la liste filtrée */}
        {filteredPortfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Portfolio