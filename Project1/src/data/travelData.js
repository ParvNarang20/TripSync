export const cities = [
  {
    name: "Delhi",
    airport: "DEL",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Mumbai",
    airport: "BOM",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Bangalore",
    airport: "BLR",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Chennai",
    airport: "MAA",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Kolkata",
    airport: "CCU",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Goa",
    airport: "GOI",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Jaipur",
    airport: "JAI",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Udaipur",
    airport: "UDR",
    image: "https://images.unsplash.com/photo-1600100397608-f010b4421cf5?auto=format&fit=crop&w=1400&q=80",
  },
];

export const hotelsByCity = {
  Delhi: [
    { name: "Taj Palace", area: "Chanakyapuri", price: 12500, rating: 4.7, tag: "Luxury" },
    { name: "The Leela Palace", area: "Diplomatic Enclave", price: 16800, rating: 4.8, tag: "Premium" },
    { name: "ITC Maurya", area: "Sardar Patel Marg", price: 14200, rating: 4.6, tag: "Business" },
    { name: "The Claridges", area: "Lutyens Delhi", price: 9800, rating: 4.4, tag: "Heritage" },
    { name: "Roseate House", area: "Aerocity", price: 9200, rating: 4.5, tag: "Airport" },
    { name: "Bloomrooms", area: "Janpath", price: 3600, rating: 4.2, tag: "Budget" },
  ],
  Mumbai: [
    { name: "The Taj Mahal Palace", area: "Colaba", price: 18800, rating: 4.8, tag: "Iconic" },
    { name: "The Oberoi Mumbai", area: "Nariman Point", price: 17100, rating: 4.7, tag: "Sea View" },
    { name: "Trident Nariman Point", area: "Marine Drive", price: 12100, rating: 4.5, tag: "Business" },
    { name: "Taj Lands End", area: "Bandra", price: 13400, rating: 4.6, tag: "Luxury" },
    { name: "JW Marriott", area: "Juhu", price: 15600, rating: 4.5, tag: "Beach" },
    { name: "Ibis Mumbai Airport", area: "Vile Parle", price: 5200, rating: 4.0, tag: "Airport" },
  ],
  Bangalore: [
    { name: "The Ritz-Carlton", area: "Ashok Nagar", price: 14500, rating: 4.7, tag: "Luxury" },
    { name: "JW Marriott Bengaluru", area: "Vittal Mallya Road", price: 13200, rating: 4.6, tag: "Central" },
    { name: "Taj West End", area: "Race Course Road", price: 15100, rating: 4.7, tag: "Heritage" },
    { name: "Conrad Bengaluru", area: "Ulsoor", price: 11800, rating: 4.5, tag: "Lake View" },
    { name: "Radisson Blu Atria", area: "Palace Road", price: 7300, rating: 4.2, tag: "Business" },
    { name: "Bloom Hotel", area: "Indiranagar", price: 4200, rating: 4.1, tag: "Budget" },
  ],
  Chennai: [
    { name: "ITC Grand Chola", area: "Guindy", price: 11900, rating: 4.6, tag: "Luxury" },
    { name: "Taj Coromandel", area: "Nungambakkam", price: 10500, rating: 4.5, tag: "Classic" },
    { name: "The Park Chennai", area: "Anna Salai", price: 6400, rating: 4.1, tag: "Central" },
    { name: "Hyatt Regency", area: "Teynampet", price: 7900, rating: 4.3, tag: "Business" },
    { name: "Radisson Blu", area: "Airport", price: 6800, rating: 4.2, tag: "Airport" },
    { name: "The Residency Towers", area: "T Nagar", price: 5600, rating: 4.2, tag: "Value" },
  ],
  Kolkata: [
    { name: "The Oberoi Grand", area: "Esplanade", price: 12400, rating: 4.7, tag: "Heritage" },
    { name: "ITC Royal Bengal", area: "EM Bypass", price: 11800, rating: 4.6, tag: "Luxury" },
    { name: "Taj Bengal", area: "Alipore", price: 10900, rating: 4.5, tag: "Premium" },
    { name: "Hyatt Regency", area: "Salt Lake", price: 7600, rating: 4.3, tag: "Business" },
    { name: "Novotel Kolkata", area: "New Town", price: 6100, rating: 4.2, tag: "Modern" },
    { name: "Fairfield by Marriott", area: "New Town", price: 5200, rating: 4.1, tag: "Value" },
  ],
  Goa: [
    { name: "Taj Exotica Resort", area: "Benaulim", price: 18200, rating: 4.7, tag: "Beach" },
    { name: "W Goa", area: "Vagator", price: 17600, rating: 4.5, tag: "Party" },
    { name: "The Leela Goa", area: "Cavelossim", price: 19400, rating: 4.8, tag: "Luxury" },
    { name: "Cidade de Goa", area: "Dona Paula", price: 9800, rating: 4.3, tag: "Family" },
    { name: "Novotel Goa Resort", area: "Candolim", price: 7600, rating: 4.2, tag: "Resort" },
    { name: "BloomSuites", area: "Calangute", price: 4300, rating: 4.0, tag: "Budget" },
  ],
  Jaipur: [
    { name: "Rambagh Palace", area: "Bhawani Singh Road", price: 28500, rating: 4.9, tag: "Palace" },
    { name: "Fairmont Jaipur", area: "Kukas", price: 13200, rating: 4.6, tag: "Luxury" },
    { name: "Hilton Jaipur", area: "Civil Lines", price: 7200, rating: 4.3, tag: "Business" },
    { name: "Samode Haveli", area: "Gangapole", price: 11800, rating: 4.5, tag: "Heritage" },
    { name: "Trident Jaipur", area: "Amer Road", price: 8400, rating: 4.4, tag: "Lake View" },
    { name: "Zostel Jaipur", area: "Pink City", price: 1800, rating: 4.1, tag: "Hostel" },
  ],
  Udaipur: [
    { name: "The Oberoi Udaivilas", area: "Lake Pichola", price: 36500, rating: 4.9, tag: "Palace" },
    { name: "Taj Lake Palace", area: "Lake Pichola", price: 34200, rating: 4.8, tag: "Iconic" },
    { name: "Trident Udaipur", area: "Haridasji Ki Magri", price: 12100, rating: 4.5, tag: "Family" },
    { name: "Fateh Prakash Palace", area: "City Palace", price: 16800, rating: 4.4, tag: "Heritage" },
    { name: "Radisson Blu Udaipur", area: "Fateh Sagar", price: 8700, rating: 4.2, tag: "Lake View" },
    { name: "Madri Haveli", area: "Old City", price: 4100, rating: 4.2, tag: "Boutique" },
  ],
};

