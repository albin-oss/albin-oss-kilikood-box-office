import Header from '@/components/Header'
import Hero from '@/components/Hero'
import EventRow from '@/components/EventRow'
import Advertisement from '@/components/Advertisement'
import Footer from '@/components/Footer'

export default function Home() {
  const eventCategories = [
    {
      title: 'Popular Events',
      events: [
        {
          id: 1,
          title: 'Winter Bells Christmas Show',
          image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=450&fit=crop&q=80&auto=format',
          price: 35,
          date: '2024-12-27',
          venue: 'Chinese Cultural Centre',
        },
        {
          id: 2,
          title: 'Vineeth Srinivasan Live',
          image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=450&fit=crop&q=80&auto=format',
          price: 45,
          date: '2024-06-19',
          venue: 'Niagara Falls',
        },
        {
          id: 3,
          title: 'London Vibez',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=450&fit=crop&q=80&auto=format',
          price: 15,
          date: '2024-02-09',
          venue: 'Maple Sports & Rec',
        },
        {
          id: 4,
          title: 'Kunthalippu DJ Night',
          image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=450&fit=crop&q=80&auto=format',
          price: 40,
          date: '2024-12-31',
          venue: 'Guelph Estate',
        },
        {
          id: 5,
          title: 'New Year Carnival',
          image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=450&fit=crop&q=80&auto=format',
          price: 25,
          date: '2024-12-31',
          venue: 'Twilight Restaurant',
        },
        {
          id: 6,
          title: 'Saatwika Sandya',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=450&fit=crop&q=80&auto=format',
          price: 30,
          date: '2025-01-10',
          venue: 'Pia Bouman School',
        },
        {
          id: 15,
          title: 'Summer Music Fest',
          image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=450&fit=crop&q=80&auto=format',
          price: 50,
          date: '2024-07-15',
          venue: 'Outdoor Amphitheater',
        },
        {
          id: 16,
          title: 'Bollywood Night',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=450&fit=crop&q=80&auto=format',
          price: 35,
          date: '2024-08-20',
          venue: 'Grand Ballroom',
        },
        {
          id: 17,
          title: 'Classical Dance Show',
          image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=450&fit=crop&q=80&auto=format',
          price: 28,
          date: '2024-09-10',
          venue: 'Cultural Center',
        },
        {
          id: 18,
          title: 'Comedy Night Special',
          image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=450&fit=crop&q=80&auto=format',
          price: 22,
          date: '2024-10-05',
          venue: 'Comedy Club',
        },
        {
          id: 19,
          title: 'Folk Music Concert',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=450&fit=crop&q=80&auto=format',
          price: 32,
          date: '2024-11-15',
          venue: 'Heritage Hall',
        },
        {
          id: 20,
          title: 'Kids Talent Show',
          image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=450&fit=crop&q=80&auto=format',
          price: 15,
          date: '2024-12-10',
          venue: 'Community Center',
        },
      ],
    },
    {
      title: 'Coming Soon',
      events: [
        {
          id: 7,
          title: 'Christmas & New Year',
          image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=300&h=450&fit=crop&q=80&auto=format',
          price: 20,
          date: '2024-12-27',
          venue: 'Saskatoon',
        },
        {
          id: 8,
          title: 'Merry & Bright Feast',
          image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=300&h=450&fit=crop&q=80&auto=format',
          price: 25,
          date: '2025-01-03',
          venue: 'New Minas',
        },
        {
          id: 9,
          title: 'Rock Tale Live',
          image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=300&h=450&fit=crop&q=80&auto=format',
          price: 30,
          date: '2024-12-26',
          venue: 'Fraserview Banquet',
        },
        {
          id: 10,
          title: 'Chotta Mumbai',
          image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=450&fit=crop&q=80&auto=format',
          price: 35,
          date: '2024-12-28',
          venue: 'VibeCity',
        },
        {
          id: 21,
          title: 'Spring Festival',
          image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=300&h=450&fit=crop&q=80&auto=format',
          price: 30,
          date: '2025-03-20',
          venue: 'Park Pavilion',
        },
        {
          id: 22,
          title: 'Jazz & Blues Night',
          image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=300&h=450&fit=crop&q=80&auto=format',
          price: 40,
          date: '2025-04-12',
          venue: 'Jazz Lounge',
        },
        {
          id: 23,
          title: 'Fusion Music Event',
          image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=300&h=450&fit=crop&q=80&auto=format',
          price: 38,
          date: '2025-05-18',
          venue: 'Concert Hall',
        },
        {
          id: 24,
          title: 'Dance Championship',
          image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=450&fit=crop&q=80&auto=format',
          price: 45,
          date: '2025-06-25',
          venue: 'Sports Arena',
        },
      ],
    },
    {
      title: 'Trending Now',
      events: [
        {
          id: 11,
          title: 'Mallu DJ Party',
          image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=450&fit=crop&q=80&auto=format',
          price: 30,
          date: '2024-12-31',
          venue: 'Scarborough',
        },
        {
          id: 12,
          title: 'XMAS Celebration',
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop&q=80&auto=format',
          price: 20,
          date: '2024-12-27',
          venue: 'Edmonton',
        },
        {
          id: 13,
          title: 'Cultural Night',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop&q=80&auto=format',
          price: 25,
          date: '2025-01-05',
          venue: 'Community Hall',
        },
        {
          id: 14,
          title: 'Live Concert',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=450&fit=crop&q=80&auto=format',
          price: 40,
          date: '2025-01-15',
          venue: 'Convention Center',
        },
        {
          id: 25,
          title: 'Holi Celebration',
          image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=450&fit=crop&q=80&auto=format',
          price: 25,
          date: '2025-03-14',
          venue: 'Community Park',
        },
        {
          id: 26,
          title: 'Karaoke Championship',
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop&q=80&auto=format',
          price: 20,
          date: '2025-02-22',
          venue: 'Music Studio',
        },
        {
          id: 27,
          title: 'Theater Production',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop&q=80&auto=format',
          price: 35,
          date: '2025-03-08',
          venue: 'Theater Hall',
        },
        {
          id: 28,
          title: 'Food & Music Fest',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=450&fit=crop&q=80&auto=format',
          price: 30,
          date: '2025-04-20',
          venue: 'Festival Grounds',
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-dark-black">
      <Header />
      <Hero />
      <div className="relative z-10 -mt-32 pt-16">
        {eventCategories.map((category, index) => (
          <div key={index} className={index === 0 ? 'mt-16' : ''}>
            <EventRow
              title={category.title}
              events={category.events}
            />
            {index === 0 && <Advertisement />}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  )
}

