# EmailJS Template Fix Guide

## 🔴 Problem: "Template: One or more dynamic variables are corrupted"

This error occurs when the EmailJS template variables don't match what the code is sending, or when variables are empty/undefined.

**Common Cause:** When using a single template for both One-Way and Round Trip with `{{#if return_date}}`, sending `return_date` as an empty string `''` for one-way trips can cause EmailJS to treat it as corrupted. The fix: Only include `return_date` in the parameters when it actually has a value (for round trips).

## ✅ Solution: Update Your EmailJS Templates

### Step 1: Go to EmailJS Dashboard
1. Visit: https://dashboard.emailjs.com/
2. Login to your account
3. Navigate to **Email Templates**

### Step 2: Fix One-Way Taxi Template (Template ID: `template_z0rx3mx`)

**Subject Line:**
```
{{subject}}
```

**Email Content (Simple Text Version):**
```
One-Way Taxi Booking Request

Booking Details:
-------------------------
Customer Name: {{customer_name}}
Phone Number: {{customer_phone}}
Vehicle Type: {{vehicle_type}}
Pickup Location: {{pickup_location}}
Drop Location: {{drop_location}}
Date: {{date}}
Time: {{time}}

Pricing Information:
-------------------------
Base Fare: {{base_fare}}
Driver Bata: {{bata}}
Distance: {{distance}}
Final Amount: {{final_amount}}

Additional Comments:
{{comments}}

---
Please contact the customer at {{customer_phone}} to confirm the booking.
```

