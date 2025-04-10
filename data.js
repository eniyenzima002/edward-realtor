import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaBuilding, FaLaptopHouse } from "react-icons/fa";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { GiFamilyHouse, GiHouse } from "react-icons/gi";
import { IoSparkles } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { MdHouse, MdOutlineVilla, MdOutlineLocationOn, MdSchool } from "react-icons/md";

export const NAV_LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "services",
    link: "/services",
  },
];

export const PROPERTIES = [
  {
    icon: GiHouse,
    type: "Apartment",
    count: "58 Properties",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: MdOutlineVilla,
    type: "Modern House",
    count: "35 Properties",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: FaBuilding,
    type: "Condo",
    count: "42 Properties",
    img: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: MdHouse,
    type: "Townhouse",
    count: "27 Properties",
    img: "https://images.unsplash.com/photo-1584183984565-51306ef2a88a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG93bmhvbWV8ZW58MHx8MHx8fDA%3D"
  },
  {
    icon: FaHouseChimneyWindow,
    type: "Family Home",
    count: "63 Properties",
    img: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: GiFamilyHouse,
    type: "Duplex",
    count: "18 Properties",
    img: "https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: FaLaptopHouse,
    type: "Studio",
    count: "11 Properties",
    img: "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: BiSolidBuildingHouse,
    type: "Penthouse",
    count: "8 Properties",
    img: "https://images.unsplash.com/photo-1565623833408-d77e39b88af6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export const CONSIDER = [
  {
    icon: MdOutlineLocationOn,
    desc: "Locations",
    color: "text-green-300"

  },
  {
    icon: MdSchool,
    desc: "Schools",
    color: "text-pink-500"
  },
  {
    icon: IoSparkles,
    desc: "Amenities",
    color: "text-amber-200"
  },
  {
    icon: BsCashCoin,
    desc: "Affordability",
    color: "text-teal-500"
  },
]

export const FEATURED = [
  {
    link: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in Houston",
    price: "1400",
    tag: "Featured",
  },
  {
    link: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in Austin",
    price: "1200",
    tag: "Popular",
  },
  {
    link: "https://images.unsplash.com/photo-1600047509782-20d39509f26d?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in Dallas",
    price: "800",
    tag: "Featured",
  },
  {
    link: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in San Antonio",
    price: "1500",
    tag: "Featured",
  },
  {
    link: "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in Spring Branch",
    price: "1800",
    tag: "Popular",
  },
  {
    link: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "House in The Heights",
    price: "1000",
    tag: "Popular",
  },
];

export const QUALITIES = [
  {
    title: "25",
    description: "Years of successful experience ",
  },
  {
    title: "100+",
    description: "Overall Properties per capital yearly",
  },
  {
    title: "200+ ",
    description: "Served happy clients of ours",
  },
  {
    title: "10",
    description: "Dedicated team members",
  },
];

export const DESTINATIONS = [
  {
    link: "https://images.unsplash.com/photo-1612152328925-8b4ff8555606?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Houston",
  },
  {
    link: "https://images.unsplash.com/photo-1585182733881-503e2dd2fa56?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "San Antonio",
  },
  {
    link: "https://images.unsplash.com/photo-1578234467412-b0bbdb4c2283?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Dallas",
  },
  {
    link: "https://images.unsplash.com/photo-1591204954412-a30e9ae525ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Austin",
  },
];

export const TESTIMONIALS = [
  {
    text: "From our first meeting to closing day, Edward Realtor Staff went above and beyond to make sure we were well served. They listened to what we wanted, answered all our questions, and truly cared about helping us finding the right home. We couldn’t have done it without them! Thank you!",
    name: "Melissa & Jonathan K.",
    src: "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_640.jpg",
    company: "Houston, TX",
  },
  {
    text: "Selling a home is stressful, but Edward Realtor made it feel easy. Their marketing was top-notch, communication was constant, and we ended up with multiple offers in just in a few days. Highly recommend!",
    name: "Carlos D.",
    src: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    company: "San Antonio, TX",
  },
  {
    text: "We relocated from out of state, and Edward Realtor was an absolutely lifesaver. They were our eyes and ears on the ground, super knowledgeable about the area, and genuinely wanted the best for us. We’re so grateful!",
    name: "Amanda P.",
    src: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_640.jpg",
    company: "Austin, TX",
  },
];