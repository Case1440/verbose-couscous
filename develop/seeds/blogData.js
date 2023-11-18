const { Blog } = require('../models');

const blogData = [
  {
   title: 'Why is coding so awesome?',
   description: 'You get to create something people use everyday. Who would not love that!',
  },
 {
    title: 'Front-End vs Back-End',
    description: 'Front-End deals with the client side of the application. Back-End deals with the server side and databases',
 },
 {
    title: 'Object-Relational Mapping',
    description: "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
 },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;