import tourImg01 from "../images/indian 10.jpeg";
import tourImg02 from "../images/indian 11.jpeg";
import tourImg03 from "../images/indian 6.webp";
import tourImg04 from "../images/indian 7.jpg";
import tourImg05 from "../images/indian 8.jpeg";
import tourImg06 from "../images/indian 13.jpg";
import tourImg07 from "../images/indian 2.jpg";

const tours = [
  {
    id: "01",
    title: "Dal Lake",
    city: "Kashmir",
    distance: 300,
    address:'Somewhere',
    price: 9999,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Red Fort",
    city: "Delhi",
    distance: 400,
    address:'Somewhere',
    price: 9999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Jagannath temple",
    city: "Puri,Odisha",
    distance: 500,
    address:'Somewhere',
    price: 9999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Taj Mahal",
    city: "Agra",
    distance: 500,
    address:'Somewhere',
    price: 9999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Hugli Bridge",
    city: "Kolkata",
    distance: 500,
    address:'Somewhere',
    price: 9999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Mevad fort",
    city: "Jaipur",
    distance: 500,
    address:'Somewhere',
    price: 9999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Desert",
    city: "Rajasthan",
    distance: 500,
    address:'Somewhere',
    price: 9999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Sun Temple ",
    city: "Konark",
    distance: 500,
    price: 9999,
    address:'Somewhere',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
