import React from 'react'
import { ShieldAlert, CreditCard, DollarSign, CheckCircle2 } from 'lucide-react'

const TollInfoSection = ({ content }) => {
  const tolls = content.tolls || {}

  return (
    <section className="py-12 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-dark-800 to-dark-850 border border-dark-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Toll & Expressway Information</h2>
              <p className="text-xs text-gray-400">Transparent toll structure for {content.from} to {content.to}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-dark-900/80 p-4 rounded-xl border border-dark-700">
              <span className="text-xs text-gray-400 block font-medium uppercase">Approx Toll Cost</span>
              <span className="text-lg font-extrabold text-amber-400">{tolls.costRange || 'At Actuals'}</span>
            </div>

            <div className="bg-dark-900/80 p-4 rounded-xl border border-dark-700">
              <span className="text-xs text-gray-400 block font-medium uppercase">Toll Plazas</span>
              <span className="text-lg font-extrabold text-white">{tolls.plazasCount || 3} Plazas</span>
            </div>

            <div className="bg-dark-900/80 p-4 rounded-xl border border-dark-700">
              <span className="text-xs text-gray-400 block font-medium uppercase">FASTag Supported</span>
              <span className="text-lg font-extrabold text-green-400 flex items-center mt-0.5">
                <CheckCircle2 className="w-4 h-4 mr-1 text-green-400" />
                100% Enabled
              </span>
            </div>

            <div className="bg-dark-900/80 p-4 rounded-xl border border-dark-700">
              <span className="text-xs text-gray-400 block font-medium uppercase">Payment Options</span>
              <span className="text-sm font-bold text-white mt-1 block">FASTag / Cash / UPI</span>
            </div>

          </div>

          <p className="text-xs text-gray-400 mt-4 border-t border-dark-700/60 pt-3">
            {tolls.note || 'Toll charges are paid directly at toll gates via FASTag or billed transparently at actual cost.'}
          </p>
        </div>

      </div>
    </section>
  )
}

export default TollInfoSection
