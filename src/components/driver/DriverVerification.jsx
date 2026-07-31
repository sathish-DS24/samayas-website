import React from 'react'
import { ShieldCheck, FileCheck, UserCheck, Award, Lock, CheckCircle2 } from 'lucide-react'

const DriverVerification = () => {
  const steps = [
    { title: 'Driving License Verification', desc: 'Valid Indian Commercial / LMV Driving License verified directly with RTO records.', icon: FileCheck },
    { title: 'Identity & Address Check', desc: 'Aadhar & Voter ID background verification to confirm physical residence.', icon: UserCheck },
    { title: 'Police Antecedents Check', desc: 'Police record screening to ensure 100% clean criminal history.', icon: ShieldCheck },
    { title: 'Practical Road & Hill Test', desc: 'Rigorous driving test assessing manual/automatic control, parking & highway safety.', icon: Award },
    { title: 'Etiquette & Customer Service', desc: 'Trained in soft skills, polite communication, and white-glove passenger care.', icon: Lock }
  ]

  return (
    <section className="py-12 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Passenger Trust & Safety</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            5-Point <span className="text-amber-400">Driver Verification Standard</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Every SAMAYAS acting driver undergoes stringent multi-stage verification before handing over your steering wheel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <div key={idx} className="bg-dark-900/90 border border-dark-800 p-5 rounded-2xl text-center shadow-lg flex flex-col items-center">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default DriverVerification
