import React from 'react'
import { Car, Users, CheckCircle, Info } from 'lucide-react'

const TaxiFareTable = ({ content }) => {
  const fareData = [
    {
      vehicle: 'Hatchback',
      models: 'WagonR, Swift, Indica',
      seats: 4,
      fare: content.fare?.hatchback,
      perKm: '₹15 / km',
      idealFor: 'Solo travelers, couples & quick budget trips',
    },
    {
      vehicle: 'Sedan',
      models: 'Swift Dzire, Hyundai Aura, Etios',
      seats: 4,
      fare: content.fare?.sedan,
      perKm: '₹15 / km',
      idealFor: 'Small families, business trips & luggage space',
    },
    {
      vehicle: 'SUV (6-Seater)',
      models: 'Ertiga, Lodgy, Triber',
      seats: 6,
      fare: content.fare?.suv,
      perKm: '₹20 / km',
      idealFor: 'Family vacations & extra luggage capacity',
    },
    {
      vehicle: 'Innova (7-Seater)',
      models: 'Innova Crysta, Marazzo',
      seats: 7,
      fare: content.fare?.innova,
      perKm: '₹22 / km',
      idealFor: 'Executive corporate trips & VIP luxury comfort',
    },
    {
      vehicle: 'Innova Hycross',
      models: 'Innova Hycross Hybrid',
      seats: 7,
      fare: content.fare?.hycross,
      perKm: '₹25 / km',
      idealFor: 'Ultra luxury premium family & VIP travel',
    },
    {
      vehicle: 'Tempo Traveller',
      models: '12-Seater Force Traveller',
      seats: 12,
      fare: content.fare?.traveller,
      perKm: '₹30 / km',
      idealFor: 'Large group pilgrimages, wedding trips & team travel',
    },
  ]

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Estimated Taxi Fare: <span className="text-amber-400">{content.from} to {content.to}</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Transparent per-kilometer rates. Pay only for one-way distance with zero return charges.
          </p>
        </div>

        {/* Responsive Table Card */}
        <div className="bg-dark-800/80 border border-dark-700 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-dark-900/90 text-xs uppercase text-amber-400 font-bold border-b border-dark-700">
                <tr>
                  <th className="py-4 px-6">Vehicle Type</th>
                  <th className="py-4 px-6">Popular Models</th>
                  <th className="py-4 px-6 text-center">Seats</th>
                  <th className="py-4 px-6 text-center">Rate / KM</th>
                  <th className="py-4 px-6 text-right">One-Way Fare</th>
                  <th className="py-4 px-6">Ideal For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-700/60">
                {fareData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-dark-700/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-white flex items-center space-x-2">
                      <Car className="w-4 h-4 text-amber-400" />
                      <span>{row.vehicle}</span>
                    </td>
                    <td className="py-4 px-6 text-gray-400 text-xs">{row.models}</td>
                    <td className="py-4 px-6 text-center font-semibold">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-dark-900 text-gray-300 border border-dark-700 text-xs">
                        <Users className="w-3 h-3 mr-1 text-amber-400" />
                        {row.seats}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-amber-400 text-xs">
                      {row.perKm}
                    </td>
                    <td className="py-4 px-6 text-right font-extrabold text-green-400 text-base">
                      {row.fare ? `₹${row.fare.toLocaleString('en-IN')}` : 'Contact Us'}
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-300">{row.idealFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Toll and Parking Note */}
          <div className="bg-dark-900/80 p-4 border-t border-dark-700 flex items-start space-x-3 text-xs text-gray-400">
            <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-gray-300">Note:</strong> Toll plaza charges (approx {content.tolls?.costRange || 'at actuals'}), interstate permit fees, and parking extra where applicable. Standard minimum 130 km billing applies for one-way trips under 130 km.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TaxiFareTable