export const flightsByCity = {
  Delhi: [
    { airline: "IndiGo", flightNo: "6E 604", from: "Mumbai", to: "Delhi", depart: "07:35", arrive: "09:45", price: 5200 },
    { airline: "Air India", flightNo: "AI 808", from: "Bangalore", to: "Delhi", depart: "10:20", arrive: "13:05", price: 6900 },
    { airline: "Vistara", flightNo: "UK 836", from: "Chennai", to: "Delhi", depart: "13:40", arrive: "16:35", price: 7300 },
    { airline: "Akasa Air", flightNo: "QP 1334", from: "Goa", to: "Delhi", depart: "17:10", arrive: "19:45", price: 6100 },
    { airline: "SpiceJet", flightNo: "SG 8721", from: "Jaipur", to: "Delhi", depart: "20:20", arrive: "21:20", price: 3400 },
  ],
  Mumbai: [
    { airline: "IndiGo", flightNo: "6E 521", from: "Delhi", to: "Mumbai", depart: "06:50", arrive: "09:05", price: 5500 },
    { airline: "Air India", flightNo: "AI 677", from: "Kolkata", to: "Mumbai", depart: "09:30", arrive: "12:25", price: 7600 },
    { airline: "Vistara", flightNo: "UK 858", from: "Bangalore", to: "Mumbai", depart: "12:15", arrive: "14:00", price: 4800 },
    { airline: "Akasa Air", flightNo: "QP 1522", from: "Goa", to: "Mumbai", depart: "16:45", arrive: "17:55", price: 3200 },
    { airline: "SpiceJet", flightNo: "SG 488", from: "Jaipur", to: "Mumbai", depart: "21:10", arrive: "23:00", price: 5100 },
  ],
  Bangalore: [
    { airline: "Akasa Air", flightNo: "QP 1356", from: "Delhi", to: "Bangalore", depart: "06:20", arrive: "09:05", price: 6700 },
    { airline: "IndiGo", flightNo: "6E 534", from: "Mumbai", to: "Bangalore", depart: "11:35", arrive: "13:15", price: 4300 },
    { airline: "Air India", flightNo: "AI 563", from: "Chennai", to: "Bangalore", depart: "14:45", arrive: "15:50", price: 2900 },
    { airline: "Vistara", flightNo: "UK 818", from: "Kolkata", to: "Bangalore", depart: "18:25", arrive: "21:05", price: 6200 },
    { airline: "IndiGo", flightNo: "6E 617", from: "Goa", to: "Bangalore", depart: "22:10", arrive: "23:25", price: 3500 },
  ],
  Chennai: [
    { airline: "Air India", flightNo: "AI 540", from: "Delhi", to: "Chennai", depart: "08:30", arrive: "11:20", price: 7100 },
    { airline: "IndiGo", flightNo: "6E 531", from: "Mumbai", to: "Chennai", depart: "12:10", arrive: "14:05", price: 5200 },
    { airline: "SpiceJet", flightNo: "SG 302", from: "Goa", to: "Chennai", depart: "15:55", arrive: "17:35", price: 4500 },
    { airline: "Vistara", flightNo: "UK 824", from: "Bangalore", to: "Chennai", depart: "19:10", arrive: "20:10", price: 2600 },
    { airline: "IndiGo", flightNo: "6E 987", from: "Kolkata", to: "Chennai", depart: "21:35", arrive: "00:05", price: 6100 },
  ],
  Kolkata: [
    { airline: "Vistara", flightNo: "UK 747", from: "Delhi", to: "Kolkata", depart: "07:45", arrive: "10:00", price: 5900 },
    { airline: "IndiGo", flightNo: "6E 512", from: "Mumbai", to: "Kolkata", depart: "11:15", arrive: "13:55", price: 6800 },
    { airline: "Air India Express", flightNo: "IX 774", from: "Bangalore", to: "Kolkata", depart: "15:40", arrive: "18:10", price: 5400 },
    { airline: "Air India", flightNo: "AI 786", from: "Chennai", to: "Kolkata", depart: "19:30", arrive: "21:45", price: 5700 },
    { airline: "SpiceJet", flightNo: "SG 692", from: "Jaipur", to: "Kolkata", depart: "22:20", arrive: "00:45", price: 6200 },
  ],
  Goa: [
    { airline: "IndiGo", flightNo: "6E 2164", from: "Delhi", to: "Goa", depart: "09:45", arrive: "12:25", price: 7900 },
    { airline: "Air India", flightNo: "AI 684", from: "Mumbai", to: "Goa", depart: "13:20", arrive: "14:35", price: 3900 },
    { airline: "Akasa Air", flightNo: "QP 1372", from: "Bangalore", to: "Goa", depart: "16:30", arrive: "17:45", price: 3600 },
    { airline: "Vistara", flightNo: "UK 881", from: "Delhi", to: "Goa", depart: "18:05", arrive: "20:45", price: 8200 },
    { airline: "SpiceJet", flightNo: "SG 454", from: "Chennai", to: "Goa", depart: "21:15", arrive: "23:00", price: 4700 },
  ],
  Jaipur: [
    { airline: "IndiGo", flightNo: "6E 740", from: "Delhi", to: "Jaipur", depart: "08:10", arrive: "09:05", price: 3100 },
    { airline: "Air India", flightNo: "AI 611", from: "Mumbai", to: "Jaipur", depart: "10:50", arrive: "12:40", price: 5200 },
    { airline: "Vistara", flightNo: "UK 563", from: "Bangalore", to: "Jaipur", depart: "14:30", arrive: "17:05", price: 6600 },
    { airline: "SpiceJet", flightNo: "SG 297", from: "Kolkata", to: "Jaipur", depart: "18:45", arrive: "21:10", price: 6100 },
    { airline: "Akasa Air", flightNo: "QP 1490", from: "Goa", to: "Jaipur", depart: "22:00", arrive: "00:15", price: 5900 },
  ],
  Udaipur: [
    { airline: "IndiGo", flightNo: "6E 2103", from: "Delhi", to: "Udaipur", depart: "07:20", arrive: "08:45", price: 4300 },
    { airline: "Vistara", flightNo: "UK 627", from: "Mumbai", to: "Udaipur", depart: "11:00", arrive: "12:35", price: 4900 },
    { airline: "Air India", flightNo: "AI 469", from: "Delhi", to: "Udaipur", depart: "14:05", arrive: "15:30", price: 5100 },
    { airline: "IndiGo", flightNo: "6E 6721", from: "Bangalore", to: "Udaipur", depart: "17:20", arrive: "19:45", price: 7200 },
    { airline: "SpiceJet", flightNo: "SG 341", from: "Jaipur", to: "Udaipur", depart: "20:55", arrive: "21:55", price: 2800 },
  ],
};

export const getCityName = (value, fallback = "Delhi") => {
  const cleanValue = value?.trim().toLowerCase();
  const city = cities.find((item) => item.name.toLowerCase() === cleanValue);
  return city?.name || fallback;
};

export const getCityImage = (value) => {
  const cityName = getCityName(value);
  return cities.find((city) => city.name === cityName)?.image || cities[0].image;
};
