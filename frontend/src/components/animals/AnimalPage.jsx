import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer';
import { BarChart3, Earth, Info, LayoutDashboard, ShieldAlert, Sprout } from 'lucide-react';
import animalData from '../../../../data_viz_animals/animals.json';
import ScrollToTopButton from '../ScrollToTopButton';

// The icon used in this page is from: https://www.flaticon.com/free-icon/alert_10263464?term=threat&page=1&position=56&origin=search&related_id=10263464

const AnimalPage = () => {
  const { id } = useParams();
  const selectedAnimal = animalData.find(animal => animal.id === id);

  const getConservationStatus = (category) => {
    let color = '';
    let description = '';

    switch (category) {
      case 'NT':
        color = '#92d943';
        description = 'Near Threatened';
        break;
      case 'VU':
        color = '#f2c94c';
        description = 'Vulnerable';
        break;
      case 'EN':
        color = '#f2994a';
        description = 'Endangered';
        break;
      case 'CR':
        color = '#eb5757';
        description = 'Critically Endangered';
        break;
      case 'EW':
        color = '#575757';
        description = 'Extinct in the Wild';
        break;
      case 'EX':
        color = '#575757';
        description = 'Extinct';
        break;
      default:
        color = '#575757';
        description = 'No information';
        break;
    }

    return (
      <span style={{ color: color }}>{description}</span>
    );
  }

  const getPopulationTrend = (populationTrend) => {
    let color = '';
    let description = '';

    switch (populationTrend) {
      case 'increasing':
        color = '#92d943';
        description = 'Increasing';
        break;
      case 'stable':
        color = '#f2c94c';
        description = 'Stable';
        break;
      case 'decreasing':
        color = '#eb5757';
        description = 'Decreasing';
        break;
      default:
        color = '#575757';
        description = 'No information';
        break;
    }

    return (
      <span style={{ color: color }}>{description}</span>
    );
  }

  const formatThreats = (threats) => {
    return threats.map((threat, index) => {
      return (
        <li className='mt-2 pl-2' key={index}>{threat.title}</li>
      );
    });
  }

  return (
    <div>
      <Navbar />

      <ScrollToTopButton />

      {selectedAnimal !== null && (
        <div className='section-container mx-auto px-16'>
          <h1 className='title'>{ selectedAnimal.sci_name }</h1>
          <h2 className='subtitle'><strong>Main common name:</strong> { selectedAnimal.main_common_name || 'Unknown' }</h2>

          <div className='flex flex-col lg:flex-row pt-20'>
            <div className="w-full lg:w-2/3 md:pr-16 text-justify">
              <div>
                <h1 className="text-xl font-bold flex">
                  <LayoutDashboard className='mr-4' size={24} />
                  <span>Taxonomic Classification</span>
                </h1>
                <p className="mt-4"><strong>Kingdom:</strong> { selectedAnimal.kingdom }</p>
                <p className="mt-4"><strong>Phylum:</strong> { selectedAnimal.phylum }</p>
                <p className="mt-4"><strong>Class:</strong> { selectedAnimal.class }</p>
                <p className="my-4"><strong>Order:</strong> { selectedAnimal.order }</p>
              </div>

              <div className='border border-gray-500 my-10'></div>

              <div>
                <h1 className="text-xl font-bold flex">
                  <Info className='mr-4' size={24} />
                  <span>Conservation information</span>
                </h1>
                <p className="mt-4"><strong>Status:</strong> { getConservationStatus(selectedAnimal.category) }</p>
              </div>

              <div className='border border-gray-500 my-10'></div>
              
              <div>
                <h1 className="my-4 text-xl font-bold flex">
                  <Earth className='mr-4' size={24} />
                  <span>Geographic range</span>
                </h1>
                <div dangerouslySetInnerHTML={{ __html: selectedAnimal.geographicrange }} />
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex justify-center">
              <img 
                src="https://ew.com/thmb/ulxnM8McQcjUew-_2BK1AC5dB90=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TikTok-Monkey-2340a4ca3baa45b9adc145d1e5db988b.jpg"
                alt="Animal photo"
                className='max-h-[500px] rounded-lg hover:shadow-lg hover:scale-105 transition transform duration-500 hover:shadow-slate-600' 
              />
            </div>
          </div>

          <div className='pt-14 md:pt-0 text-justify'>
            <div className='border border-gray-500 my-10'></div>
            
            <div>
              <h1 className="my-4 text-xl font-bold flex">
                <Sprout className='mr-4' size={24} />
                <span>Habitad</span>
              </h1>
              <div dangerouslySetInnerHTML={{ __html: selectedAnimal.habitat }} />
            </div>

            <div className='border border-gray-500 my-10'></div>

            <div>
              <h1 className="mt-4 text-xl font-bold flex">
                <ShieldAlert className='mr-4' size={24} />
                <span>Threads</span>
              </h1>
              <p className="mt-4 pl-4 pb-10 lg:pb-0">
                <ul className='list-disc list-image-alert'>
                  { formatThreats(selectedAnimal.threats) }
                </ul>
              </p>
            </div>

            <div className='border border-gray-500 my-10'></div>

            <div>
              <h1 className="mt-4 text-xl font-bold flex">
                <BarChart3 className='mr-4' size={24} />
                <span>Population</span>
              </h1>
              <p className="mt-4"><strong>Trend:</strong> { getPopulationTrend(selectedAnimal.populationtrend) } </p>
              <div dangerouslySetInnerHTML={{ __html: selectedAnimal.population }} />
              <p className='mt-4 mb-20 italic'><strong>Source:</strong> { selectedAnimal.citation }</p>
            </div>
          </div>
        </div>
      )}

      {selectedAnimal === null && (
        <div className='container mx-auto px-4 py-8'>
          <h1 className='title pt-12'>Animal not found.</h1>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AnimalPage