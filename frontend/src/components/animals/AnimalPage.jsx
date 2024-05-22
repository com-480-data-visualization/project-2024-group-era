import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer';
import { BarChart3, Earth, Info, LayoutDashboard, ShieldAlert, Sprout } from 'lucide-react';
import animalData from '../../../../data_viz_animals/animals.json';
import ScrollToTopButton from '../ScrollToTopButton';
import placeholderImage from '../../assets/placeholder_img.jpg';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// The icon used in this page is from: https://www.flaticon.com/free-icon/alert_10263464?term=threat&page=1&position=56&origin=search&related_id=10263464

const categoryValues = {
  'Near Threatened': 1,
  'Vulnerable': 2,
  'Endangered': 3,
  'Critically Endangered': 4,
  'Extinct': 5,
};

const categoryColors = {
  'Near Threatened': '#FFBA08',
  'Vulnerable': '#F48C06',
  'Endangered': '#E85D04',
  'Critically Endangered': '#DC2F02',
  'Extinct': '#9D0208',
};

const AnimalPage = () => {
  const { id } = useParams();
  const selectedAnimal = animalData.find(animal => animal.id === id);

  selectedAnimal.history.sort((a, b) => a.year - b.year);

  const data = selectedAnimal.history.map(entry => ({
    year: entry.year,
    status: categoryValues[entry.category],
  }));

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
        description = 'Unknown';
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

  const importImage = async () => {
    try {
      const imageModule = await import(`../../assets/animals/${selectedAnimal.id}.jpg`);
      return imageModule.default; // Assuming you're using ES modules
    } catch (error) {
      console.error('Error loading image:', error);
    }
  };

  const [image, setImage] = React.useState(null);

  // Load the image when the component mounts
  React.useEffect(() => {
    importImage().then(setImage);
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (!payload || payload.length === 0) {
      return null;
    }

    const { year, status } = payload[0].payload;
    let value = '';

    switch (status) {
      case 1:
        value = 'Near Threatened';
        break;
      case 2:
        value = 'Vulnerable';
        break;
      case 3:
        value = 'Endangered';
        break;
      case 4:
        value = 'Critically Endangered';
        break;
      case 5:
        value = 'Extinct';
        break;
      default:
        value = '';
    }

    return (
      <div className="custom-tooltip">
        <p className="label">{`Year: ${year}`}</p>
        <p>{`Status: ${value}`}</p>
      </div>
    );
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
                src={image || placeholderImage}
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
              <div className="mt-4 pl-4 pb-10 lg:pb-0">
                <ul className='list-disc list-image-alert'>
                  { formatThreats(selectedAnimal.threats) }
                </ul>
              </div>
            </div>

            <div className='border border-gray-500 my-10'></div>

            <div>
              <h1 className="mt-4 text-xl font-bold flex">
                <BarChart3 className='mr-4' size={24} />
                <span>Population</span>
              </h1>
              <p className="my-4"><strong>Trend:</strong> { getPopulationTrend(selectedAnimal.populationtrend) } </p>
              <div dangerouslySetInnerHTML={{ __html: selectedAnimal.population }} />
            </div>

            <p className='mt-4 mb-7'>
              <strong>Historical conservation status:</strong>
            </p>
            <div className="chart-container mb-4" style={{ width: '100%', height: 400 }}>
              <ResponsiveContainer>
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis domain={[1, 5]} tickFormatter={(value) => {
                    switch (value) {
                      case 1:
                        return 'Near Threatened';
                      case 2:
                        return 'Vulnerable';
                      case 3:
                        return 'Endangered';
                      case 4:
                        return 'Critically Endangered';
                      case 5:
                        return 'Extinct';
                      default:
                        return '';
                    }
                  }}
                  style={{ fontSize: '12px' }} />
                  <Tooltip content={<CustomTooltip />}/>
                  <Line type="monotone" dataKey="status" stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <p className='mb-10'><strong>Source:</strong> { selectedAnimal.citation }</p>
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