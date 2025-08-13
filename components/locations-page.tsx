import LocationSelector from "./location-selector"
import LocationCard from "./location-card"
import GoogleMapEmbed from "./google-map-embed"
import Footer from "./footer"

const locations = [
  {
    id: "bangalore",
    name: "Bangalore",
    displayName: "Bengaluru",
    address: "49, 1st Cross, 27th Main, Behind Tata Motors, 1st Stage, BTM Layout, Bengaluru, Karnataka - 560068",
    coordinates: { lat: 12.9141, lng: 77.6101 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8267!2d77.6101!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzUwLjgiTiA3N8KwMzYnMzYuNCJF!5e0!3m2!1sen!2sin!4v1692000000000!5m2!1sen!2sin",
  },
]

export default function LocationsPage() {
  const currentLocation = locations[0] // Default to Bangalore

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Our Locations</h1>

          <LocationSelector
            locations={locations}
            selectedLocation={currentLocation.id}
            onLocationChange={(locationId) => {
              // Handle location change - in a real app this would update state
              console.log("Selected location:", locationId)
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location Details - takes 1/3 of space */}
          <div className="lg:col-span-1">
            <LocationCard location={currentLocation} />
          </div>

          {/* Google Maps - takes 2/3 of space */}
          <div className="lg:col-span-2">
            <GoogleMapEmbed mapUrl={currentLocation.mapUrl} locationName={currentLocation.displayName} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
