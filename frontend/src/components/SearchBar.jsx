import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { BUTTON_PROPERTY } from '../constants/button'
import { animals } from '../data/animals.js'

const SearchBar = () => {
    const [activeSearch, setActiveSearch] = useState([])
    const [selectedAnimal, setSelectedAnimal] = useState('')

    const handleSearch = (e) => {
        setSelectedAnimal(e.target.value)
        
        const searchValue = e.target.value.toLowerCase()

        if (searchValue === '') {
            setActiveSearch([])
            return false
        }

        const searchResults = animals.filter((animal) => {
            return animal.toLowerCase().includes(searchValue)
        })

        setActiveSearch(searchResults)
    }

    const completeSearch = (animal) => {
        setActiveSearch([])
        setSelectedAnimal(animal)

        // Redirect to the animal's page
        // window.location.href = `/animal/${animal}`
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Redirect to the animal's page
            // window.location.href = `/animal/${selectedAnimal}`
        }
    }

    return (
        <form className='w-[440px] relative'>
            <p className='mt-5 text-gray-200'>Search for the situation of your favorite animal:</p>
            <div className='flex justify-center mt-5'>
                <input
                    type='text'
                    className='
                        bg-neutral-900
                        rounded-md py-3 px-4 mx-3 text-neutral-500
                        w-60
                        focus:bg-white focus:border-neutral-500 duration-400 focus:text-black
                        hover:bg-white hover:border-neutral-500 ease-out duration-400 hover:text-black
                    '
                    placeholder='Eg: Tiger'
                    value={selectedAnimal}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                />
                <a
                    href='#'
                    className={BUTTON_PROPERTY}
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
                                    {animal}
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