"use client";

import React, { useEffect, useRef } from 'react';

// Function to load Google Maps API
const loadGoogleMapsApi = (apiKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps API failed to load'));

    document.head.appendChild(script);
  });
};

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        // Load Google Maps API with your key
        await loadGoogleMapsApi('AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries'); 

        if (mapRef.current && window.google) {
          // Initialize the map with a zoom level and centered at India
          const map = new window.google.maps.Map(mapRef.current, {
            zoom: 2,
            center: { lat: 20.5937, lng: 78.9629 },
          });

          // Locations to be marked on the map
          const locations = [
            { lat: 29.7604, lng: -95.3698, title: 'USA - Houston, Texas' },
            { lat: 4.710989, lng: -74.0721, title: 'Colombia - Bogotá' },
            { lat: 19.2183, lng: 72.9781, title: 'India - Maharashtra, Thane' },
          ];

          // Add a marker for each location
          locations.forEach((location) => {
            new window.google.maps.Marker({
              position: { lat: location.lat, lng: location.lng },
              map: map,
              title: location.title,
            });
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Initialize the map when component mounts
    initializeMap();
  }, []);

  // Render the map container with a smaller size
  return (
    <div
      ref={mapRef}
      style={{ height: '60vh', width: '100%' }} // Adjust the size as needed
    />
  );
};

export default MapComponent;
