import treemap from '../assets/treemap.png';
import React from 'react'

const HabitatsSection = () => {
  return (
    <div id="habitats" className="mx-14">
      <div className="flex flex-col items-center py-20 rounded-3xl bg-neutral-800">
        <h1 className="text-4xl font-bold">Main habitats where endangered species live</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2 px-10">
            <img src={treemap} alt="Habitats" className="rounded-lg ml-10" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="mx-20">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default HabitatsSection