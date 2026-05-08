# TripSync — Smart Travel Booking Platform

TripSync is a React-based travel booking web application that helps users search and explore flights and hotels from a single platform. The project is designed with a simple and user-friendly interface so travellers can easily manage their trip planning experience without switching between multiple websites.

The application focuses on beginner-friendly React concepts while creating a practical real-world travel project.

---

# Features

## ✈️ Flight Booking

* Search flights by destination city
* Display airline name, departure timing, and ticket price
* Dynamic flight cards using React rendering
* Easy-to-use search functionality

## 🏨 Hotel Booking

* Search hotels based on city
* Display hotel details and pricing
* Responsive hotel listing cards
* Simple booking interface

## 🗺️ Map Integration

* Basic map section for better travel experience
* Helps users visualise destinations

## 🔐 Authentication Pages

* Login page
* Signup page
* Clean and beginner-friendly form UI

## 📱 Responsive User Interface

* Mobile-friendly layout
* Clean navigation bar
* Card-based modern UI design

---

# Tech Stack

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| React.js         | Frontend library                  |
| JavaScript       | Application logic                 |
| CSS              | Styling and responsive design     |
| React Router DOM | Navigation between pages          |
| Vite             | Development server and build tool |

---

# React Concepts Used

* useState
* useEffect
* Components
* Props
* Event Handling
* Conditional Rendering
* Dynamic Rendering
* Array Methods (`map`, `filter`)
* React Router
* Form Handling

---

# Project Structure

```bash
TripSync/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── component/
│   │   ├── Navbar.jsx
│   │   ├── Map.jsx
│   │   └── Result.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Flights.jsx
│   │   ├── Hotels.jsx
│   │   ├── About.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Installation and Setup

## Prerequisites

* Node.js
* npm

## Steps

```bash
# Clone the repository
git clone https://github.com/your-username/TripSync.git

# Open project folder
cd TripSync

# Install dependencies
npm install

# Start development server
npm run dev
```

Open browser at:

```bash
http://localhost:5173
```

---

# Application Pages

| Page    | Description                          |
| ------- | ------------------------------------ |
| Home    | Landing page with travel information |
| Flights | Flight search and booking section    |
| Hotels  | Hotel search and booking section     |
| About   | Information about the project        |
| Login   | User login form                      |
| Signup  | User registration form               |

---

# Future Improvements

* Real travel API integration
* Online booking system
* Payment gateway integration
* User booking history
* Wishlist feature
* Dark mode support
* Better destination filtering

---

# Conclusion

TripSync is a simple and beginner-friendly travel booking application developed using React. The project combines flights and hotel booking functionality into one platform while demonstrating important React concepts like components, state management, routing, dynamic rendering, and form handling.
