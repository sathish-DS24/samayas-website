import React from 'react'
import { Car, Users, CheckCircle, Info } from 'lucide-react'

const TaxiFareTable = ({ content }) => {
  const actualDistance = parseInt(content.distanceKm) || parseInt(content.distanceDisplay) || 0
  const isShortRoute = actualDistance > 0 && actualDistance < 130
  const billableKm = isShortRoute ? 130 : actualDistance
  const bata = 400

  const vehicleConfig = [
    { vehicle: 'Hatchback', models: 'WagonR, Swift, Indica', seats: 4, ratePerKm: 15, bata: 400, idealFor: 'Solo travelers, couples & quick budget trips' },
    { vehicle: 'Sedan', models: 'Swift Dzire, Hyundai Aura, Etios', seats: 4, ratePerKm: 15, bata: 400, idealFor: 'Small families, business trips & luggage space' },
    { vehicle: 'SUV (6-Seater)', models: 'Ertiga, Lodgy, Triber', seats: 6, ratePerKm: 20, bata: 400, idealFor: 'Family vacations & extra luggage capacity' },
    { vehicle: 'Innova (7-Seater)', models: 'Innova Crysta, Marazzo', seats: 7, ratePerKm: 22, bata: 500, idealFor: 'Executive corporate trips & VIP luxury comfort' },
    { vehicle: 'Innova Hycross', models: 'Innova Hycross Hybrid', seats: 7, ratePerKm: 25, bata: 500, idealFor: 'Ultra luxury premium family & VIP travel' },
    { vehicle: 'Tempo Traveller', models: '12-Seater Force Traveller', seats: 12, ratePerKm: 30, bata: 600, idealFor: 'Large group pilgrimages, wedding trips & team travel' },
  ]

  const fareData = vehicleConfig.map((item) => {
    const baseFare = billableKm * item.ratePerKm
    const totalFare = baseFare + item.bata
    return {
      ...item,
      baseFare,
      totalFare,
      perKm: `₹${item.ratePerKm} / km`
    }
  })

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Estimated Taxi Fare: <span className="text-amber-400">{content.from} to {content.to}</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Transparent breakdown: Base Fare + Driver Allowance (Bata) = Total One-Way Fare. Zero return charges.
          </p>
        </div>

        {/* Responsive Table Card */}
        <div className="bg-dark-800/80 border border-dark-700 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-dark-900/90 text-xs uppercase text-amber-400 font-bold border-b border-dark-700">
                <tr>
                  <th className="py-4 px-5">Vehicle Type</th>
                  <th className="py-4 px-4">Popular Models</th>
                  <th className="py-4 px-3 text-center">Seats</th>
                  <th className="py-4 px-4 text-center">Rate / KM</th>
                  <th className="py-4 px-4 text-center">Base Fare ({billableKm} km)</th>
                  <th className="py-4 px-4 text-center">Driver Bata</th>
                  <th className="py-4 px-5 text-right">Total One-Way Fare</th>
                  <th className="py-4 px-5">Ideal For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-700/60">
                {fareData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-dark-700/30 transition-colors">
                    <td className="py-4 px-5 font-bold text-white flex items-center space-x-2">
                      <Car className="w-4 h-4 text-amber-400" />
                      <span>{row.vehicle}</span>
                    </td>
                    <td className="py-4 px-4 text-gray-400 text-xs">{row.models}</td>
                    <td className="py-4 px-3 text-center font-semibold">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-dark-900 text-gray-300 border border-dark-700 text-xs">
                        <Users className="w-3 h-3 mr-1 text-amber-400" />
                        {row.seats}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-amber-400 text-xs">
                      {row.perKm}
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-gray-300 text-xs">
                      ₹{row.baseFare.toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-amber-300 text-xs">
                      + ₹{row.bata}
                    </td>
                    <td className="py-4 px-5 text-right font-extrabold text-green-400 text-base whitespace-nowrap">
                      ₹{row.totalFare.toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-5 text-xs text-gray-300">{row.idealFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Toll and Parking Note */}
          <div className="bg-dark-900/80 p-4 border-t border-dark-700 flex items-start space-x-3 text-xs text-gray-400">
            <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-gray-300">Fare Policy Note:</strong> Driver Allowance (Bata) is <strong className="text-amber-400">INCLUDED</strong> in all total one-way fares shown above. Toll plaza charges (approx {content.tolls?.costRange || 'at actuals'}), interstate permit fees, and parking extra where applicable. Standard minimum 130 km billing applies for one-way trips under 130 km.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TaxiFareTable
