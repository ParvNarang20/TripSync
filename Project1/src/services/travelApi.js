import { flightsByCity, getCityName, hotelsByCity } from "../data/travelData";

const apiBaseUrl = import.meta.env.VITE_TRAVEL_API_URL;

async function fetchFromApi(path, params) {
  if (!apiBaseUrl) return null;

  const url = new URL(path, apiBaseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function getHotels(city) {
  const cityName = getCityName(city);
  const localHotels = hotelsByCity[cityName] || [];

  try {
    const apiHotels = await fetchFromApi("/hotels", { city: cityName });
    return apiHotels?.hotels || localHotels;
  } catch (error) {
    console.warn(error);
    return localHotels;
  }
}

export async function getFlights({ from, to }) {
  const cityName = getCityName(to);
  const localFlights = flightsByCity[cityName] || [];

  try {
    const apiFlights = await fetchFromApi("/flights", { from, to: cityName });
    if (apiFlights?.flights) return apiFlights.flights;
  } catch (error) {
    console.warn(error);
  }

  if (!from) return localFlights;

  const fromText = from.trim().toLowerCase();
  const matchingFlights = localFlights.filter((flight) =>
    flight.from.toLowerCase().includes(fromText),
  );

  return matchingFlights.length ? matchingFlights : localFlights;
}
