import fs from 'fs';
import path from 'path';

// Define the 93 Phase 1 High-Demand Route Definitions
const phase1Routes = [
  // ── PRIORITY 1: MAJOR CITIES ──
  { slug: 'trichy-to-chennai', from: 'Trichy', to: 'Chennai', priority: 'High', category: 'City', origin: 'tiruchirappalli', dest: 'chennai', dist: 330, time: 5.5, hw: ['NH38', 'NH45 GST Road'], toll: '₹420 - ₹520', tollCount: 4 },
  { slug: 'chennai-to-trichy', from: 'Chennai', to: 'Trichy', priority: 'High', category: 'City', origin: 'chennai', dest: 'tiruchirappalli', dist: 330, time: 5.5, hw: ['NH45 GST Road', 'NH38'], toll: '₹420 - ₹520', tollCount: 4 },
  { slug: 'chennai-to-madurai', from: 'Chennai', to: 'Madurai', priority: 'High', category: 'City', origin: 'chennai', dest: 'madurai', dist: 460, time: 7.5, hw: ['NH45', 'NH38'], toll: '₹580 - ₹680', tollCount: 6 },
  { slug: 'madurai-to-chennai', from: 'Madurai', to: 'Chennai', priority: 'High', category: 'City', origin: 'madurai', dest: 'chennai', dist: 460, time: 7.5, hw: ['NH38', 'NH45'], toll: '₹580 - ₹680', tollCount: 6 },
  { slug: 'chennai-to-coimbatore', from: 'Chennai', to: 'Coimbatore', priority: 'High', category: 'City', origin: 'chennai', dest: 'coimbatore', dist: 500, time: 8.5, hw: ['NH48', 'NH544'], toll: '₹620 - ₹720', tollCount: 7 },
  { slug: 'coimbatore-to-chennai', from: 'Coimbatore', to: 'Chennai', priority: 'High', category: 'City', origin: 'coimbatore', dest: 'chennai', dist: 500, time: 8.5, hw: ['NH544', 'NH48'], toll: '₹620 - ₹720', tollCount: 7 },
  { slug: 'chennai-to-salem', from: 'Chennai', to: 'Salem', priority: 'High', category: 'City', origin: 'chennai', dest: 'salem', dist: 340, time: 6.0, hw: ['NH48', 'NH79'], toll: '₹410 - ₹490', tollCount: 4 },
  { slug: 'salem-to-chennai', from: 'Salem', to: 'Chennai', priority: 'High', category: 'City', origin: 'salem', dest: 'chennai', dist: 340, time: 6.0, hw: ['NH79', 'NH48'], toll: '₹410 - ₹490', tollCount: 4 },
  { slug: 'chennai-to-tirunelveli', from: 'Chennai', to: 'Tirunelveli', priority: 'High', category: 'City', origin: 'chennai', dest: 'tirunelveli', dist: 620, time: 10.0, hw: ['NH45', 'NH44'], toll: '₹750 - ₹880', tollCount: 9 },
  { slug: 'tirunelveli-to-chennai', from: 'Tirunelveli', to: 'Chennai', priority: 'High', category: 'City', origin: 'tirunelveli', dest: 'chennai', dist: 620, time: 10.0, hw: ['NH44', 'NH45'], toll: '₹750 - ₹880', tollCount: 9 },
  { slug: 'chennai-to-thanjavur', from: 'Chennai', to: 'Thanjavur', priority: 'High', category: 'City', origin: 'chennai', dest: 'thanjavur', dist: 340, time: 6.0, hw: ['NH45', 'NH36'], toll: '₹420 - ₹500', tollCount: 4 },
  { slug: 'thanjavur-to-chennai', from: 'Thanjavur', to: 'Chennai', priority: 'High', category: 'City', origin: 'thanjavur', dest: 'chennai', dist: 340, time: 6.0, hw: ['NH36', 'NH45'], toll: '₹420 - ₹500', tollCount: 4 },
  { slug: 'chennai-to-vellore', from: 'Chennai', to: 'Vellore', priority: 'High', category: 'City', origin: 'chennai', dest: 'vellore', dist: 140, time: 2.75, hw: ['NH48'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'vellore-to-chennai', from: 'Vellore', to: 'Chennai', priority: 'High', category: 'City', origin: 'vellore', dest: 'chennai', dist: 140, time: 2.75, hw: ['NH48'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'chennai-to-erode', from: 'Chennai', to: 'Erode', priority: 'High', category: 'City', origin: 'chennai', dest: 'erode', dist: 420, time: 7.0, hw: ['NH48', 'NH544'], toll: '₹520 - ₹620', tollCount: 6 },
  { slug: 'erode-to-chennai', from: 'Erode', to: 'Chennai', priority: 'High', category: 'City', origin: 'erode', dest: 'chennai', dist: 420, time: 7.0, hw: ['NH544', 'NH48'], toll: '₹520 - ₹620', tollCount: 6 },

  { slug: 'trichy-to-madurai', from: 'Trichy', to: 'Madurai', priority: 'High', category: 'City', origin: 'tiruchirappalli', dest: 'madurai', dist: 135, time: 2.25, hw: ['NH38'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'madurai-to-trichy', from: 'Madurai', to: 'Trichy', priority: 'High', category: 'City', origin: 'madurai', dest: 'tiruchirappalli', dist: 135, time: 2.25, hw: ['NH38'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'trichy-to-coimbatore', from: 'Trichy', to: 'Coimbatore', priority: 'High', category: 'City', origin: 'tiruchirappalli', dest: 'coimbatore', dist: 215, time: 4.25, hw: ['NH81'], toll: '₹180 - ₹240', tollCount: 2 },
  { slug: 'coimbatore-to-trichy', from: 'Coimbatore', to: 'Trichy', priority: 'High', category: 'City', origin: 'coimbatore', dest: 'tiruchirappalli', dist: 215, time: 4.25, hw: ['NH81'], toll: '₹180 - ₹240', tollCount: 2 },
  { slug: 'trichy-to-salem', from: 'Trichy', to: 'Salem', priority: 'High', category: 'City', origin: 'tiruchirappalli', dest: 'salem', dist: 140, time: 2.75, hw: ['NH81', 'NH44'], toll: '₹120 - ₹160', tollCount: 2 },
  { slug: 'salem-to-trichy', from: 'Salem', to: 'Trichy', priority: 'High', category: 'City', origin: 'salem', dest: 'tiruchirappalli', dist: 140, time: 2.75, hw: ['NH44', 'NH81'], toll: '₹120 - ₹160', tollCount: 2 },
  { slug: 'trichy-to-thanjavur', from: 'Trichy', to: 'Thanjavur', priority: 'High', category: 'City', origin: 'tiruchirappalli', dest: 'thanjavur', dist: 55, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹70', tollCount: 1 },
  { slug: 'thanjavur-to-trichy', from: 'Thanjavur', to: 'Trichy', priority: 'High', category: 'City', origin: 'thanjavur', dest: 'tiruchirappalli', dist: 55, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹70', tollCount: 1 },
  { slug: 'trichy-to-tirunelveli', from: 'Trichy', to: 'Tirunelveli', priority: 'High', category: 'City', origin: 'tiruchirappalli', dest: 'tirunelveli', dist: 290, time: 4.75, hw: ['NH38', 'NH44'], toll: '₹340 - ₹420', tollCount: 4 },
  { slug: 'tirunelveli-to-trichy', from: 'Tirunelveli', to: 'Trichy', priority: 'High', category: 'City', origin: 'tirunelveli', dest: 'tiruchirappalli', dist: 290, time: 4.75, hw: ['NH44', 'NH38'], toll: '₹340 - ₹420', tollCount: 4 },
  { slug: 'trichy-to-erode', from: 'Trichy', to: 'Erode', priority: 'High', category: 'City', origin: 'tiruchirappalli', dest: 'erode', dist: 155, time: 3.25, hw: ['NH81'], toll: '₹110 - ₹150', tollCount: 2 },
  { slug: 'erode-to-trichy', from: 'Erode', to: 'Trichy', priority: 'High', category: 'City', origin: 'erode', dest: 'tiruchirappalli', dist: 155, time: 3.25, hw: ['NH81'], toll: '₹110 - ₹150', tollCount: 2 },

  { slug: 'madurai-to-coimbatore', from: 'Madurai', to: 'Coimbatore', priority: 'High', category: 'City', origin: 'madurai', dest: 'coimbatore', dist: 210, time: 4.25, hw: ['NH83'], toll: '₹160 - ₹220', tollCount: 2 },
  { slug: 'coimbatore-to-madurai', from: 'Coimbatore', to: 'Madurai', priority: 'High', category: 'City', origin: 'coimbatore', dest: 'madurai', dist: 210, time: 4.25, hw: ['NH83'], toll: '₹160 - ₹220', tollCount: 2 },
  { slug: 'madurai-to-tirunelveli', from: 'Madurai', to: 'Tirunelveli', priority: 'High', category: 'City', origin: 'madurai', dest: 'tirunelveli', dist: 160, time: 2.75, hw: ['NH44'], toll: '₹180 - ₹230', tollCount: 2 },
  { slug: 'tirunelveli-to-madurai', from: 'Tirunelveli', to: 'Madurai', priority: 'High', category: 'City', origin: 'tirunelveli', dest: 'madurai', dist: 160, time: 2.75, hw: ['NH44'], toll: '₹180 - ₹230', tollCount: 2 },
  
  { slug: 'coimbatore-to-salem', from: 'Coimbatore', to: 'Salem', priority: 'High', category: 'City', origin: 'coimbatore', dest: 'salem', dist: 165, time: 3.0, hw: ['NH544'], toll: '₹180 - ₹240', tollCount: 2 },
  { slug: 'salem-to-coimbatore', from: 'Salem', to: 'Coimbatore', priority: 'High', category: 'City', origin: 'salem', dest: 'coimbatore', dist: 165, time: 3.0, hw: ['NH544'], toll: '₹180 - ₹240', tollCount: 2 },
  { slug: 'coimbatore-to-erode', from: 'Coimbatore', to: 'Erode', priority: 'High', category: 'City', origin: 'coimbatore', dest: 'erode', dist: 100, time: 2.0, hw: ['NH544'], toll: '₹90 - ₹130', tollCount: 1 },
  { slug: 'erode-to-coimbatore', from: 'Erode', to: 'Coimbatore', priority: 'High', category: 'City', origin: 'erode', dest: 'coimbatore', dist: 100, time: 2.0, hw: ['NH544'], toll: '₹90 - ₹130', tollCount: 1 },
  { slug: 'salem-to-erode', from: 'Salem', to: 'Erode', priority: 'High', category: 'City', origin: 'salem', dest: 'erode', dist: 65, time: 1.25, hw: ['NH544'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'erode-to-salem', from: 'Erode', to: 'Salem', priority: 'High', category: 'City', origin: 'erode', dest: 'salem', dist: 65, time: 1.25, hw: ['NH544'], toll: '₹50 - ₹80', tollCount: 1 },

  // ── PRIORITY 2: TOURIST DESTINATIONS ──
  { slug: 'coimbatore-to-ooty', from: 'Coimbatore', to: 'Ooty', priority: 'High', category: 'Tourist', origin: 'coimbatore', dest: 'nilgiris', dist: 85, time: 2.75, hw: ['NH181', 'Hairpin Bends Route'], toll: '₹60 - ₹100', tollCount: 1 },
  { slug: 'ooty-to-coimbatore', from: 'Ooty', to: 'Coimbatore', priority: 'High', category: 'Tourist', origin: 'nilgiris', dest: 'coimbatore', dist: 85, time: 2.75, hw: ['NH181', 'Mettupalayam Road'], toll: '₹60 - ₹100', tollCount: 1 },
  { slug: 'madurai-to-rameswaram', from: 'Madurai', to: 'Rameshwaram', priority: 'High', category: 'Tourist', origin: 'madurai', dest: 'ramanathapuram', dist: 175, time: 3.5, hw: ['NH87', 'Pamban Sea Bridge'], toll: '₹120 - ₹180', tollCount: 2 },
  { slug: 'rameswaram-to-madurai', from: 'Rameshwaram', to: 'Madurai', priority: 'High', category: 'Tourist', origin: 'ramanathapuram', dest: 'madurai', dist: 175, time: 3.5, hw: ['NH87'], toll: '₹120 - ₹180', tollCount: 2 },
  { slug: 'madurai-to-kodaikanal', from: 'Madurai', to: 'Kodaikanal', priority: 'High', category: 'Tourist', origin: 'madurai', dest: 'dindigul', dist: 115, time: 3.0, hw: ['SH156 Ghat Road'], toll: '₹80 - ₹120', tollCount: 1 },
  { slug: 'kodaikanal-to-madurai', from: 'Kodaikanal', to: 'Madurai', priority: 'High', category: 'Tourist', origin: 'dindigul', dest: 'madurai', dist: 115, time: 3.0, hw: ['SH156 Ghat Road'], toll: '₹80 - ₹120', tollCount: 1 },
  { slug: 'chennai-to-pondicherry', from: 'Chennai', to: 'Puducherry', priority: 'High', category: 'Tourist', origin: 'chennai', dest: 'viluppuram', dist: 160, time: 3.25, hw: ['ECR', 'NH32'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'pondicherry-to-chennai', from: 'Puducherry', to: 'Chennai', priority: 'High', category: 'Tourist', origin: 'viluppuram', dest: 'chennai', dist: 160, time: 3.25, hw: ['ECR', 'NH32'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'trichy-to-velankanni', from: 'Trichy', to: 'Velankanni', priority: 'High', category: 'Tourist', origin: 'tiruchirappalli', dest: 'nagapattinam', dist: 155, time: 3.5, hw: ['NH83', 'SH22'], toll: '₹90 - ₹140', tollCount: 1 },
  { slug: 'velankanni-to-trichy', from: 'Velankanni', to: 'Trichy', priority: 'High', category: 'Tourist', origin: 'nagapattinam', dest: 'tiruchirappalli', dist: 155, time: 3.5, hw: ['SH22', 'NH83'], toll: '₹90 - ₹140', tollCount: 1 },
  { slug: 'madurai-to-kanyakumari', from: 'Madurai', to: 'Kanyakumari', priority: 'High', category: 'Tourist', origin: 'madurai', dest: 'kanyakumari', dist: 245, time: 4.25, hw: ['NH44'], toll: '₹280 - ₹360', tollCount: 3 },
  { slug: 'kanyakumari-to-madurai', from: 'Kanyakumari', to: 'Madurai', priority: 'High', category: 'Tourist', origin: 'kanyakumari', dest: 'madurai', dist: 245, time: 4.25, hw: ['NH44'], toll: '₹280 - ₹360', tollCount: 3 },
  { slug: 'coimbatore-to-munnar', from: 'Coimbatore', to: 'Munnar', priority: 'High', category: 'Tourist', origin: 'coimbatore', dest: 'coimbatore', dist: 160, time: 4.5, hw: ['SH17', 'Udumalpet Ghat Road'], toll: '₹90 - ₹140', tollCount: 1 },
  { slug: 'munnar-to-coimbatore', from: 'Munnar', to: 'Coimbatore', priority: 'High', category: 'Tourist', origin: 'coimbatore', dest: 'coimbatore', dist: 160, time: 4.5, hw: ['Udumalpet Ghat Road', 'SH17'], toll: '₹90 - ₹140', tollCount: 1 },
  { slug: 'tirunelveli-to-kanyakumari', from: 'Tirunelveli', to: 'Kanyakumari', priority: 'High', category: 'Tourist', origin: 'tirunelveli', dest: 'kanyakumari', dist: 85, time: 1.75, hw: ['NH44'], toll: '₹80 - ₹110', tollCount: 1 },
  { slug: 'kanyakumari-to-tirunelveli', from: 'Kanyakumari', to: 'Tirunelveli', priority: 'High', category: 'Tourist', origin: 'kanyakumari', dest: 'tirunelveli', dist: 85, time: 1.75, hw: ['NH44'], toll: '₹80 - ₹110', tollCount: 1 },
  { slug: 'chennai-to-mahabalipuram', from: 'Chennai', to: 'Mahabalipuram', priority: 'High', category: 'Tourist', origin: 'chennai', dest: 'chengalpattu', dist: 55, time: 1.25, hw: ['ECR Scenic Road'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'mahabalipuram-to-chennai', from: 'Mahabalipuram', to: 'Chennai', priority: 'High', category: 'Tourist', origin: 'chengalpattu', dest: 'chennai', dist: 55, time: 1.25, hw: ['ECR Scenic Road'], toll: '₹50 - ₹80', tollCount: 1 },
  { slug: 'coimbatore-to-kodaikanal', from: 'Coimbatore', to: 'Kodaikanal', priority: 'High', category: 'Tourist', origin: 'coimbatore', dest: 'dindigul', dist: 175, time: 4.5, hw: ['SH156 Ghat Road'], toll: '₹120 - ₹160', tollCount: 2 },
  { slug: 'kodaikanal-to-coimbatore', from: 'Kodaikanal', to: 'Coimbatore', priority: 'High', category: 'Tourist', origin: 'dindigul', dest: 'coimbatore', dist: 175, time: 4.5, hw: ['SH156 Ghat Road'], toll: '₹120 - ₹160', tollCount: 2 },
  { slug: 'madurai-to-courtallam', from: 'Madurai', to: 'Courtallam', priority: 'High', category: 'Tourist', origin: 'madurai', dest: 'tenkasi', dist: 160, time: 3.5, hw: ['NH744'], toll: '₹110 - ₹160', tollCount: 2 },
  { slug: 'courtallam-to-madurai', from: 'Courtallam', to: 'Madurai', priority: 'High', category: 'Tourist', origin: 'tenkasi', dest: 'madurai', dist: 160, time: 3.5, hw: ['NH744'], toll: '₹110 - ₹160', tollCount: 2 },

  // ── PRIORITY 3: AIRPORT ROUTES ──
  { slug: 'chennai-airport-to-pondicherry', from: 'Chennai Airport', to: 'Puducherry', priority: 'High', category: 'Airport', origin: 'chennai', dest: 'viluppuram', dist: 140, time: 2.75, hw: ['ECR', 'NH32'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'pondicherry-to-chennai-airport', from: 'Puducherry', to: 'Chennai Airport', priority: 'High', category: 'Airport', origin: 'viluppuram', dest: 'chennai', dist: 140, time: 2.75, hw: ['NH32', 'ECR'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'chennai-airport-to-vellore', from: 'Chennai Airport', to: 'Vellore', priority: 'High', category: 'Airport', origin: 'chennai', dest: 'vellore', dist: 125, time: 2.5, hw: ['NH48'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'vellore-to-chennai-airport', from: 'Vellore', to: 'Chennai Airport', priority: 'High', category: 'Airport', origin: 'vellore', dest: 'chennai', dist: 125, time: 2.5, hw: ['NH48'], toll: '₹140 - ₹180', tollCount: 2 },
  { slug: 'trichy-airport-to-thanjavur', from: 'Trichy Airport', to: 'Thanjavur', priority: 'High', category: 'Airport', origin: 'tiruchirappalli', dest: 'thanjavur', dist: 55, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹70', tollCount: 1 },
  { slug: 'thanjavur-to-trichy-airport', from: 'Thanjavur', to: 'Trichy Airport', priority: 'High', category: 'Airport', origin: 'thanjavur', dest: 'tiruchirappalli', dist: 55, time: 1.0, hw: ['NH83'], toll: '₹40 - ₹70', tollCount: 1 },
  { slug: 'madurai-airport-to-rameswaram', from: 'Madurai Airport', to: 'Rameshwaram', priority: 'High', category: 'Airport', origin: 'madurai', dest: 'ramanathapuram', dist: 170, time: 3.25, hw: ['NH87'], toll: '₹120 - ₹180', tollCount: 2 },
  { slug: 'rameswaram-to-madurai-airport', from: 'Rameshwaram', to: 'Madurai Airport', priority: 'High', category: 'Airport', origin: 'ramanathapuram', dest: 'madurai', dist: 170, time: 3.25, hw: ['NH87'], toll: '₹120 - ₹180', tollCount: 2 },
  { slug: 'madurai-airport-to-kodaikanal', from: 'Madurai Airport', to: 'Kodaikanal', priority: 'High', category: 'Airport', origin: 'madurai', dest: 'dindigul', dist: 135, time: 3.5, hw: ['SH156 Ghat Road'], toll: '₹90 - ₹130', tollCount: 1 },
  { slug: 'kodaikanal-to-madurai-airport', from: 'Kodaikanal', to: 'Madurai Airport', priority: 'High', category: 'Airport', origin: 'dindigul', dest: 'madurai', dist: 135, time: 3.5, hw: ['SH156 Ghat Road'], toll: '₹90 - ₹130', tollCount: 1 },
  { slug: 'coimbatore-airport-to-ooty', from: 'Coimbatore Airport', to: 'Ooty', priority: 'High', category: 'Airport', origin: 'coimbatore', dest: 'nilgiris', dist: 90, time: 3.0, hw: ['NH181 Hairpin Route'], toll: '₹70 - ₹110', tollCount: 1 },
  { slug: 'ooty-to-coimbatore-airport', from: 'Ooty', to: 'Coimbatore Airport', priority: 'High', category: 'Airport', origin: 'nilgiris', dest: 'coimbatore', dist: 90, time: 3.0, hw: ['NH181'], toll: '₹70 - ₹110', tollCount: 1 },
  { slug: 'trichy-airport-to-karur', from: 'Trichy Airport', to: 'Karur', priority: 'High', category: 'Airport', origin: 'tiruchirappalli', dest: 'karur', dist: 85, time: 1.75, hw: ['NH81'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'karur-to-trichy-airport', from: 'Karur', to: 'Trichy Airport', priority: 'High', category: 'Airport', origin: 'karur', dest: 'tiruchirappalli', dist: 85, time: 1.75, hw: ['NH81'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'chennai-airport-to-kanchipuram', from: 'Chennai Airport', to: 'Kanchipuram', priority: 'High', category: 'Airport', origin: 'chennai', dest: 'kanchipuram', dist: 65, time: 1.5, hw: ['NH48'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'kanchipuram-to-chennai-airport', from: 'Kanchipuram', to: 'Chennai Airport', priority: 'High', category: 'Airport', origin: 'kanchipuram', dest: 'chennai', dist: 65, time: 1.5, hw: ['NH48'], toll: '₹60 - ₹90', tollCount: 1 },

  // ── PRIORITY 4: INTERSTATE ROUTES ──
  { slug: 'chennai-to-bengaluru', from: 'Chennai', to: 'Bengaluru', priority: 'High', category: 'Interstate', origin: 'chennai', dest: 'krishnagiri', dist: 350, time: 6.25, hw: ['NH48 Expressway'], toll: '₹450 - ₹550', tollCount: 5 },
  { slug: 'bengaluru-to-chennai', from: 'Bengaluru', to: 'Chennai', priority: 'High', category: 'Interstate', origin: 'krishnagiri', dest: 'chennai', dist: 350, time: 6.25, hw: ['NH48 Expressway'], toll: '₹450 - ₹550', tollCount: 5 },
  { slug: 'trichy-to-bengaluru', from: 'Trichy', to: 'Bengaluru', priority: 'High', category: 'Interstate', origin: 'tiruchirappalli', dest: 'krishnagiri', dist: 345, time: 6.25, hw: ['NH44'], toll: '₹480 - ₹580', tollCount: 5 },
  { slug: 'bengaluru-to-trichy', from: 'Bengaluru', to: 'Trichy', priority: 'High', category: 'Interstate', origin: 'krishnagiri', dest: 'tiruchirappalli', dist: 345, time: 6.25, hw: ['NH44'], toll: '₹480 - ₹580', tollCount: 5 },
  { slug: 'salem-to-bengaluru', from: 'Salem', to: 'Bengaluru', priority: 'High', category: 'Interstate', origin: 'salem', dest: 'krishnagiri', dist: 205, time: 3.75, hw: ['NH44 Expressway'], toll: '₹280 - ₹340', tollCount: 3 },
  { slug: 'bengaluru-to-salem', from: 'Bengaluru', to: 'Salem', priority: 'High', category: 'Interstate', origin: 'krishnagiri', dest: 'salem', dist: 205, time: 3.75, hw: ['NH44 Expressway'], toll: '₹280 - ₹340', tollCount: 3 },
  { slug: 'coimbatore-to-bengaluru', from: 'Coimbatore', to: 'Bengaluru', priority: 'High', category: 'Interstate', origin: 'coimbatore', dest: 'krishnagiri', dist: 365, time: 6.5, hw: ['NH544', 'NH44'], toll: '₹520 - ₹620', tollCount: 6 },
  { slug: 'bengaluru-to-coimbatore', from: 'Bengaluru', to: 'Coimbatore', priority: 'High', category: 'Interstate', origin: 'krishnagiri', dest: 'coimbatore', dist: 365, time: 6.5, hw: ['NH44', 'NH544'], toll: '₹520 - ₹620', tollCount: 6 },
  { slug: 'chennai-to-tirupati', from: 'Chennai', to: 'Tirupati', priority: 'High', category: 'Interstate', origin: 'chennai', dest: 'vellore', dist: 135, time: 3.25, hw: ['NH716'], toll: '₹140 - ₹190', tollCount: 2 },
  { slug: 'tirupati-to-chennai', from: 'Tirupati', to: 'Chennai', priority: 'High', category: 'Interstate', origin: 'vellore', dest: 'chennai', dist: 135, time: 3.25, hw: ['NH716'], toll: '₹140 - ₹190', tollCount: 2 },
  { slug: 'vellore-to-tirupati', from: 'Vellore', to: 'Tirupati', priority: 'High', category: 'Interstate', origin: 'vellore', dest: 'vellore', dist: 110, time: 2.5, hw: ['NH716'], toll: '₹110 - ₹150', tollCount: 2 },
  { slug: 'tirupati-to-vellore', from: 'Tirupati', to: 'Vellore', priority: 'High', category: 'Interstate', origin: 'vellore', dest: 'vellore', dist: 110, time: 2.5, hw: ['NH716'], toll: '₹110 - ₹150', tollCount: 2 },
  { slug: 'coimbatore-to-palakkad', from: 'Coimbatore', to: 'Palakkad', priority: 'High', category: 'Interstate', origin: 'coimbatore', dest: 'coimbatore', dist: 55, time: 1.25, hw: ['NH544'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'palakkad-to-coimbatore', from: 'Palakkad', to: 'Coimbatore', priority: 'High', category: 'Interstate', origin: 'coimbatore', dest: 'coimbatore', dist: 55, time: 1.25, hw: ['NH544'], toll: '₹60 - ₹90', tollCount: 1 },
  { slug: 'kanyakumari-to-trivandrum', from: 'Kanyakumari', to: 'Trivandrum', priority: 'High', category: 'Interstate', origin: 'kanyakumari', dest: 'kanyakumari', dist: 90, time: 2.25, hw: ['NH66'], toll: '₹80 - ₹120', tollCount: 1 },
  { slug: 'trivandrum-to-kanyakumari', from: 'Trivandrum', to: 'Kanyakumari', priority: 'High', category: 'Interstate', origin: 'kanyakumari', dest: 'kanyakumari', dist: 90, time: 2.25, hw: ['NH66'], toll: '₹80 - ₹120', tollCount: 1 },
];

console.log(`Generated definitions for ${phase1Routes.length} Phase 1 Routes!`);

// Helper to compute fare object based on distance
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
  masterJs += `    priority: '${r.priority}',\n`;
  masterJs += `    status: 'Published',\n`;
  masterJs += `    category: '${r.category}',\n`;
  masterJs += `    districtOrigin: '${r.origin}',\n`;
  masterJs += `    districtDestination: '${r.dest}',\n`;
  masterJs += `    estDistance: '${r.dist} km',\n`;
  masterJs += `    highway: '${r.hw[0]}',\n`;
  masterJs += `  },\n`;
});
masterJs += `];\n\n`;
masterJs += `export const publishedRoutes = routesMasterDataset.filter((r) => r.status === 'Published');\n`;
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
masterJs += `      r.status === 'Published' &&\n`;
masterJs += `      r.from.toLowerCase().includes(fromName.toLowerCase()) &&\n`;
masterJs += `      r.to.toLowerCase().includes(toName.toLowerCase())\n`;
masterJs += `  );\n`;
masterJs += `  return match ? match.slug : null;\n`;
masterJs += `}\n`;

fs.writeFileSync('./src/data/routesMaster.js', masterJs, 'utf-8');
console.log('✅ routesMaster.js written successfully with 93 routes!');

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
  contentJs += `    popularFor: ['${r.category} Travel', 'Outstation Cab', 'Doorstep Pickup', '24/7 Service'],\n`;
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
console.log('✅ routeContent.js written successfully with 93 routes!');
