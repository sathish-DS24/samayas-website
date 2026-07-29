import React from 'react'
import { motion } from 'framer-motion'
import { Bus, TrainFront, Plane, MapPin, ArrowRight } from 'lucide-react'

const hubConfig = {
  busStands: {
    icon: Bus,
    title: 'Bus Stands',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    accent: 'border-green-200',
  },
  railwayStations: {
    icon: TrainFront,
    title: 'Railway Stations',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    accent: 'border-blue-200',
  },
  airports: {
    icon: Plane,
    title: 'Airport Connectivity',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    accent: 'border-purple-200',
  },
}

const TransportHubs = ({ districtName, transportHubs }) => {
  if (!transportHubs) return null

  const hubTypes = Object.keys(hubConfig).filter(
    (key) => transportHubs[key] && transportHubs[key].length > 0
  )

  if (hubTypes.length === 0) return null

  return (
    <section className="py-14 lg:py-16" aria-labelledby="transport-hubs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <TrainFront className="w-5 h-5 text-primary-600" />
            </div>
            <h2 id="transport-hubs-heading" className="text-2xl sm:text-3xl font-bold text-primary-900">
              Transport Hubs in {districtName}
            </h2>
          </div>
          <p className="text-gray-600 mb-8 ml-[52px]">
            SAMAYAS provides taxi pickup and drop at all major bus stands, railway stations, and airports in {districtName}.
          </p>
        </motion.div>

        <div className={`grid gap-6 ${hubTypes.length >= 3 ? 'md:grid-cols-3' : hubTypes.length === 2 ? 'md:grid-cols-2' : 'max-w-lg'}`}>
          {hubTypes.map((hubType, typeIndex) => {
            const config = hubConfig[hubType]
            const hubs = transportHubs[hubType]
            const Icon = config.icon

            return (
              <motion.div
                key={hubType}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: typeIndex * 0.1 }}
                className={`bg-white rounded-xl border ${config.accent} shadow-sm overflow-hidden`}
              >
                <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-100 flex items-center gap-2.5">
                  <div className={`w-8 h-8 ${config.color} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${config.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-primary-900 text-sm">{config.title}</h3>
                </div>

                <div className="p-4 space-y-3">
                  {hubs.map((hub, i) => (
                    <div key={hub.name} className="space-y-1">
                      <p className="font-medium text-gray-800 text-sm">
                        {hub.name}
                        {hub.code && (
                          <span className="ml-1.5 text-xs font-mono bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                            {hub.code}
                          </span>
                        )}
                      </p>
                      {hub.address && (
                        <p className="text-xs text-gray-500 flex items-start gap-1">
                          <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          {hub.address}
                        </p>
                      )}
                      {hub.distanceKm && (
                        <p className="text-xs text-gray-500">
                          {hub.distanceKm} km from city center
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="px-4 pb-4">
                  <a
                    href="#booking-form"
                    className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
                  >
                    Book Taxi Pickup
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TransportHubs
