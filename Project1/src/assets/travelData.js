const travelData = {
  hotels: {
    Delhi: [
      { name: "Taj Palace", price: 5000, rating: 4.5 },
      { name: "The Leela", price: 6500, rating: 4.7 },
      { name: "ITC Maurya", price: 7000, rating: 4.8 },
    ],

    Mumbai: [
      { name: "The Oberoi", price: 8000, rating: 4.9 },
      { name: "Trident", price: 6500, rating: 4.6 },
      { name: "Taj Lands End", price: 7500, rating: 4.7 },
    ],

    Bangalore: [
      { name: "JW Marriott", price: 7200, rating: 4.8 },
      { name: "The Ritz", price: 6800, rating: 4.7 },
      { name: "Radisson Blu", price: 5500, rating: 4.5 },
    ],

    Chennai: [
      { name: "ITC Grand", price: 4800, rating: 4.5 },
      { name: "Taj Club House", price: 5200, rating: 4.6 },
      { name: "The Residency", price: 4300, rating: 4.4 },
    ],

    Kolkata: [
      { name: "Hyatt Regency", price: 5600, rating: 4.6 },
      { name: "The Lalit", price: 6100, rating: 4.7 },
      { name: "Novotel", price: 4500, rating: 4.5 },
    ],

    Hyderabad: [
      { name: "Taj Krishna", price: 7000, rating: 4.8 },
      { name: "Park Hyatt", price: 8500, rating: 4.9 },
      { name: "Marigold Hotel", price: 4500, rating: 4.4 },
    ],

    Pune: [
      { name: "Conrad Pune", price: 6000, rating: 4.7 },
      { name: "Sheraton", price: 5500, rating: 4.6 },
      { name: "Lemon Tree", price: 3500, rating: 4.3 },
    ],

    Goa: [
      { name: "W Goa", price: 9000, rating: 4.9 },
      { name: "Taj Exotica", price: 8500, rating: 4.8 },
      { name: "Cidade De Goa", price: 6000, rating: 4.5 },
    ],

    Jaipur: [
      { name: "Rambagh Palace", price: 9500, rating: 4.9 },
      { name: "Hilton Jaipur", price: 5000, rating: 4.5 },
      { name: "Fairmont", price: 8500, rating: 4.8 },
    ],

    Ahmedabad: [
      { name: "Hyatt Ahmedabad", price: 5000, rating: 4.5 },
      { name: "Novotel", price: 4500, rating: 4.4 },
      { name: "Lemon Tree", price: 3200, rating: 4.2 },
    ],

    Kochi: [
      { name: "Grand Hyatt", price: 7000, rating: 4.8 },
      { name: "Le Meridien", price: 5000, rating: 4.5 },
      { name: "Holiday Inn", price: 4200, rating: 4.3 },
    ],

    Chandigarh: [
      { name: "JW Marriott", price: 6500, rating: 4.7 },
      { name: "Hyatt Regency", price: 5500, rating: 4.6 },
      { name: "Hotel Mountview", price: 3000, rating: 4.1 },
    ],

    Lucknow: [
      { name: "Renaissance", price: 5200, rating: 4.5 },
      { name: "Novotel", price: 4800, rating: 4.4 },
      { name: "Clarks Avadh", price: 3500, rating: 4.2 },
    ],

    Srinagar: [
      { name: "Vivanta Dal View", price: 8500, rating: 4.8 },
      { name: "Radisson Srinagar", price: 6000, rating: 4.5 },
      { name: "Houseboat Heaven", price: 4000, rating: 4.3 },
    ],

    Udaipur: [
      { name: "The Oberoi Udaivilas", price: 12000, rating: 5.0 },
      { name: "Taj Lake Palace", price: 11000, rating: 4.9 },
      { name: "Trident Udaipur", price: 6500, rating: 4.6 },
    ],

    Amritsar: [
      { name: "Hyatt Regency", price: 5500, rating: 4.5 },
      { name: "Ramada", price: 4000, rating: 4.3 },
      { name: "Golden Tulip", price: 3500, rating: 4.1 },
    ],
  },

  flights: {
    Delhi: [
      {
        airline: "IndiGo",
        from: "Mumbai",
        to: "Delhi",
        time: "10:30 AM",
        price: 4500,
      },
      {
        airline: "Air India",
        from: "Bangalore",
        to: "Delhi",
        time: "2:00 PM",
        price: 6200,
      },
      {
        airline: "Vistara",
        from: "Goa",
        to: "Delhi",
        time: "7:15 PM",
        price: 5800,
      },
    ],

    Mumbai: [
      {
        airline: "Vistara",
        from: "Delhi",
        to: "Mumbai",
        time: "9:00 AM",
        price: 5500,
      },
      {
        airline: "IndiGo",
        from: "Goa",
        to: "Mumbai",
        time: "5:30 PM",
        price: 4000,
      },
      {
        airline: "Air India",
        from: "Hyderabad",
        to: "Mumbai",
        time: "11:45 PM",
        price: 4900,
      },
    ],

    Bangalore: [
      {
        airline: "Akasa Air",
        from: "Delhi",
        to: "Bangalore",
        time: "11:30 AM",
        price: 5500,
      },
      {
        airline: "Vistara",
        from: "Mumbai",
        to: "Bangalore",
        time: "4:15 PM",
        price: 4700,
      },
      {
        airline: "IndiGo",
        from: "Pune",
        to: "Bangalore",
        time: "9:45 PM",
        price: 3900,
      },
    ],

    Chennai: [
      {
        airline: "Air India",
        from: "Delhi",
        to: "Chennai",
        time: "8:30 AM",
        price: 6000,
      },
      {
        airline: "IndiGo",
        from: "Mumbai",
        to: "Chennai",
        time: "12:10 PM",
        price: 5100,
      },
      {
        airline: "SpiceJet",
        from: "Kochi",
        to: "Chennai",
        time: "5:30 PM",
        price: 3400,
      },
    ],

    Kolkata: [
      {
        airline: "Vistara",
        from: "Delhi",
        to: "Kolkata",
        time: "7:45 AM",
        price: 5300,
      },
      {
        airline: "IndiGo",
        from: "Mumbai",
        to: "Kolkata",
        time: "1:50 PM",
        price: 6200,
      },
      {
        airline: "AirAsia",
        from: "Bangalore",
        to: "Kolkata",
        time: "8:20 PM",
        price: 4700,
      },
    ],

    Hyderabad: [
      {
        airline: "Air India",
        from: "Delhi",
        to: "Hyderabad",
        time: "10:00 AM",
        price: 5600,
      },
      {
        airline: "IndiGo",
        from: "Mumbai",
        to: "Hyderabad",
        time: "3:30 PM",
        price: 4100,
      },
      {
        airline: "Vistara",
        from: "Chennai",
        to: "Hyderabad",
        time: "9:15 PM",
        price: 3800,
      },
    ],

    Goa: [
      {
        airline: "Air India",
        from: "Delhi",
        to: "Goa",
        time: "11:00 AM",
        price: 7200,
      },
      {
        airline: "SpiceJet",
        from: "Mumbai",
        to: "Goa",
        time: "4:15 PM",
        price: 3800,
      },
      {
        airline: "IndiGo",
        from: "Bangalore",
        to: "Goa",
        time: "7:00 PM",
        price: 4500,
      },
    ],
  },
};

export default travelData;
