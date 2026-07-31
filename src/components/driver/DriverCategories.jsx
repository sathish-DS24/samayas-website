import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, ShieldCheck, Heart, Award, Building2, Moon, Sparkles, ChevronRight, UserCheck } from 'lucide-react'

const CATEGORY_ITEMS = [
  { slug: 'hourly-driver', name: 'Hourly Acting Driver', desc: 'Short 2 to 4 hour local errands, shopping & hospital visits in your car.', icon: Clock, rate: 'From ₹350' },
  { slug: 'outstation-driver', name: 'Outstation Highway Driver', desc: 'Long-distance intercity trips & mountain ghat road travel across South India.', icon: ShieldCheck, rate: '₹900 / Day Bata' },
  { slug: 'night-driver', name: 'Late Night Party Driver', desc: 'Designated 24/7 night driver for safe return after evening events & pub outings.', icon: Moon, rate: 'From ₹450' },
  { slug: 'wedding-driver', name: 'Wedding & Marriage Driver', desc: 'Uniformed chauffeurs for decorated marriage cars, VIPs & guest shuttles.', icon: Sparkles, rate: 'From ₹1,200' },
  { slug: 'corporate-driver', name: 'Corporate Chauffeur', desc: 'Refined executive drivers for CEO commuting & corporate client mobility.', icon: Building2, rate: 'From ₹1,400' },
  { slug: 'personal-chauffeur', name: 'Dedicated Personal Chauffeur', desc: 'Private assigned driver for daily family commute & household car maintenance.', icon: UserCheck, rate: 'From ₹1,100' },
  { slug: 'driver-for-senior-citizens', name: 'Senior Citizen Driver', desc: 'Patient, gentle driver with door-to-door arm support & wheelchair loading.', icon: Heart, rate: 'From ₹400' },
  { slug: 'designated-driver', name: 'Designated Event Driver', desc: 'Safe return designated driver for club parties & late night functions.', icon: Award, rate: 'From ₹450' }
]

const DriverCategories = ({ categories = [], districtName = '' }) => {
  const displayItems = categories && categories.length > 0 ? categories : CATEGORY_ITEMS

  return (
    <section className="py-12 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Driver Categories & Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Acting Driver Packages in <span className="text-amber-400">{districtName || 'Tamil Nadu'}</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Select the perfect driver category tailored for your local city commuting, outstation highway trips, or special events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((cat, idx) => {
            const Icon = cat.icon || Clock
            const slug = cat.slug || 'hourly-driver'
            return (
              <Link
                key={idx}
                to={`/acting-driver/${slug}`}
                className="bg-dark-900/90 border border-dark-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-lg">
                      {cat.rate}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-dark-800 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>View Package Details</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default DriverCategories
