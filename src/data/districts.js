/**
 * All 38 districts of Tamil Nadu — used for district-wise SEO landing pages.
 * Each entry: slug (URL), name (display), alias (optional), routes, nearby (internal links).
 */

export const districts = [
  {
    slug: 'ariyalur',
    name: 'Ariyalur',
    routes: ['Ariyalur to Chennai', 'Ariyalur to Trichy', 'Ariyalur to Perambalur'],
    nearby: ['perambalur', 'cuddalore', 'tiruchirappalli'],
  },
  {
    slug: 'chengalpattu',
    name: 'Chengalpattu',
    routes: ['Chengalpattu to Chennai', 'Chengalpattu to Pondicherry', 'ECR & OMR corridor rides'],
    nearby: ['chennai', 'kanchipuram', 'tiruvallur'],
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    alias: 'Madras',
    routes: ['Chennai to Bengaluru', 'Chennai to Pondicherry', 'Chennai Airport one-way taxi'],
    nearby: ['tiruvallur', 'kanchipuram', 'chengalpattu'],
  },
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    routes: ['Coimbatore to Ooty', 'Coimbatore to Chennai', 'Coimbatore to Palakkad'],
    nearby: ['tiruppur', 'nilgiris', 'erode'],
  },
  {
    slug: 'cuddalore',
    name: 'Cuddalore',
    routes: ['Cuddalore to Chennai', 'Cuddalore to Pondicherry', 'Cuddalore to Chidambaram'],
    nearby: ['viluppuram', 'ariyalur', 'nagapattinam'],
  },
  {
    slug: 'dharmapuri',
    name: 'Dharmapuri',
    routes: ['Dharmapuri to Bengaluru', 'Dharmapuri to Salem', 'Dharmapuri to Hosur'],
    nearby: ['krishnagiri', 'salem', 'tirupattur'],
  },
  {
    slug: 'dindigul',
    name: 'Dindigul',
    routes: ['Dindigul to Madurai', 'Dindigul to Trichy', 'Dindigul to Kodaikanal'],
    nearby: ['madurai', 'tiruchirappalli', 'theni'],
  },
  {
    slug: 'erode',
    name: 'Erode',
    routes: ['Erode to Coimbatore', 'Erode to Salem', 'Erode to Tiruppur'],
    nearby: ['coimbatore', 'tiruppur', 'namakkal'],
  },
  {
    slug: 'kallakurichi',
    name: 'Kallakurichi',
    routes: ['Kallakurichi to Chennai', 'Kallakurichi to Salem', 'Kallakurichi to Villupuram'],
    nearby: ['viluppuram', 'salem', 'tiruvannamalai'],
  },
  {
    slug: 'kanchipuram',
    name: 'Kanchipuram',
    routes: ['Kanchipuram to Chennai', 'Kanchipuram to Tirupati', 'Temple town transfers'],
    nearby: ['chennai', 'chengalpattu', 'tiruvallur'],
  },
  {
    slug: 'kanyakumari',
    name: 'Kanyakumari',
    routes: ['Kanyakumari to Trivandrum', 'Kanyakumari to Madurai', 'Kanyakumari to Nagercoil'],
    nearby: ['tirunelveli', 'tenkasi', 'thoothukudi'],
  },
  {
    slug: 'karur',
    name: 'Karur',
    routes: ['Karur to Trichy', 'Karur to Coimbatore', 'Karur to Erode'],
    nearby: ['tiruchirappalli', 'namakkal', 'erode'],
  },
  {
    slug: 'krishnagiri',
    name: 'Krishnagiri',
    routes: ['Krishnagiri to Bengaluru', 'Krishnagiri to Hosur', 'Krishnagiri to Salem'],
    nearby: ['dharmapuri', 'tirupattur', 'salem'],
  },
  {
    slug: 'madurai',
    name: 'Madurai',
    routes: ['Madurai to Rameswaram', 'Madurai to Trichy', 'Madurai Airport one-way taxi'],
    nearby: ['dindigul', 'sivaganga', 'virudhunagar'],
  },
  {
    slug: 'mayiladuthurai',
    name: 'Mayiladuthurai',
    routes: ['Mayiladuthurai to Trichy', 'Mayiladuthurai to Chidambaram', 'Delta region transfers'],
    nearby: ['nagapattinam', 'thanjavur', 'cuddalore'],
  },
  {
    slug: 'nagapattinam',
    name: 'Nagapattinam',
    routes: ['Nagapattinam to Trichy', 'Nagapattinam to Velankanni', 'Coastal route one-way taxi'],
    nearby: ['thanjavur', 'tiruvarur', 'mayiladuthurai'],
  },
  {
    slug: 'namakkal',
    name: 'Namakkal',
    routes: ['Namakkal to Salem', 'Namakkal to Trichy', 'Namakkal to Erode'],
    nearby: ['salem', 'karur', 'tiruchirappalli'],
  },
  {
    slug: 'nilgiris',
    name: 'The Nilgiris',
    alias: 'Nilgiris',
    routes: ['Ooty to Coimbatore', 'Ooty to Mysuru', 'Hill station one-way taxi'],
    nearby: ['coimbatore', 'erode', 'dindigul'],
  },
  {
    slug: 'perambalur',
    name: 'Perambalur',
    routes: ['Perambalur to Trichy', 'Perambalur to Chennai', 'Perambalur to Ariyalur'],
    nearby: ['ariyalur', 'tiruchirappalli', 'cuddalore'],
  },
  {
    slug: 'pudukkottai',
    name: 'Pudukkottai',
    routes: ['Pudukkottai to Trichy', 'Pudukkottai to Madurai', 'Pudukkottai to Thanjavur'],
    nearby: ['thanjavur', 'sivaganga', 'tiruchirappalli'],
  },
  {
    slug: 'ramanathapuram',
    name: 'Ramanathapuram',
    routes: ['Ramanathapuram to Rameswaram', 'Ramanathapuram to Madurai', 'Coastal one-way rides'],
    nearby: ['sivaganga', 'thoothukudi', 'virudhunagar'],
  },
  {
    slug: 'ranipet',
    name: 'Ranipet',
    routes: ['Ranipet to Chennai', 'Ranipet to Vellore', 'Ranipet to Bengaluru'],
    nearby: ['vellore', 'tirupattur', 'kanchipuram'],
  },
  {
    slug: 'salem',
    name: 'Salem',
    routes: ['Salem to Bengaluru', 'Salem to Coimbatore', 'Salem to Chennai'],
    nearby: ['namakkal', 'erode', 'dharmapuri'],
  },
  {
    slug: 'sivaganga',
    name: 'Sivaganga',
    routes: ['Sivaganga to Madurai', 'Sivaganga to Trichy', 'Sivaganga to Karaikudi'],
    nearby: ['madurai', 'pudukkottai', 'ramanathapuram'],
  },
  {
    slug: 'tenkasi',
    name: 'Tenkasi',
    routes: ['Tenkasi to Tirunelveli', 'Tenkasi to Courtallam', 'Tenkasi to Madurai'],
    nearby: ['tirunelveli', 'kanyakumari', 'virudhunagar'],
  },
  {
    slug: 'thanjavur',
    name: 'Thanjavur',
    routes: ['Thanjavur to Trichy', 'Thanjavur to Chennai', 'Thanjavur to Nagapattinam'],
    nearby: ['tiruvarur', 'nagapattinam', 'pudukkottai'],
  },
  {
    slug: 'theni',
    name: 'Theni',
    routes: ['Theni to Madurai', 'Theni to Munnar', 'Theni to Dindigul'],
    nearby: ['madurai', 'dindigul', 'virudhunagar'],
  },
  {
    slug: 'thoothukudi',
    name: 'Thoothukudi',
    alias: 'Tuticorin',
    routes: ['Thoothukudi to Madurai', 'Thoothukudi to Tirunelveli', 'Port city transfers'],
    nearby: ['tirunelveli', 'virudhunagar', 'ramanathapuram'],
  },
  {
    slug: 'tiruchirappalli',
    name: 'Tiruchirappalli',
    alias: 'Trichy',
    routes: ['Trichy to Chennai', 'Trichy to Madurai', 'Trichy Airport one-way taxi'],
    nearby: ['thanjavur', 'karur', 'perambalur'],
  },
  {
    slug: 'tirunelveli',
    name: 'Tirunelveli',
    routes: ['Tirunelveli to Kanyakumari', 'Tirunelveli to Madurai', 'Tirunelveli to Trivandrum'],
    nearby: ['tenkasi', 'thoothukudi', 'kanyakumari'],
  },
  {
    slug: 'tirupattur',
    name: 'Tirupattur',
    routes: ['Tirupattur to Vellore', 'Tirupattur to Bengaluru', 'Tirupattur to Krishnagiri'],
    nearby: ['vellore', 'krishnagiri', 'ranipet'],
  },
  {
    slug: 'tiruppur',
    name: 'Tiruppur',
    routes: ['Tiruppur to Coimbatore', 'Tiruppur to Erode', 'Tiruppur to Palakkad'],
    nearby: ['coimbatore', 'erode', 'nilgiris'],
  },
  {
    slug: 'tiruvallur',
    name: 'Tiruvallur',
    routes: ['Tiruvallur to Chennai', 'Tiruvallur to Tirupati', 'Avadi & Ambattur transfers'],
    nearby: ['chennai', 'kanchipuram', 'ranipet'],
  },
  {
    slug: 'tiruvannamalai',
    name: 'Tiruvannamalai',
    routes: ['Tiruvannamalai to Chennai', 'Tiruvannamalai to Vellore', 'Tiruvannamalai to Pondicherry'],
    nearby: ['viluppuram', 'vellore', 'kallakurichi'],
  },
  {
    slug: 'tiruvarur',
    name: 'Tiruvarur',
    routes: ['Tiruvarur to Trichy', 'Tiruvarur to Thanjavur', 'Tiruvarur to Nagapattinam'],
    nearby: ['thanjavur', 'nagapattinam', 'mayiladuthurai'],
  },
  {
    slug: 'vellore',
    name: 'Vellore',
    routes: ['Vellore to Chennai', 'Vellore to Bengaluru', 'Vellore to Tirupati'],
    nearby: ['ranipet', 'tirupattur', 'tiruvannamalai'],
  },
  {
    slug: 'viluppuram',
    name: 'Viluppuram',
    routes: ['Viluppuram to Chennai', 'Viluppuram to Pondicherry', 'Viluppuram to Trichy'],
    nearby: ['cuddalore', 'kallakurichi', 'tiruvannamalai'],
  },
  {
    slug: 'virudhunagar',
    name: 'Virudhunagar',
    routes: ['Virudhunagar to Madurai', 'Virudhunagar to Rajapalayam', 'Virudhunagar to Thoothukudi'],
    nearby: ['madurai', 'theni', 'thoothukudi'],
  },
]

export const getDistrictBySlug = (slug) =>
  districts.find((d) => d.slug === slug)

export const getDistrictUrl = (slug) => `/one-way-taxi-${slug}`
