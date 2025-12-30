'use client'

interface Sponsor {
  id: string
  category: string
  name: string
  image: string
}

interface SponsorsSectionProps {
  sponsors: Sponsor[]
}

export default function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  if (sponsors.length === 0) return null

  // Group sponsors by category
  const sponsorsByCategory = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.category]) {
      acc[sponsor.category] = []
    }
    acc[sponsor.category].push(sponsor)
    return acc
  }, {} as Record<string, Sponsor[]>)

  // Define category order and colors
  const categoryOrder = ['Platinum Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor', 'Media Partner', 'Community Partner', 'Venue Partner', 'Presented By']
  const categoryColors: Record<string, string> = {
    'Platinum Sponsor': 'from-gray-400 to-gray-600',
    'Gold Sponsor': 'from-yellow-400 to-yellow-600',
    'Silver Sponsor': 'from-gray-300 to-gray-500',
    'Bronze Sponsor': 'from-orange-400 to-orange-600',
    'Media Partner': 'from-blue-400 to-blue-600',
    'Community Partner': 'from-green-400 to-green-600',
    'Venue Partner': 'from-purple-400 to-purple-600',
    'Presented By': 'from-primary-yellow to-primary-yellow-dark',
  }

  const sortedCategories = Object.keys(sponsorsByCategory).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a)
    const indexB = categoryOrder.indexOf(b)
    if (indexA === -1 && indexB === -1) return 0
    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })

  return (
    <div className="mt-16 pt-12 border-t border-primary-yellow/20">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        Our Esteemed Sponsors
      </h2>
      <p className="text-gray-400 text-center mb-12">
        We thank our sponsors for their generous support
      </p>
      <div className="space-y-12">
        {sortedCategories.map((category) => {
          const categorySponsors = sponsorsByCategory[category]
          const categoryColor = categoryColors[category] || 'from-primary-yellow to-primary-yellow-dark'
          
          return (
            <div key={category}>
              <div className="flex items-center justify-center mb-8">
                <div className={`bg-gradient-to-r ${categoryColor} text-black px-6 py-2 rounded-full font-bold text-lg shadow-lg`}>
                  {category}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {categorySponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="bg-dark-black-light rounded-xl p-6 border-2 border-primary-yellow/20 hover:border-primary-yellow/60 transition-all group shadow-lg hover:shadow-primary-yellow/20"
                  >
                    <div className="aspect-square relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-dark-black to-dark-black-light border border-gray-700">
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-full h-full object-cover p-3 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-white font-semibold text-center text-sm group-hover:text-primary-yellow transition-colors">
                      {sponsor.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