**Email Content (HTML Version):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .section { margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #fbbf24; }
        .label { font-weight: bold; color: #1e3a8a; }
        .value { color: #333; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>{{subject}}</h2>
        </div>
        <div class="content">
            <div class="section">
                <h3>Customer Information</h3>
                <p><span class="label">Name:</span> <span class="value">{{customer_name}}</span></p>
                <p><span class="label">Phone:</span> <span class="value">{{customer_phone}}</span></p>
            </div>
            
            <div class="section">
                <h3>Booking Details</h3>
                <p><span class="label">Vehicle Type:</span> <span class="value">{{vehicle_type}}</span></p>
                <p><span class="label">Pickup Location:</span> <span class="value">{{pickup_location}}</span></p>
                <p><span class="label">Drop Location:</span> <span class="value">{{drop_location}}</span></p>
                <p><span class="label">Date:</span> <span class="value">{{date}}</span></p>
                <p><span class="label">Time:</span> <span class="value">{{time}}</span></p>
            </div>
            
            <div class="section">
                <h3>Pricing Information</h3>
                <p><span class="label">Base Fare:</span> <span class="value">{{base_fare}}</span></p>
                <p><span class="label">Driver Bata:</span> <span class="value">{{bata}}</span></p>
                <p><span class="label">Distance:</span> <span class="value">{{distance}}</span></p>
                <p style="font-size: 18px; font-weight: bold; margin-top: 10px;">
                    <span class="label">Final Amount:</span> <span class="value" style="color: #1e3a8a;">{{final_amount}}</span>
                </p>
            </div>
            
            <div class="section">
                <h3>Additional Comments</h3>
                <p>{{comments}}</p>
            </div>
        </div>
        <div class="footer">
            <p>Please contact the customer at {{customer_phone}} to confirm the booking.</p>
        </div>
    </div>
</body>
</html>
```

### Step 3: Fix Round Trip Template (Template ID: `template_z0rx3mx` - Same as One-Way)

**Note:** Currently both One-Way and Round Trip use the same template ID. You can either:
- Option A: Create a separate template for Round Trip (recommended)
- Option B: Use the same template but include `{{return_date}}` field

**Subject Line:**
```
{{subject}}
```

**Email Content (Simple Text Version):**
```
Round Trip Taxi Booking Request

Booking Details:
-------------------------
Customer Name: {{customer_name}}
Phone Number: {{customer_phone}}
Vehicle Type: {{vehicle_type}}
Pickup Location: {{pickup_location}}
Drop Location: {{drop_location}}
Pickup Date: {{date}}
Return Date: {{return_date}}
Pickup Time: {{time}}

Pricing Information:
-------------------------
Base Fare: {{base_fare}}
Driver Bata: {{bata}}
Distance: {{distance}}
Final Amount: {{final_amount}}

Additional Comments:
{{comments}}

---
Please contact the customer at {{customer_phone}} to confirm the booking.
```

**Email Content (HTML Version):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .section { margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #fbbf24; }
        .label { font-weight: bold; color: #1e3a8a; }
        .value { color: #333; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>{{subject}}</h2>
        </div>
        <div class="content">
            <div class="section">
                <h3>Customer Information</h3>
                <p><span class="label">Name:</span> <span class="value">{{customer_name}}</span></p>
                <p><span class="label">Phone:</span> <span class="value">{{customer_phone}}</span></p>
            </div>
            
            <div class="section">
                <h3>Booking Details</h3>
                <p><span class="label">Trip Type:</span> <span class="value">{{trip_type}}</span></p>
                <p><span class="label">Vehicle Type:</span> <span class="value">{{vehicle_type}}</span></p>
                <p><span class="label">Pickup Location:</span> <span class="value">{{pickup_location}}</span></p>
                <p><span class="label">Drop Location:</span> <span class="value">{{drop_location}}</span></p>
                <p><span class="label">Pickup Date:</span> <span class="value">{{date}}</span></p>
                <p><span class="label">Return Date:</span> <span class="value">{{return_date}}</span></p>
                <p><span class="label">Pickup Time:</span> <span class="value">{{time}}</span></p>
            </div>
            
            <div class="section">
                <h3>Pricing Information</h3>
                <p><span class="label">Base Fare:</span> <span class="value">{{base_fare}}</span></p>
                <p><span class="label">Driver Bata:</span> <span class="value">{{bata}}</span></p>
                <p><span class="label">Distance:</span> <span class="value">{{distance}}</span></p>
                <p style="font-size: 18px; font-weight: bold; margin-top: 10px;">
                    <span class="label">Final Amount:</span> <span class="value" style="color: #1e3a8a;">{{final_amount}}</span>
                </p>
            </div>
            
            <div class="section">
                <h3>Additional Comments</h3>
                <p>{{comments}}</p>
            </div>
        </div>
        <div class="footer">
            <p>Please contact the customer at {{customer_phone}} to confirm the booking.</p>
        </div>
    </div>
</body>
</html>
```

### Step 4: Fix Other Services Template (Template ID: `template_h3j27hg`)

**Subject Line:**
```
{{subject}}
```

**Email Content (Simple Text Version):**
```
Other Service Booking Request

Service Details:
-------------------------
Service Type: {{service_type}}
Customer Name: {{customer_name}}
Phone Number: {{customer_phone}}
Date: {{date}}
Time: {{time}}
Pickup Location: {{pickup_location}}
Drop Location: {{drop_location}}

Additional Comments:
{{comments}}

---
Please contact the customer at {{customer_phone}} to confirm the booking.
```

**Email Content (HTML Version):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .section { margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #fbbf24; }
        .label { font-weight: bold; color: #1e3a8a; }
        .value { color: #333; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>{{subject}}</h2>
        </div>
        <div class="content">
            <div class="section">
                <h3>Service Information</h3>
                <p><span class="label">Service Type:</span> <span class="value">{{service_type}}</span></p>
            </div>
            
            <div class="section">
                <h3>Customer Information</h3>
                <p><span class="label">Name:</span> <span class="value">{{customer_name}}</span></p>
                <p><span class="label">Phone:</span> <span class="value">{{customer_phone}}</span></p>
            </div>
            
            <div class="section">
                <h3>Booking Details</h3>
                <p><span class="label">Date:</span> <span class="value">{{date}}</span></p>
                <p><span class="label">Time:</span> <span class="value">{{time}}</span></p>
                <p><span class="label">Pickup Location:</span> <span class="value">{{pickup_location}}</span></p>
                <p><span class="label">Drop Location:</span> <span class="value">{{drop_location}}</span></p>
            </div>
            
            <div class="section">
                <h3>Additional Comments</h3>
                <p>{{comments}}</p>
            </div>
        </div>
        <div class="footer">
            <p>Please contact the customer at {{customer_phone}} to confirm the booking.</p>
        </div>
    </div>
</body>
</html>
```

## 📋 Complete List of Variables Being Sent

### One-Way Taxi & Round Trip Variables:
- `subject` - Email subject
- `service_type` - "One-Way Taxi" or "Round Trip Taxi"
- `booking_type` - Same as service_type
- `trip_type` - "One-Way" or "Round Trip"
- `customer_name` - Customer's name
- `customer_phone` - Customer's phone number
- `vehicle_type` - Vehicle type (SEDAN, ETIOS, SUV, INNOVA)
- `car_type` - Same as vehicle_type
- `pickup_location` - Pickup address
- `drop_location` - Drop address
- `booking_date` - Date in DD-MM-YYYY format
- `service_date` - Same as booking_date
- `date` - Same as booking_date
- `return_date` - Return date (only for Round Trip, empty for One-Way)
- `booking_time` - Time with AM/PM
- `service_time` - Same as booking_time
- `time` - Same as booking_time
- `base_fare` - Base fare (₹X,XXX)
- `bata` - Driver bata (₹400 or ₹500)
- `final_amount` - Final total amount (₹X,XXX)
- `total_amount` - Same as final_amount
- `distance` - Distance in km (X km)
- `comments` - Additional comments
- `customer_notes` - Same as comments
- `additional_notes` - Same as comments

### Other Services Variables:
- `subject` - Email subject
- `service_type` - Service type (Acting Driver, Tours & Travels, etc.)
- `booking_type` - Same as service_type
- `customer_name` - Customer's name
- `customer_phone` - Customer's phone number
- `service_date` - Date in DD-MM-YYYY format
- `service_time` - Time with AM/PM
- `booking_date` - Same as service_date
- `booking_time` - Same as service_time
- `date` - Same as service_date
- `time` - Same as service_time
- `pickup_location` - Pickup address
- `drop_location` - Drop address
- `comments` - Additional comments
- `customer_notes` - Same as comments
- `additional_notes` - Same as comments

## ✅ Important Notes:

1. **All variables are now guaranteed to be strings** - The code has been fixed to ensure no undefined/null values
2. **Use exact variable names** - Variable names are case-sensitive and must match exactly (use underscores, not hyphens)
3. **Test after updating** - After updating your templates, test both One-Way and Round Trip forms
4. **Check EmailJS logs** - If issues persist, check EmailJS dashboard → Activity → Logs for detailed error messages

## 🧪 Testing:

1. Fill out the One-Way Taxi form and submit
2. Check your email (samayasprem@gmail.com)
3. Fill out the Round Trip form and submit
4. Check your email again
5. Fill out the Other Services form and submit
6. Verify all information appears correctly in all emails

## 🔧 If Still Not Working:

1. **Check EmailJS Dashboard → Activity → Logs** for specific error messages
2. **Verify template IDs** in `src/components/BookingForm.jsx` match your EmailJS templates
3. **Check EmailJS service** is active and has remaining requests
4. **Verify email service** (Gmail, etc.) is properly connected in EmailJS

