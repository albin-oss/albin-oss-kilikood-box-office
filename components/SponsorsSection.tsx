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

  return (
    <div className="mt-16 pt-12 border-t border-primary-yellow/20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Event Sponsors
      </h2>
      <div className="space-y-12">
        {Object.entries(sponsorsByCategory).map(([category, categorySponsors]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-primary-yellow mb-6 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categorySponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-dark-black-light rounded-lg p-4 border border-primary-yellow/20 hover:border-primary-yellow/40 transition-all group"
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg mb-3 bg-dark-black">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="text-white font-semibold text-center text-sm">
                    {sponsor.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

