import React from 'react'
import { MapPin, Clock, Tag, ShieldCheck, CheckCircle, Home } from 'lucide-react'

const RouteSummaryCards = ({ content }) => {
  const actualDistance = parseInt(content.distanceKm) || parseInt(content.distanceDisplay) || 0
  const isShortRoute = actualDistance > 0 && actualDistance < 130
  const billableKm = isShortRoute ? 130 : actualDistance
  const baseFare = billableKm * 15
  const startingTotalFare = baseFare + 400

  const cards = [
    {
      title: 'Distance',
      value: content.distanceDisplay,
      subtitle: `Direct highway route from ${content.from}`,
      icon: MapPin,
      color: 'text-amber-400',
    },
    {
      title: 'Travel Time',
      value: content.durationDisplay,
      subtitle: 'Average driving duration via expressway',
      icon: Clock,
      color: 'text-blue-400',
    },
    {
      title: 'Starting Fare',
      value: `₹${startingTotalFare.toLocaleString('en-IN')}`,
      subtitle: `₹${baseFare.toLocaleString('en-IN')} Base + ₹400 Driver Bata Included. Zero return fee`,
      icon: Tag,
      color: 'text-green-400',
    },
    {
      title: '24/7 Availability',
      value: 'Round the Clock',
      subtitle: 'Train & flight synchronized pickups',
      icon: ShieldCheck,
      color: 'text-purple-400',
    },
    {
      title: 'One-Way Only',
      value: 'Zero Return Fare',
      subtitle: 'Pay strictly for one direction traveled',
      icon: CheckCircle,
      color: 'text-emerald-400',
    },
    {
      title: 'Doorstep Pickup',
      value: 'Home & Hotel',
      subtitle: `Pickups across all areas in ${content.from}`,
      icon: Home,
      color: 'text-yellow-400',
    },
  ]

  return (
    <section className="py-12 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Key Features of <span className="text-amber-400">{content.from} to {content.to}</span> One-Way Cabs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div
                key={idx}
                className="bg-dark-800/70 border border-dark-700 hover:border-amber-500/40 p-6 rounded-2xl transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center ${card.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium block uppercase tracking-wider">{card.title}</span>
                    <span className="text-xl font-extrabold text-white">{card.value}</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-400 border-t border-dark-700/60 pt-3">
                  {card.subtitle}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RouteSummaryCards
