// import React from 'react'

import PlacesCard from './PlacesCard';
import Img1 from '../../assets/places/boat.jpg';
import Img2 from '../../assets/places/tajmahal.jpg';
import Img3 from '../../assets/places/water.jpg';
import Img4 from '../../assets/places/place4.jpg';
import Img5 from '../../assets/places/place5.jpg';
import Img6 from '../../assets/places/place6.jpg';



const PlacesData = [
  {
    img: Img1,
    title: 'Boat tour',
    location: 'USA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt?',
    price: 100,
    type: 'Cultural Relax',
  },
  {
    img: Img2,
    title: 'Taj Mahal',
    location: 'India',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt?',
    price: 6700,
    type: 'Cultural Relax',
  },
  {
    img: Img3,
    title: 'Underwater',
    location: 'UK',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt?',
    price: 300,
    type: 'Cultural Relax',
  },
  {
    img: Img4,
    title: 'Sydney',
    location: 'USA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt?',
    price: 1300,
    type: 'Cultural Relax',
  },
  {
    img: Img5,
    title: 'Los Angeles',
    location: 'United States',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt?',
    price: 3500,
    type: 'Cultural Relax',
  },
  {
    img: Img6,
    title: 'Los Vegas',
    location: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque, ea beatae, libero similique distinctio, id consequatur dolorem fugiat at a sapiente dolore? Ratione, debitis! Natus ut explicabo quibusdam nesciunt?',
    price: 6200,
    type: 'Cultural Relax',
  },
];
const Places = ({handleOrderPopup}) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          {' '}
          Best Places To Visit
        </h1>
        <div className='grid frod-cols-1 sm:grid-cols-2 md:grid:cols-3 gap-4 '>
          {PlacesData.map((item, index) => (
            <PlacesCard 
            handleOrderPopup={handleOrderPopup}
            key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
