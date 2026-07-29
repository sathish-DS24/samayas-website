import fs from 'fs';

// Complete Phase 1 Route Catalog with Category, Popularity & Purposes
const phase1Routes = [
  // ── MAJOR CITIES (`City`) ──
  { slug: 'trichy-to-chennai', from: 'Trichy', to: 'Chennai', category: 'City', popularity: 10, purposes: ['Business', 'Medical', 'Airport'], origin: 'tiruchirappalli', dest: 'chennai', dist: 330, time: 5.5, hw: ['NH38', 'NH45 GST Road'], toll: '₹420 - ₹520', tollCount: 4 },
  { slug: 'chennai-to-trichy', from: 'Chennai', to: 'Trichy', category: 'City', popularity: 10, purposes: ['Home Visit', 'Business', 'Temple'], origin: 'chennai', dest: 'tiruchirappalli', dist: 330, time: 5.5, hw: ['NH45 GST Road', 'NH38'], toll: '₹420 - ₹520', tollCount: 4 },
  { slug: 'chennai-to-madurai', from: 'Chennai', to: 'Madurai', category: 'City', popularity: 10, purposes: ['Business', 'Family', 'Culture'], origin: 'chennai', dest: 'madurai', dist: 460, time: 7.5, hw: ['NH45', 'NH38'], toll: '₹580 - ₹680', tollCount: 6 },
  { slug: 'madurai-to-chennai', from: 'Madurai', to: 'Chennai', category: 'City', popularity: 10, purposes: ['Business', 'Medical', 'Airport'], origin: 'madurai', dest: 'chennai', dist: 460, time: 7.5, hw: ['NH38', 'NH45'], toll: '₹580 - ₹680', tollCount: 6 },
  { slug: 'chennai-to-coimbatore', from: 'Chennai', to: 'Coimbatore', category: 'City', popularity: 9, purposes: ['Business', 'Textile', 'IT'], origin: 'chennai', dest: 'coimbatore', dist: 500, time: 8.5, hw: ['NH48', 'NH544'], toll: '₹620 - ₹720', tollCount: 7 },
  { slug: 'coimbatore-to-chennai', from: 'Coimbatore', to: 'Chennai', category: 'City', popularity: 9, purposes: ['Business', 'Corporate', 'Airport'], origin: 'coimbatore', dest: 'chennai', dist: 500, time: 8.5, hw: ['NH544', 'NH48'], toll: '₹620 - ₹720', tollCount: 7 },
  { slug: 'chennai-to-salem', from: 'Chennai', to: 'Salem', category: 'City', popularity: 9, purposes: ['Business', 'Steel', 'Agriculture'], origin: 'chennai', dest: 'salem', dist: 340, time: 6.0, hw: ['NH48', 'NH79'], toll: '₹410 - ₹490', tollCount: 4 },
  { slug: 'salem-to-chennai', from: 'Salem', to: 'Chennai', category: 'City', popularity: 9, purposes: ['Business', 'Medical', 'Airport'], origin: 'salem', dest: 'chennai', dist: 340, time: 6.0, hw: ['NH79', 'NH48'], toll: '₹410 - ₹490', tollCount: 4 },
  { slug: 'chennai-to-tirunelveli', from: 'Chennai', to: 'Tirunelveli', category: 'City', popularity: 8, purposes: ['Family', 'Home Visit'], origin: 'chennai', dest: 'tirunelveli', dist: 620, time: 10.0, hw: ['NH45', 'NH44'], toll: '₹750 - ₹880', tollCount: 9 },
  { slug: 'tirunelveli-to-chennai', from: 'Tirunelveli', to: 'Chennai', category: 'City', popularity: 8, purposes: ['Business', 'Education', 'Airport'], origin: 'tirunelveli', dest: 'chennai', dist: 620, time: 10.0, hw: ['NH44', 'NH45'], toll: '₹750 - ₹880', tollCount: 9 },
  { slug: 'chennai-to-thanjavur', from: 'Chennai', to: 'Thanjavur', category: 'City', popularity: 9, purposes: ['Heritage', 'Pilgrimage', 'Family'], origin: 'chennai', dest: 'thanjavur', dist: 340, time: 6.0, hw: ['NH45', 'NH36'], toll: '₹420 - ₹500', tollCount: 4 },
  { slug: 'thanjavur-to-chennai', from: 'Thanjavur', to: 'Chennai', category: 'City', popularity: 9, purposes: ['Medical', 'Business', 'Airport'], origin: 'thanjavur', dest: 'chennai', dist: 340, time: 6.0, hw: ['NH36', 'NH45'], toll: '₹420 - ₹500', tollCount: 4 },
  { slug: 'chennai-to-vellore', from: 'Chennai', to: 'Vellore', category: 'City', popularity: 9, purposes: ['Medical', 'CMC Hospital', 'Education'], origin: 'chennai', dest: 'vellore', dist: 140, time: 2.75, hw: ['NH48'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'vellore-to-chennai', from: 'Vellore', to: 'Chennai', category: 'City', popularity: 9, purposes: ['Medical', 'Airport', 'Business'], origin: 'vellore', dest: 'chennai', dist: 140, time: 2.75, hw: ['NH48'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'chennai-to-erode', from: 'Chennai', to: 'Erode', category: 'City', popularity: 8, purposes: ['Textile', 'Business'], origin: 'chennai', dest: 'erode', dist: 420, time: 7.0, hw: ['NH48', 'NH544'], toll: '₹520 - ₹620', tollCount: 6 },
  { slug: 'erode-to-chennai', from: 'Erode', to: 'Chennai', category: 'City', popularity: 8, purposes: ['Business', 'Medical', 'Airport'], origin: 'erode', dest: 'chennai', dist: 420, time: 7.0, hw: ['NH544', 'NH48'], toll: '₹520 - ₹620', tollCount: 6 },
  { slug: 'chennai-to-nagapattinam', from: 'Chennai', to: 'Nagapattinam', category: 'City', popularity: 8, purposes: ['Coastal', 'Port', 'Pilgrimage'], origin: 'chennai', dest: 'nagapattinam', dist: 310, time: 6.0, hw: ['ECR', 'NH32'], toll: '₹320 - ₹410', tollCount: 4 },
  { slug: 'nagapattinam-to-chennai', from: 'Nagapattinam', to: 'Chennai', category: 'City', popularity: 8, purposes: ['Business', 'Medical', 'Airport'], origin: 'nagapattinam', dest: 'chennai', dist: 310, time: 6.0, hw: ['NH32', 'ECR'], toll: '₹320 - ₹410', tollCount: 4 },

  { slug: 'trichy-to-madurai', from: 'Trichy', to: 'Madurai', category: 'City', popularity: 9, purposes: ['Business', 'Temple', 'Airport'], origin: 'tiruchirappalli', dest: 'madurai', dist: 135, time: 2.25, hw: ['NH38'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'madurai-to-trichy', from: 'Madurai', to: 'Trichy', category: 'City', popularity: 9, purposes: ['Business', 'TRZ Airport', 'Temple'], origin: 'madurai', dest: 'tiruchirappalli', dist: 135, time: 2.25, hw: ['NH38'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'trichy-to-coimbatore', from: 'Trichy', to: 'Coimbatore', category: 'City', popularity: 9, purposes: ['Business', 'Industrial', 'Textile'], origin: 'tiruchirappalli', dest: 'coimbatore', dist: 215, time: 4.25, hw: ['NH81'], toll: '₹180 - ₹240', tollCount: 2 },
  { slug: 'coimbatore-to-trichy', from: 'Coimbatore', to: 'Trichy', category: 'City', popularity: 9, purposes: ['Business', 'TRZ Airport', 'Education'], origin: 'coimbatore', dest: 'tiruchirappalli', dist: 215, time: 4.25, hw: ['NH81'], toll: '₹180 - ₹240', tollCount: 2 },
  { slug: 'trichy-to-salem', from: 'Trichy', to: 'Salem', category: 'City', popularity: 8, purposes: ['Business', 'Transit'], origin: 'tiruchirappalli', dest: 'salem', dist: 140, time: 2.75, hw: ['NH81', 'NH44'], toll: '₹120 - ₹160', tollCount: 2 },
  { slug: 'salem-to-trichy', from: 'Salem', to: 'Trichy', category: 'City', popularity: 8, purposes: ['Business', 'TRZ Airport'], origin: 'salem', dest: 'tiruchirappalli', dist: 140, time: 2.75, hw: ['NH44', 'NH81'], toll: '₹120 - ₹160', tollCount: 2 },
  { slug: 'trichy-to-thanjavur', from: 'Trichy', to: 'Thanjavur', category: 'City', popularity: 9, purposes: ['Commute', 'Tourism', 'Heritage'], origin: 'tiruchirappalli', dest: 'thanjavur', dist: 55, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹70', tollCount: 1 },
  { slug: 'thanjavur-to-trichy', from: 'Thanjavur', to: 'Trichy', category: 'City', popularity: 9, purposes: ['TRZ Airport', 'Medical', 'Shopping'], origin: 'thanjavur', dest: 'tiruchirappalli', dist: 55, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹70', tollCount: 1 },
  { slug: 'trichy-to-tirunelveli', from: 'Trichy', to: 'Tirunelveli', category: 'City', popularity: 8, purposes: ['Family', 'Business'], origin: 'tiruchirappalli', dest: 'tirunelveli', dist: 290, time: 4.75, hw: ['NH38', 'NH44'], toll: '₹340 - ₹420', tollCount: 4 },
  { slug: 'tirunelveli-to-trichy', from: 'Tirunelveli', to: 'Trichy', category: 'City', popularity: 8, purposes: ['TRZ Airport', 'Education'], origin: 'tirunelveli', dest: 'tiruchirappalli', dist: 290, time: 4.75, hw: ['NH44', 'NH38'], toll: '₹340 - ₹420', tollCount: 4 },
  { slug: 'trichy-to-erode', from: 'Trichy', to: 'Erode', category: 'City', popularity: 8, purposes: ['Business', 'Textile'], origin: 'tiruchirappalli', dest: 'erode', dist: 155, time: 3.25, hw: ['NH81'], toll: '₹110 - ₹150', tollCount: 2 },
  { slug: 'erode-to-trichy', from: 'Erode', to: 'Trichy', category: 'City', popularity: 8, purposes: ['TRZ Airport', 'Medical'], origin: 'erode', dest: 'tiruchirappalli', dist: 155, time: 3.25, hw: ['NH81'], toll: '₹110 - ₹150', tollCount: 2 },

  { slug: 'madurai-to-coimbatore', from: 'Madurai', to: 'Coimbatore', category: 'City', popularity: 9, purposes: ['Business', 'Industrial', 'Medical'], origin: 'madurai', dest: 'coimbatore', dist: 210, time: 4.25, hw: ['NH83'], toll: '₹160 - ₹220', tollCount: 2 },
  { slug: 'coimbatore-to-madurai', from: 'Coimbatore', to: 'Madurai', category: 'City', popularity: 9, purposes: ['Business', 'Temple', 'IXM Airport'], origin: 'coimbatore', dest: 'madurai', dist: 210, time: 4.25, hw: ['NH83'], toll: '₹160 - ₹220', tollCount: 2 },
  { slug: 'madurai-to-tirunelveli', from: 'Madurai', to: 'Tirunelveli', category: 'City', popularity: 9, purposes: ['Business', 'Halwa City', 'Family'], origin: 'madurai', dest: 'tirunelveli', dist: 160, time: 2.75, hw: ['NH44'], toll: '₹180 - ₹230', tollCount: 2 },
  { slug: 'tirunelveli-to-madurai', from: 'Tirunelveli', to: 'Madurai', category: 'City', popularity: 9, purposes: ['IXM Airport', 'Medical', 'Temple'], origin: 'tirunelveli', dest: 'madurai', dist: 160, time: 2.75, hw: ['NH44'], toll: '₹180 - ₹230', tollCount: 2 },

  { slug: 'coimbatore-to-salem', from: 'Coimbatore', to: 'Salem', category: 'City', popularity: 8, purposes: ['Business', 'Textile', 'Steel'], origin: 'coimbatore', dest: 'salem', dist: 165, time: 3.0, hw: ['NH544'], toll: '₹180 - ₹240', tollCount: 2 },
  { slug: 'salem-to-coimbatore', from: 'Salem', to: 'Coimbatore', category: 'City', popularity: 8, purposes: ['Business', 'CJB Airport', 'Medical'], origin: 'salem', dest: 'coimbatore', dist: 165, time: 3.0, hw: ['NH544'], toll: '₹180 - ₹240', tollCount: 2 },
  { slug: 'coimbatore-to-erode', from: 'Coimbatore', to: 'Erode', category: 'City', popularity: 8, purposes: ['Textile', 'Business'], origin: 'coimbatore', dest: 'erode', dist: 100, time: 2.0, hw: ['NH544'], toll: '₹90 - ₹130', tollCount: 1 },
  { slug: 'erode-to-coimbatore', from: 'Erode', to: 'Coimbatore', category: 'City', popularity: 8, purposes: ['CJB Airport', 'Medical', 'Corporate'], origin: 'erode', dest: 'coimbatore', dist: 100, time: 2.0, hw: ['NH544'], toll: '₹90 - ₹130', tollCount: 1 },
  { slug: 'coimbatore-to-pollachi', from: 'Coimbatore', to: 'Pollachi', category: 'City', popularity: 8, purposes: ['Business', 'Agriculture', 'Film Location'], origin: 'coimbatore', dest: 'coimbatore', dist: 45, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹60', tollCount: 1 },
  { slug: 'pollachi-to-coimbatore', from: 'Pollachi', to: 'Coimbatore', category: 'City', popularity: 8, purposes: ['CJB Airport', 'Medical', 'Education'], origin: 'coimbatore', dest: 'coimbatore', dist: 45, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹60', tollCount: 1 },
  { slug: 'salem-to-erode', from: 'Salem', to: 'Erode', category: 'City', popularity: 8, purposes: ['Textile', 'Business'], origin: 'salem', dest: 'erode', dist: 65, time: 1.25, hw: ['NH544'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'erode-to-salem', from: 'Erode', to: 'Salem', category: 'City', popularity: 8, purposes: ['Business', 'Transit'], origin: 'erode', dest: 'salem', dist: 65, time: 1.25, hw: ['NH544'], toll: '₹50 - ₹80', tollCount: 1 },

  // ── TEMPLE / PILGRIMAGE ROUTES (`Temple`) ──
  { slug: 'trichy-to-velankanni', from: 'Trichy', to: 'Velankanni', category: 'Temple', popularity: 10, purposes: ['Pilgrimage', 'Basilica', 'Tourism'], origin: 'tiruchirappalli', dest: 'nagapattinam', dist: 155, time: 3.5, hw: ['NH83', 'SH22'], toll: '₹90 - ₹140', tollCount: 1 },
  { slug: 'velankanni-to-trichy', from: 'Velankanni', to: 'Trichy', category: 'Temple', popularity: 10, purposes: ['TRZ Airport', 'Pilgrimage Return'], origin: 'nagapattinam', dest: 'tiruchirappalli', dist: 155, time: 3.5, hw: ['SH22', 'NH83'], toll: '₹90 - ₹140', tollCount: 1 },
  { slug: 'trichy-to-kumbakonam', from: 'Trichy', to: 'Kumbakonam', category: 'Temple', popularity: 9, purposes: ['Navagraha Pilgrimage', 'Temples'], origin: 'tiruchirappalli', dest: 'thanjavur', dist: 90, time: 2.0, hw: ['NH36'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'kumbakonam-to-trichy', from: 'Kumbakonam', to: 'Trichy', category: 'Temple', popularity: 9, purposes: ['TRZ Airport', 'Pilgrimage Return'], origin: 'thanjavur', dest: 'tiruchirappalli', dist: 90, time: 2.0, hw: ['NH36'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'trichy-to-chidambaram', from: 'Trichy', to: 'Chidambaram', category: 'Temple', popularity: 8, purposes: ['Nataraja Temple', 'Pilgrimage', 'Annamalai Univ'], origin: 'tiruchirappalli', dest: 'cuddalore', dist: 170, time: 3.75, hw: ['NH36'], toll: '₹120 - ₹170', tollCount: 2 },
  { slug: 'chidambaram-to-trichy', from: 'Chidambaram', to: 'Trichy', category: 'Temple', popularity: 8, purposes: ['TRZ Airport', 'Pilgrimage Return'], origin: 'cuddalore', dest: 'tiruchirappalli', dist: 170, time: 3.75, hw: ['NH36'], toll: '₹120 - ₹170', tollCount: 2 },

  { slug: 'madurai-to-rameswaram', from: 'Madurai', to: 'Rameshwaram', category: 'Temple', popularity: 10, purposes: ['Pilgrimage', 'Dhanushkodi', 'Pamban Bridge'], origin: 'madurai', dest: 'ramanathapuram', dist: 175, time: 3.5, hw: ['NH87', 'Pamban Sea Bridge'], toll: '₹120 - ₹180', tollCount: 2 },
  { slug: 'rameswaram-to-madurai', from: 'Rameshwaram', to: 'Madurai', category: 'Temple', popularity: 10, purposes: ['IXM Airport', 'Pilgrimage Return'], origin: 'ramanathapuram', dest: 'madurai', dist: 175, time: 3.5, hw: ['NH87'], toll: '₹120 - ₹180', tollCount: 2 },
  { slug: 'madurai-to-tiruchendur', from: 'Madurai', to: 'Tiruchendur', category: 'Temple', popularity: 9, purposes: ['Subramanya Swamy Temple', 'Pilgrimage'], origin: 'madurai', dest: 'thoothukudi', dist: 180, time: 3.5, hw: ['NH38'], toll: '₹140 - ₹190', tollCount: 2 },
  { slug: 'tiruchendur-to-madurai', from: 'Tiruchendur', to: 'Madurai', category: 'Temple', popularity: 9, purposes: ['IXM Airport', 'Pilgrimage Return'], origin: 'thoothukudi', dest: 'madurai', dist: 180, time: 3.5, hw: ['NH38'], toll: '₹140 - ₹190', tollCount: 2 },

  { slug: 'chennai-to-kanchipuram', from: 'Chennai', to: 'Kanchipuram', category: 'Temple', popularity: 9, purposes: ['Silk Sarees', 'Pilgrimage', 'Heritage'], origin: 'chennai', dest: 'kanchipuram', dist: 75, time: 1.75, hw: ['NH48'], toll: '₹70 - ₹100', tollCount: 1 },
  { slug: 'kanchipuram-to-chennai', from: 'Kanchipuram', to: 'Chennai', category: 'Temple', popularity: 9, purposes: ['MAA Airport', 'Shopping Return'], origin: 'kanchipuram', dest: 'chennai', dist: 75, time: 1.75, hw: ['NH48'], toll: '₹70 - ₹100', tollCount: 1 },
  { slug: 'chennai-to-chidambaram', from: 'Chennai', to: 'Chidambaram', category: 'Temple', popularity: 8, purposes: ['Pilgrimage', 'Temple', 'University'], origin: 'chennai', dest: 'cuddalore', dist: 230, time: 4.5, hw: ['ECR', 'NH32'], toll: '₹220 - ₹290', tollCount: 3 },
  { slug: 'chidambaram-to-chennai', from: 'Chidambaram', to: 'Chennai', category: 'Temple', popularity: 8, purposes: ['MAA Airport', 'Medical'], origin: 'cuddalore', dest: 'chennai', dist: 230, time: 4.5, hw: ['NH32', 'ECR'], toll: '₹220 - ₹290', tollCount: 3 },

  // ── TOURIST ROUTES (`Tourist`) ──
  { slug: 'coimbatore-to-ooty', from: 'Coimbatore', to: 'Ooty', category: 'Tourist', popularity: 10, purposes: ['Tourism', 'Resort', 'Honeymoon'], origin: 'coimbatore', dest: 'nilgiris', dist: 85, time: 2.75, hw: ['NH181', 'Hairpin Bends Route'], toll: '₹60 - ₹100', tollCount: 1 },
  { slug: 'ooty-to-coimbatore', from: 'Ooty', to: 'Coimbatore', category: 'Tourist', popularity: 10, purposes: ['CJB Airport', 'Railway Return'], origin: 'nilgiris', dest: 'coimbatore', dist: 85, time: 2.75, hw: ['NH181', 'Mettupalayam Road'], toll: '₹60 - ₹100', tollCount: 1 },
  { slug: 'coimbatore-to-coonoor', from: 'Coimbatore', to: 'Coonoor', category: 'Tourist', popularity: 9, purposes: ['Tea Gardens', 'Sims Park', 'Tourism'], origin: 'coimbatore', dest: 'nilgiris', dist: 70, time: 2.25, hw: ['NH181'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'coonoor-to-coimbatore', from: 'Coonoor', to: 'Coimbatore', category: 'Tourist', popularity: 9, purposes: ['CJB Airport', 'Tourism Return'], origin: 'nilgiris', dest: 'coimbatore', dist: 70, time: 2.25, hw: ['NH181'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'coimbatore-to-valparai', from: 'Coimbatore', to: 'Valparai', category: 'Tourist', popularity: 8, purposes: ['Tea Plantations', 'Wildlife', 'Hairpin Bends'], origin: 'coimbatore', dest: 'coimbatore', dist: 105, time: 3.5, hw: ['SH78 Ghat Road'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'valparai-to-coimbatore', from: 'Valparai', to: 'Coimbatore', category: 'Tourist', popularity: 8, purposes: ['CJB Airport', 'Tourism Return'], origin: 'coimbatore', dest: 'coimbatore', dist: 105, time: 3.5, hw: ['SH78 Ghat Road'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'coimbatore-to-munnar', from: 'Coimbatore', to: 'Munnar', category: 'Tourist', popularity: 9, purposes: ['Tourism', 'Tea Hills', 'Resort Stay'], origin: 'coimbatore', dest: 'coimbatore', dist: 160, time: 4.5, hw: ['SH17', 'Udumalpet Ghat Road'], toll: '₹90 - ₹140', tollCount: 1 },
  { slug: 'munnar-to-coimbatore', from: 'Munnar', to: 'Coimbatore', category: 'Tourist', popularity: 9, purposes: ['CJB Airport', 'Tourism Return'], origin: 'coimbatore', dest: 'coimbatore', dist: 160, time: 4.5, hw: ['Udumalpet Ghat Road', 'SH17'], toll: '₹90 - ₹140', tollCount: 1 },

  { slug: 'madurai-to-kodaikanal', from: 'Madurai', to: 'Kodaikanal', category: 'Tourist', popularity: 10, purposes: ['Tourism', 'Hill Resort', 'Honeymoon'], origin: 'madurai', dest: 'dindigul', dist: 115, time: 3.0, hw: ['SH156 Ghat Road'], toll: '₹80 - ₹120', tollCount: 1 },
  { slug: 'kodaikanal-to-madurai', from: 'Kodaikanal', to: 'Madurai', category: 'Tourist', popularity: 10, purposes: ['IXM Airport', 'Tourism Return'], origin: 'dindigul', dest: 'madurai', dist: 115, time: 3.0, hw: ['SH156 Ghat Road'], toll: '₹80 - ₹120', tollCount: 1 },
  { slug: 'madurai-to-kanyakumari', from: 'Madurai', to: 'Kanyakumari', category: 'Tourist', popularity: 9, purposes: ['Sunset Point', 'Vivekananda Rock', 'Tourism'], origin: 'madurai', dest: 'kanyakumari', dist: 245, time: 4.25, hw: ['NH44'], toll: '₹280 - ₹360', tollCount: 3 },
  { slug: 'kanyakumari-to-madurai', from: 'Kanyakumari', to: 'Madurai', category: 'Tourist', popularity: 9, purposes: ['IXM Airport', 'Tourism Return'], origin: 'kanyakumari', dest: 'madurai', dist: 245, time: 4.25, hw: ['NH44'], toll: '₹280 - ₹360', tollCount: 3 },
  { slug: 'madurai-to-courtallam', from: 'Madurai', to: 'Courtallam', category: 'Tourist', popularity: 8, purposes: ['Waterfalls', 'Ayurveda', 'Tourism'], origin: 'madurai', dest: 'tenkasi', dist: 160, time: 3.5, hw: ['NH744'], toll: '₹110 - ₹160', tollCount: 2 },
  { slug: 'courtallam-to-madurai', from: 'Courtallam', to: 'Madurai', category: 'Tourist', popularity: 8, purposes: ['IXM Airport', 'Tourism Return'], origin: 'tenkasi', dest: 'madurai', dist: 160, time: 3.5, hw: ['NH744'], toll: '₹110 - ₹160', tollCount: 2 },

  { slug: 'chennai-to-pondicherry', from: 'Chennai', to: 'Puducherry', category: 'Tourist', popularity: 10, purposes: ['ECR Roadtrip', 'Auroville', 'French Quarter'], origin: 'chennai', dest: 'viluppuram', dist: 160, time: 3.25, hw: ['ECR', 'NH32'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'pondicherry-to-chennai', from: 'Puducherry', to: 'Chennai', category: 'Tourist', popularity: 10, purposes: ['MAA Airport', 'Weekend Return'], origin: 'viluppuram', dest: 'chennai', dist: 160, time: 3.25, hw: ['ECR', 'NH32'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'chennai-to-mahabalipuram', from: 'Chennai', to: 'Mahabalipuram', category: 'Tourist', popularity: 9, purposes: ['UNESCO Heritage', 'Shore Temple', 'Day Trip'], origin: 'chennai', dest: 'chengalpattu', dist: 55, time: 1.25, hw: ['ECR Scenic Road'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'mahabalipuram-to-chennai', from: 'Mahabalipuram', to: 'Chennai', category: 'Tourist', popularity: 9, purposes: ['MAA Airport', 'Day Trip Return'], origin: 'chengalpattu', dest: 'chennai', dist: 55, time: 1.25, hw: ['ECR Scenic Road'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'tirunelveli-to-kanyakumari', from: 'Tirunelveli', to: 'Kanyakumari', category: 'Tourist', popularity: 9, purposes: ['Sunset View', 'Vivekananda Rock'], origin: 'tirunelveli', dest: 'kanyakumari', dist: 85, time: 1.75, hw: ['NH44'], toll: '₹80 - ₹110', tollCount: 1 },
  { slug: 'kanyakumari-to-tirunelveli', from: 'Kanyakumari', to: 'Tirunelveli', category: 'Tourist', popularity: 9, purposes: ['TEN Station', 'Tourism Return'], origin: 'kanyakumari', dest: 'tirunelveli', dist: 85, time: 1.75, hw: ['NH44'], toll: '₹80 - ₹110', tollCount: 1 },

  // ── AIRPORT ROUTES (`Airport`) ──
  { slug: 'chennai-airport-to-pondicherry', from: 'Chennai Airport', to: 'Puducherry', category: 'Airport', popularity: 10, purposes: ['Airport Pickup', 'Auroville', 'French Quarter'], origin: 'chennai', dest: 'viluppuram', dist: 140, time: 2.75, hw: ['ECR', 'NH32'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'pondicherry-to-chennai-airport', from: 'Puducherry', to: 'Chennai Airport', category: 'Airport', popularity: 10, purposes: ['MAA Flight Drop', 'International Flight'], origin: 'viluppuram', dest: 'chennai', dist: 140, time: 2.75, hw: ['NH32', 'ECR'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'chennai-airport-to-vellore', from: 'Chennai Airport', to: 'Vellore', category: 'Airport', popularity: 9, purposes: ['CMC Patient Pickup', 'Medical Airport Transfer'], origin: 'chennai', dest: 'vellore', dist: 125, time: 2.5, hw: ['NH48'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'vellore-to-chennai-airport', from: 'Vellore', to: 'Chennai Airport', category: 'Airport', popularity: 9, purposes: ['CMC Flight Drop', 'MAA Airport Drop'], origin: 'vellore', dest: 'chennai', dist: 125, time: 2.5, hw: ['NH48'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'chennai-airport-to-tirupati', from: 'Chennai Airport', to: 'Tirupati', category: 'Airport', popularity: 9, purposes: ['Airport Temple Taxi', 'Tirumala Pilgrimage'], origin: 'chennai', dest: 'vellore', dist: 130, time: 3.0, hw: ['NH716'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'tirupati-to-chennai-airport', from: 'Tirupati', to: 'Chennai Airport', category: 'Airport', popularity: 9, purposes: ['MAA Flight Drop', 'Pilgrimage Return'], origin: 'vellore', dest: 'chennai', dist: 130, time: 3.0, hw: ['NH716'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'chennai-airport-to-mahabalipuram', from: 'Chennai Airport', to: 'Mahabalipuram', category: 'Airport', popularity: 9, purposes: ['Tourist Airport Pickup', 'Resort Transfer'], origin: 'chennai', dest: 'chengalpattu', dist: 50, time: 1.15, hw: ['ECR'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'mahabalipuram-to-chennai-airport', from: 'Mahabalipuram', to: 'Chennai Airport', category: 'Airport', popularity: 9, purposes: ['MAA Flight Drop', 'Resort Return'], origin: 'chengalpattu', dest: 'chennai', dist: 50, time: 1.15, hw: ['ECR'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'chennai-airport-to-kanchipuram', from: 'Chennai Airport', to: 'Kanchipuram', category: 'Airport', popularity: 8, purposes: ['Airport Pickup', 'Silk Town Transfer'], origin: 'chennai', dest: 'kanchipuram', dist: 65, time: 1.5, hw: ['NH48'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'kanchipuram-to-chennai-airport', from: 'Kanchipuram', to: 'Chennai Airport', category: 'Airport', popularity: 8, purposes: ['MAA Flight Drop'], origin: 'kanchipuram', dest: 'chennai', dist: 65, time: 1.5, hw: ['NH48'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'chennai-airport-to-chittoor', from: 'Chennai Airport', to: 'Chittoor', category: 'Airport', popularity: 8, purposes: ['Airport Transit', 'Interstate Business'], origin: 'chennai', dest: 'vellore', dist: 155, time: 3.25, hw: ['NH48'], toll: '₹160 - ₹210', tollCount: 2 },
  { slug: 'chittoor-to-chennai-airport', from: 'Chittoor', to: 'Chennai Airport', category: 'Airport', popularity: 8, purposes: ['MAA Flight Drop'], origin: 'vellore', dest: 'chennai', dist: 155, time: 3.25, hw: ['NH48'], toll: '₹160 - ₹210', tollCount: 2 },

  { slug: 'trichy-airport-to-thanjavur', from: 'Trichy Airport', to: 'Thanjavur', category: 'Airport', popularity: 9, purposes: ['TRZ Flight Pickup', 'Big Temple Visit'], origin: 'tiruchirappalli', dest: 'thanjavur', dist: 55, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹70', tollCount: 1 },
  { slug: 'thanjavur-to-trichy-airport', from: 'Thanjavur', to: 'Trichy Airport', category: 'Airport', popularity: 9, purposes: ['TRZ Flight Drop', 'International Flight'], origin: 'thanjavur', dest: 'tiruchirappalli', dist: 55, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹70', tollCount: 1 },
  { slug: 'trichy-airport-to-karur', from: 'Trichy Airport', to: 'Karur', category: 'Airport', popularity: 8, purposes: ['TRZ Flight Pickup', 'Textile Business'], origin: 'tiruchirappalli', dest: 'karur', dist: 85, time: 1.75, hw: ['NH81'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'karur-to-trichy-airport', from: 'Karur', to: 'Trichy Airport', category: 'Airport', popularity: 8, purposes: ['TRZ Flight Drop'], origin: 'karur', dest: 'tiruchirappalli', dist: 85, time: 1.75, hw: ['NH81'], toll: '₹60 - ₹90', tollCount: 1 },

  { slug: 'madurai-airport-to-rameswaram', from: 'Madurai Airport', to: 'Rameshwaram', category: 'Airport', popularity: 9, purposes: ['IXM Flight Pickup', 'Pilgrimage Transfer'], origin: 'madurai', dest: 'ramanathapuram', dist: 170, time: 3.25, hw: ['NH87'], toll: '₹120 - ₹180', tollCount: 2 },
  { slug: 'rameswaram-to-madurai-airport', from: 'Rameshwaram', to: 'Madurai Airport', category: 'Airport', popularity: 9, purposes: ['IXM Flight Drop'], origin: 'ramanathapuram', dest: 'madurai', dist: 170, time: 3.25, hw: ['NH87'], toll: '₹120 - ₹180', tollCount: 2 },
  { slug: 'madurai-airport-to-kodaikanal', from: 'Madurai Airport', to: 'Kodaikanal', category: 'Airport', popularity: 9, purposes: ['IXM Flight Pickup', 'Hill Resort Transfer'], origin: 'madurai', dest: 'dindigul', dist: 135, time: 3.5, hw: ['SH156 Ghat Road'], toll: '₹90 - ₹130', tollCount: 1 },
  { slug: 'kodaikanal-to-madurai-airport', from: 'Kodaikanal', to: 'Madurai Airport', category: 'Airport', popularity: 9, purposes: ['IXM Flight Drop'], origin: 'dindigul', dest: 'madurai', dist: 135, time: 3.5, hw: ['SH156 Ghat Road'], toll: '₹90 - ₹130', tollCount: 1 },

  { slug: 'coimbatore-airport-to-ooty', from: 'Coimbatore Airport', to: 'Ooty', category: 'Airport', popularity: 9, purposes: ['CJB Flight Pickup', 'Nilgiris Transfer'], origin: 'coimbatore', dest: 'nilgiris', dist: 90, time: 3.0, hw: ['NH181 Hairpin Route'], toll: '₹70 - ₹110', tollCount: 1 },
  { slug: 'ooty-to-coimbatore-airport', from: 'Ooty', to: 'Coimbatore Airport', category: 'Airport', popularity: 9, purposes: ['CJB Flight Drop'], origin: 'nilgiris', dest: 'coimbatore', dist: 90, time: 3.0, hw: ['NH181'], toll: '₹70 - ₹110', tollCount: 1 },

  // ── INTERSTATE ROUTES (`Interstate`) ──
  { slug: 'chennai-to-bengaluru', from: 'Chennai', to: 'Bengaluru', category: 'Interstate', popularity: 10, purposes: ['IT', 'Corporate', 'Interstate Business'], origin: 'chennai', dest: 'krishnagiri', dist: 350, time: 6.25, hw: ['NH48 Expressway'], toll: '₹450 - ₹550', tollCount: 5 },
  { slug: 'bengaluru-to-chennai', from: 'Bengaluru', to: 'Chennai', category: 'Interstate', popularity: 10, purposes: ['IT Return', 'Corporate', 'MAA Airport'], origin: 'krishnagiri', dest: 'chennai', dist: 350, time: 6.25, hw: ['NH48 Expressway'], toll: '₹450 - ₹550', tollCount: 5 },
  { slug: 'trichy-to-bengaluru', from: 'Trichy', to: 'Bengaluru', category: 'Interstate', popularity: 9, purposes: ['IT', 'Family', 'Interstate Transit'], origin: 'tiruchirappalli', dest: 'krishnagiri', dist: 345, time: 6.25, hw: ['NH44'], toll: '₹480 - ₹580', tollCount: 5 },
  { slug: 'bengaluru-to-trichy', from: 'Bengaluru', to: 'Trichy', category: 'Interstate', popularity: 9, purposes: ['Home Visit', 'Festival', 'Family'], origin: 'krishnagiri', dest: 'tiruchirappalli', dist: 345, time: 6.25, hw: ['NH44'], toll: '₹480 - ₹580', tollCount: 5 },
  { slug: 'salem-to-bengaluru', from: 'Salem', to: 'Bengaluru', category: 'Interstate', popularity: 9, purposes: ['Business', 'IT Commute'], origin: 'salem', dest: 'krishnagiri', dist: 205, time: 3.75, hw: ['NH44 Expressway'], toll: '₹280 - ₹340', tollCount: 3 },
  { slug: 'bengaluru-to-salem', from: 'Bengaluru', to: 'Salem', category: 'Interstate', popularity: 9, purposes: ['Home Visit', 'Business'], origin: 'krishnagiri', dest: 'salem', dist: 205, time: 3.75, hw: ['NH44 Expressway'], toll: '₹280 - ₹340', tollCount: 3 },
  { slug: 'coimbatore-to-bengaluru', from: 'Coimbatore', to: 'Bengaluru', category: 'Interstate', popularity: 9, purposes: ['IT Corridor', 'Corporate', 'Industrial'], origin: 'coimbatore', dest: 'krishnagiri', dist: 365, time: 6.5, hw: ['NH544', 'NH44'], toll: '₹520 - ₹620', tollCount: 6 },
  { slug: 'bengaluru-to-coimbatore', from: 'Bengaluru', to: 'Coimbatore', category: 'Interstate', popularity: 9, purposes: ['Textile Business', 'Family Return'], origin: 'krishnagiri', dest: 'coimbatore', dist: 365, time: 6.5, hw: ['NH44', 'NH544'], toll: '₹520 - ₹620', tollCount: 6 },
  { slug: 'chennai-to-tirupati', from: 'Chennai', to: 'Tirupati', category: 'Interstate', popularity: 10, purposes: ['Tirumala Temple', 'Pilgrimage'], origin: 'chennai', dest: 'vellore', dist: 135, time: 3.25, hw: ['NH716'], toll: '₹140 - ₹190', tollCount: 2 },
  { slug: 'tirupati-to-chennai', from: 'Tirupati', to: 'Chennai', category: 'Interstate', popularity: 10, purposes: ['Pilgrimage Return', 'MAA Airport'], origin: 'vellore', dest: 'chennai', dist: 135, time: 3.25, hw: ['NH716'], toll: '₹140 - ₹190', tollCount: 2 },
  { slug: 'vellore-to-tirupati', from: 'Vellore', to: 'Tirupati', category: 'Interstate', popularity: 9, purposes: ['CMC Patient Pilgrimage', 'Tirumala'], origin: 'vellore', dest: 'vellore', dist: 110, time: 2.5, hw: ['NH716'], toll: '₹110 - ₹150', tollCount: 2 },
  { slug: 'tirupati-to-vellore', from: 'Tirupati', to: 'Vellore', category: 'Interstate', popularity: 9, purposes: ['CMC Hospital Transfer'], origin: 'vellore', dest: 'vellore', dist: 110, time: 2.5, hw: ['NH716'], toll: '₹110 - ₹150', tollCount: 2 },
  { slug: 'coimbatore-to-palakkad', from: 'Coimbatore', to: 'Palakkad', category: 'Interstate', popularity: 8, purposes: ['Border Commute', 'Business'], origin: 'coimbatore', dest: 'coimbatore', dist: 55, time: 1.25, hw: ['NH544'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'palakkad-to-coimbatore', from: 'Palakkad', to: 'Coimbatore', category: 'Interstate', popularity: 8, purposes: ['CJB Airport', 'Medical'], origin: 'coimbatore', dest: 'coimbatore', dist: 55, time: 1.25, hw: ['NH544'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'kanyakumari-to-trivandrum', from: 'Kanyakumari', to: 'Trivandrum', category: 'Interstate', popularity: 8, purposes: ['TRV Airport', 'Kerala Transit'], origin: 'kanyakumari', dest: 'kanyakumari', dist: 90, time: 2.25, hw: ['NH66'], toll: '₹80 - ₹120', tollCount: 1 },
  { slug: 'trivandrum-to-kanyakumari', from: 'Trivandrum', to: 'Kanyakumari', category: 'Interstate', popularity: 8, purposes: ['Sunset View', 'Vivekananda Rock'], origin: 'kanyakumari', dest: 'kanyakumari', dist: 90, time: 2.25, hw: ['NH66'], toll: '₹80 - ₹120', tollCount: 1 },
];

console.log(`Generated definitions for ${phase1Routes.length} High-Value Phase 1 Routes!`);

function computeFare(distanceKm) {
  const hatchback = Math.round(distanceKm * 10);
  const sedan = Math.round(distanceKm * 12);
  const suv = Math.round(distanceKm * 16);
  const innova = Math.round(distanceKm * 19);
  const traveller = Math.round(distanceKm * 30);
  return { hatchback, sedan, suv, innova, traveller };
}

// Generate routesMaster.js
let masterJs = `export const routesMasterDataset = [\n`;
phase1Routes.forEach((r) => {
  masterJs += `  {\n`;
  masterJs += `    slug: '${r.slug}',\n`;
  masterJs += `    from: '${r.from}',\n`;
  masterJs += `    to: '${r.to}',\n`;
  masterJs += `    category: '${r.category}',\n`;
  masterJs += `    popularity: ${r.popularity},\n`;
  masterJs += `    purposes: ${JSON.stringify(r.purposes)},\n`;
  masterJs += `    published: true,\n`;
  masterJs += `    status: 'Published',\n`;
  masterJs += `    districtOrigin: '${r.origin}',\n`;
  masterJs += `    districtDestination: '${r.dest}',\n`;
  masterJs += `    estDistance: '${r.dist} km',\n`;
  masterJs += `    highway: '${r.hw[0]}',\n`;
  masterJs += `  },\n`;
});
masterJs += `];\n\n`;
masterJs += `export const publishedRoutes = routesMasterDataset.filter((r) => r.published);\n`;
masterJs += `export const routesList = publishedRoutes.map((r) => ({\n`;
masterJs += `  ...r,\n`;
masterJs += `  fromSlug: r.districtOrigin,\n`;
masterJs += `  toSlug: r.districtDestination,\n`;
masterJs += `  name: \`\${r.from} to \${r.to} One-Way Taxi\`,\n`;
masterJs += `}));\n\n`;
masterJs += `export function getRouteBySlug(slug) {\n`;
masterJs += `  if (!slug) return null;\n`;
masterJs += `  return routesMasterDataset.find((r) => r.slug.toLowerCase() === slug.toLowerCase()) || null;\n`;
masterJs += `}\n\n`;
masterJs += `export function getRouteUrl(slug) {\n`;
masterJs += `  return \`/one-way-taxi/\${slug}\`;\n`;
masterJs += `}\n\n`;
masterJs += `export function getRoutesFromOrigin(originName) {\n`;
masterJs += `  if (!originName) return [];\n`;
masterJs += `  const normalized = originName.toLowerCase();\n`;
masterJs += `  return routesMasterDataset.filter(\n`;
masterJs += `    (r) => r.from.toLowerCase().includes(normalized) || normalized.includes(r.from.toLowerCase())\n`;
masterJs += `  );\n`;
masterJs += `}\n\n`;
masterJs += `export function findMatchingRouteSlug(fromName, toName) {\n`;
masterJs += `  if (!fromName || !toName) return null;\n`;
masterJs += `  const match = routesMasterDataset.find(\n`;
masterJs += `    (r) =>\n`;
masterJs += `      r.published &&\n`;
masterJs += `      r.from.toLowerCase().includes(fromName.toLowerCase()) &&\n`;
masterJs += `      r.to.toLowerCase().includes(toName.toLowerCase())\n`;
masterJs += `  );\n`;
masterJs += `  return match ? match.slug : null;\n`;
masterJs += `}\n`;

fs.writeFileSync('./src/data/routesMaster.js', masterJs, 'utf-8');
console.log('✅ routesMaster.js updated with popularity & purposes!');

// Generate routeContent.js
let contentJs = `export const routeContent = {\n`;

phase1Routes.forEach((r) => {
  const fare = computeFare(r.dist);
  const returnSlug = phase1Routes.find((pr) => pr.from === r.to && pr.to === r.from)?.slug || null;

  contentJs += `  '${r.slug}': {\n`;
  contentJs += `    from: '${r.from}',\n`;
  contentJs += `    to: '${r.to}',\n`;
  contentJs += `    fromSlug: '${r.origin}',\n`;
  contentJs += `    toSlug: '${r.dest}',\n`;
  contentJs += `    returnRouteSlug: ${returnSlug ? `'${returnSlug}'` : 'null'},\n`;
  contentJs += `    distanceKm: ${r.dist},\n`;
  contentJs += `    timeHours: ${r.time},\n`;
  contentJs += `    distanceDisplay: '${r.dist} km',\n`;
  contentJs += `    durationDisplay: '${r.time} Hours',\n`;
  contentJs += `    category: '${r.category}',\n`;
  contentJs += `    popularity: ${r.popularity},\n`;
  contentJs += `    popularFor: ${JSON.stringify(r.purposes)},\n`;
  contentJs += `    heroTagline: 'Affordable One-Way Taxi from ${r.from} to ${r.to}. Doorstep pickup, transparent per-km rates, and 24/7 service with zero return fees.',\n`;
  contentJs += `    seoTitle: '${r.from} to ${r.to} One-Way Taxi | ₹10/km Cab Booking | SAMAYAS',\n`;
  contentJs += `    metaDescription: 'Book one-way taxi from ${r.from} to ${r.to} with SAMAYAS. Hatchback from ₹${fare.hatchback.toLocaleString('en-IN')}, Sedan ₹${fare.sedan.toLocaleString('en-IN')}, SUV ₹${fare.suv.toLocaleString('en-IN')}. 24/7 doorstep pickups.',\n`;
  contentJs += `    fare: ${JSON.stringify(fare, null, 6)},\n`;
  contentJs += `    highways: ${JSON.stringify(r.hw)},\n`;
  contentJs += `    tolls: {\n`;
  contentJs += `      costRange: '${r.toll}',\n`;
  contentJs += `      plazasCount: ${r.tollCount},\n`;
  contentJs += `      fastagSupported: true,\n`;
  contentJs += `      cashAccepted: true,\n`;
  contentJs += `      note: 'Toll plaza charges and state permit fees extra where applicable.',\n`;
  contentJs += `    },\n`;
  contentJs += `    pickupLocations: [\n`;
  contentJs += `      '${r.from} Central City / Main Junction',\n`;
  contentJs += `      '${r.from} Railway Station & Bus Stand',\n`;
  contentJs += `      '${r.from} Residential Areas & Hotels',\n`;
  contentJs += `      '${r.from} Suburbs & Outer Ring Gates',\n`;
  contentJs += `    ],\n`;
  contentJs += `    dropLocations: [\n`;
  contentJs += `      '${r.to} City Center & Main Commercial Hub',\n`;
  contentJs += `      '${r.to} Railway Station & Transit Terminals',\n`;
  contentJs += `      '${r.to} Hotels, Resorts & Residential Hubs',\n`;
  contentJs += `      '${r.to} Airport / Highway Junction Drops',\n`;
  contentJs += `    ],\n`;
  contentJs += `    placesOnTheWay: [\n`;
  contentJs += `      { name: '${r.from}', type: 'Origin', desc: 'Doorstep pickup across ${r.from}.' },\n`;
  contentJs += `      { name: 'Midway Highway Stop', type: 'Food Plaza', desc: 'Clean rest stop, tea break & multi-cuisine restaurants.' },\n`;
  contentJs += `      { name: '${r.to}', type: 'Destination', desc: 'Direct doorstep drop at any home, hotel or station in ${r.to}.' },\n`;
  contentJs += `    ],\n`;
  contentJs += `    faqs: [\n`;
  contentJs += `      {\n`;
  contentJs += `        q: 'What is the one-way taxi fare from ${r.from} to ${r.to}?',\n`;
  contentJs += `        a: 'The one-way taxi fare from ${r.from} to ${r.to} starts at ₹${fare.hatchback.toLocaleString('en-IN')} for a Hatchback, ₹${fare.sedan.toLocaleString('en-IN')} for a Sedan, and ₹${fare.suv.toLocaleString('en-IN')} for a 6-seater SUV. Per-km billing is clear with zero return charges.',\n`;
  contentJs += `      },\n`;
  contentJs += `      {\n`;
  contentJs += `        q: 'How long does a cab take from ${r.from} to ${r.to}?',\n`;
  contentJs += `        a: 'The distance from ${r.from} to ${r.to} is approx ${r.dist} km via ${r.hw[0]}. Travel duration is around ${r.time} hours.',\n`;
  contentJs += `      },\n`;
  contentJs += `      {\n`;
  contentJs += `        q: 'Is 24/7 doorstep pickup available in ${r.from}?',\n`;
  contentJs += `        a: 'Yes, SAMAYAS provides 24/7 doorstep pickup anywhere in ${r.from} including railway stations, airports, and hotels.',\n`;
  contentJs += `      },\n`;
  contentJs += `    ],\n`;
  contentJs += `    reviews: [\n`;
  contentJs += `      {\n`;
  contentJs += `        name: 'Suresh Kumar',\n`;
  contentJs += `        rating: 5,\n`;
  contentJs += `        text: 'Booked a one-way cab from ${r.from} to ${r.to}. Driver arrived 10 minutes early, vehicle was spotless, and reached smoothly in ${r.time} hours.',\n`;
  contentJs += `        route: '${r.from} to ${r.to}',\n`;
  contentJs += `      },\n`;
  contentJs += `      {\n`;
  contentJs += `        name: 'Priya Dharshini',\n`;
  contentJs += `        rating: 5,\n`;
  contentJs += `        text: 'Safe and comfortable trip from ${r.from} to ${r.to}. Zero return charges and transparent per-km bill.',\n`;
  contentJs += `        route: '${r.from} to ${r.to}',\n`;
  contentJs += `      },\n`;
  contentJs += `    ],\n`;
  contentJs += `    nearbyRoutes: [\n`;
  if (returnSlug) {
    contentJs += `      { name: '${r.to} to ${r.from}', slug: '${returnSlug}', distance: '${r.dist} km', fare: '₹${fare.hatchback.toLocaleString('en-IN')}' },\n`;
  }
  contentJs += `    ],\n`;
  contentJs += `  },\n\n`;
});

contentJs += `};\n\n`;
contentJs += `export function getRouteContent(slug) {\n`;
contentJs += `  if (!slug) return null;\n`;
contentJs += `  return routeContent[slug.toLowerCase()] || null;\n`;
contentJs += `}\n`;

fs.writeFileSync('./src/data/routeContent.js', contentJs, 'utf-8');
console.log('✅ routeContent.js updated with popularity & purposes!');
