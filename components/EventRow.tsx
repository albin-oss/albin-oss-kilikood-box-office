'use client'

import Link from 'next/link'

interface Event {
  id: number
  title: string
  image: string
  price: number
  date: string
  venue: string
}

interface EventRowProps {
  title: string
  events: Event[]
}

export default function EventRow({ title, events }: EventRowProps) {
  return (
    <div className="mb-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-8 text-white">{title}</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-dark-black-light">
                <div className="aspect-[2/3] relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-2">
                  <h3 className="text-xs font-semibold mb-1 text-white group-hover:text-primary-yellow transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="space-y-0.5 text-[10px] text-gray-400">
                    <p className="flex items-center">
                      <span className="font-semibold text-primary-yellow text-xs">${event.price}</span>
                      <span className="mx-1">•</span>
                      <span className="truncate">{event.date}</span>
                    </p>
                    <p className="text-gray-500 text-[10px] truncate">{event.venue}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}