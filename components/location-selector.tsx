"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Location {
  id: string
  name: string
  displayName: string
}

interface LocationSelectorProps {
  locations: Location[]
  selectedLocation: string
  onLocationChange: (locationId: string) => void
}

export default function LocationSelector({ locations, selectedLocation, onLocationChange }: LocationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selected = locations.find((loc) => loc.id === selectedLocation)

  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          {/* Location Tab */}
          <div className="bg-slate-800 text-white px-6 py-3 font-medium">Location</div>

          {/* Dropdown */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between px-6 py-3 bg-white text-gray-700 hover:bg-gray-50 min-w-[150px]"
          >
            <span>{selected?.name || "Select Location"}</span>
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => {
                  onLocationChange(location.id)
                  setIsOpen(false)
                }}
                className="w-full text-left px-6 py-3 hover:bg-gray-50 text-gray-700 first:rounded-t-lg last:rounded-b-lg"
              >
                {location.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
