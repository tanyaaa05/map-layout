import { MapPin, Star } from "lucide-react"

interface LocationCardProps {
  location: {
    displayName: string
    address: string
  }
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{location.displayName}</h2>

      <div className="flex items-start gap-3 mb-4">
        <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
        <p className="text-gray-700 leading-relaxed">{location.address}</p>
      </div>

      {/* Rating Section */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span>4.8 (1,200 reviews)</span>
      </div>
    </div>
  )
}
