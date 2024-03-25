// import React from 'react'
import BlogCard from "./BlogCard";
import Img1 from '../../assets/places/tajmahal.jpg'
import Img2 from '../../assets/places/water.jpg'
import Img3 from '../../assets/places/boat.jpg'




const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: 'The 20 best places to visit',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit, quos excepturi, iste hic id expedita modi odio minima deleniti accusamus aliquam iusto delectus incidunt dolor, corrupti porro corporis alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis a quam blanditiis harum cumque molestias quia voluptate expedita ipsa nisi quis dicta minima asperiores temporibus modi alias ratione exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit, quos excepturi, iste hic id expedita modi odio minima deleniti accusamus aliquam iusto delectus incidunt dolor, corrupti porro corporis alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis a quam blanditiis harum cumque molestias quia voluptate expedita ipsa nisi quis dicta minima asperiores temporibus modi alias ratione exercitationem. ',
    author: 'John Doe',
    date: 'April, 2002',
  },
  {
    id: 2,
    image: Img2,
    title: 'The 10 best places to visit',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit, quos excepturi, iste hic id expedita modi odio minima deleniti accusamus aliquam iusto delectus incidunt dolor, corrupti porro corporis alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis a quam blanditiis harum cumque molestias quia voluptate expedita ipsa nisi quis dicta minima asperiores temporibus modi alias ratione exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit, quos excepturi, iste hic id expedita modi odio minima deleniti accusamus aliquam iusto delectus incidunt dolor, corrupti porro corporis alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis a quam blanditiis harum cumque molestias quia voluptate expedita ipsa nisi quis dicta minima asperiores temporibus modi alias ratione exercitationem. ',
    author: 'Peter Jones',
    date: 'May, 2022',
  },
  {
    id: 3,
    image: Img3,
    title: 'The 40 best places to visit',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit, quos excepturi, iste hic id expedita modi odio minima deleniti accusamus aliquam iusto delectus incidunt dolor, corrupti porro corporis alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis a quam blanditiis harum cumque molestias quia voluptate expedita ipsa nisi quis dicta minima asperiores temporibus modi alias ratione exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit, quos excepturi, iste hic id expedita modi odio minima deleniti accusamus aliquam iusto delectus incidunt dolor, corrupti porro corporis alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis a quam blanditiis harum cumque molestias quia voluptate expedita ipsa nisi quis dicta minima asperiores temporibus modi alias ratione exercitationem. ',
    author: 'Robert S',
    date: 'June, 2018',
  },
];
const BlogsComp = () => {
  return (
    <>
       <div className="dark:bg-gray-900 dark:text-white py-10">
      <div data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BlogsData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
    </>
   
  );
};

export default BlogsComp;
