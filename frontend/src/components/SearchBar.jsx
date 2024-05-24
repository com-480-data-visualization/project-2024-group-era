import React, { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import { BUTTON_PROPERTY } from '../constants/button'
import { useNavigate } from 'react-router-dom'
import animalsData from '../../../data_viz_animals/animals.json';

const SearchBar = () => {
    const [activeSearch, setActiveSearch] = useState([])
    const [selectedAnimal, setSelectedAnimal] = useState('')
    const [selectedAnimalId, setSelectedAnimalId] = useState(null);
    const navigate = useNavigate();
    const searchRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setActiveSearch([]);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleSearch = (e) => {
        setSelectedAnimal(e.target.value)
        
        const searchValue = e.target.value.toLowerCase()

        if (searchValue === '') {
            setActiveSearch([])
            return false
        }

        const searchResults = animalsData.filter((animal) => {
            return (animal.sci_name && animal.sci_name.toLowerCase().includes(searchValue)) || 
                   (animal.main_common_name && animal.main_common_name.toLowerCase().includes(searchValue));
        })

        setActiveSearch(searchResults)
    }

    const completeSearch = (animal) => {
        setActiveSearch([])
        setSelectedAnimal(animal.sci_name + (animal.main_common_name ? ` - ${animal.main_common_name}` : ''))
        setSelectedAnimalId(animal.id)
    }

    const searchAnimal = () => {
        if(selectedAnimalId !== null) {
            navigate(`/project-2024-group-era/animal/${selectedAnimalId}`);
        } else {
            console.log("No animal selected");
        }
    }

    return (
        <form className='w-[440px] relative' ref={searchRef}>
            <p className='mt-5 text-gray-200'>Search for the situation of:</p>
            <div className='flex justify-center mt-5'>
                <input
                    type='text'
                    className='
                        bg-neutral-900 w-full
                        rounded-md py-3 px-4 mx-3 text-neutral-500
                        focus:bg-white focus:border-neutral-500 duration-300 focus:text-black
                        hover:bg-white hover:border-neutral-500 ease-out hover:text-black
                    '
                    placeholder='Eg: Herichthys labridens'
                    value={selectedAnimal}
                    onChange={handleSearch}
                />
                <a
                    href='#'
                    className={BUTTON_PROPERTY}
                    onClick={searchAnimal}
                >
                    <Search size={22} />
                </a>
            </div>

            {
                activeSearch.length > 0 && (
                    <div className='
                        absolute top-32 w-[400px]
                        flex-col overflow-y-scroll max-h-36 bg-neutral-800 rounded-md'
                    >
                        {
                            activeSearch.map((animal, index) => (
                                <div
                                    key={index}
                                    className='py-3 px-4 hover:bg-neutral-700 cursor-pointer'
                                    onClick={() => completeSearch(animal)}
                                >
                                    <span>{animal.sci_name || 'Scientific Name Unknown'}</span> - <span>{animal.main_common_name || 'Common Name Unknown'}</span>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </form>
    )
}

export default SearchBar
