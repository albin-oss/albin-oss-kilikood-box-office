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
    <div className="mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-white">{title}</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group cursor-pointer h-full"
            >
              <div className="relative overflow-hidden rounded-lg bg-dark-black-light flex flex-col h-full">
                <div className="aspect-[4/5] relative overflow-hidden flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="text-sm md:text-base font-semibold mb-2 text-white group-hover:text-primary-yellow transition-colors line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
                    {event.title}
                  </h3>
                  <div className="space-y-1 text-xs text-gray-400 mt-auto">
                    <p className="flex items-center">
                      <span className="font-semibold text-primary-yellow text-sm">${event.price}</span>
                      <span className="mx-1.5">•</span>
                      <span className="truncate">{event.date}</span>
                    </p>
                    <p className="text-gray-500 text-xs truncate">{event.venue}</p>
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