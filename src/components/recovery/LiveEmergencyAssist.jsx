import React, { useState } from 'react'
import { Navigation, Camera, PhoneCall, MessageSquare, ShieldCheck, CheckCircle2, Loader2, MapPin } from 'lucide-react'
import { getCurrentGPSLocation } from '../../utils/googleMaps'

const LiveEmergencyAssist = () => {
  const [gpsLoading, setGpsLoading] = useState(false)
  const [currentAddress, setCurrentAddress] = useState('')
  const [photoSelected, setPhotoSelected] = useState(false)

  const handleFetchGPS = async () => {
    setGpsLoading(true)
    try {
      const loc = await getCurrentGPSLocation()
      setCurrentAddress(loc.address || `${loc.lat.toFixed(5)}, ${loc.lng.toFixed(5)}`)
    } catch (err) {
      setCurrentAddress('Unable to fetch GPS. Please share location via WhatsApp below.')
    } finally {
      setGpsLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-r from-red-950/40 via-dark-900 to-dark-900 border border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-dark-800 pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-red-400 font-extrabold text-xs uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 animate-pulse" />
            <span>Phase 5.4 Live Emergency Assistance</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Instant GPS Location & <span className="text-red-400">Breakdown Dispatch</span>
          </h3>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href="tel:+919894809439"
            className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center space-x-1.5 shadow-lg transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>1-Tap Emergency Call</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GPS Live Share Box */}
        <div className="bg-dark-800/80 border border-dark-700/80 p-5 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-200 flex items-center">
              <Navigation className="w-4 h-4 text-amber-400 mr-1.5" />
              Auto Detect GPS Location
            </span>
            <button
              type="button"
              onClick={handleFetchGPS}
              disabled={gpsLoading}
              className="px-3 py-1.5 rounded-lg bg-amber-400 text-black font-bold text-xs hover:bg-amber-300 transition-all flex items-center space-x-1"
            >
              {gpsLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <MapPin className="w-3.5 h-3.5" />}
              <span>{gpsLoading ? 'Locating...' : 'Get Live GPS'}</span>
            </button>
          </div>

          {currentAddress && (
            <div className="p-3 bg-dark-900 rounded-xl border border-dark-700 text-xs text-amber-400 font-semibold flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Detected: {currentAddress}</span>
            </div>
          )}

          <p className="text-[11px] text-gray-400">
            Fetching your exact GPS coordinates speeds up tow truck dispatch on highways & bypass roads.
          </p>
        </div>

        {/* Breakdown Photo Upload Placeholder */}
        <div className="bg-dark-800/80 border border-dark-700/80 p-5 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-200 flex items-center">
              <Camera className="w-4 h-4 text-amber-400 mr-1.5" />
              Breakdown / Accident Photo Upload
            </span>
            <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-dark-700 border border-dark-600 text-white hover:text-amber-400 font-bold text-xs transition-all flex items-center space-x-1">
              <span>{photoSelected ? 'Photo Attached' : 'Attach Photo'}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={() => setPhotoSelected(true)}
              />
            </label>
          </div>

          {photoSelected && (
            <div className="p-3 bg-dark-900 rounded-xl border border-dark-700 text-xs text-green-400 font-semibold flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>Image attached. Will be sent to recovery crew.</span>
            </div>
          )}

          <p className="text-[11px] text-gray-400">
            Attaching a photo of your breakdown or accident helps our operator select the right winch or flatbed truck.
          </p>
        </div>
      </div>

    </div>
  )
}

export default LiveEmergencyAssist
