# EmailJS Round Trip Template Setup Guide

## Step 1: Create New Template in EmailJS

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates** section
3. Click **Create New Template**
4. Name it: **"Round Trip Taxi Booking"** (or any name you prefer)

## Step 2: Template Configuration

### Template Settings:
- **Template Name:** Round Trip Taxi Booking
- **Subject:** `{{subject}}` or directly use: `Round Trip Taxi Booking Request`

### Template ID:
After creating the template, copy the **Template ID** (it will look like `template_xxxxxxx`) and update it in `BookingForm.jsx`:

```javascript
const ROUND_TRIP_TEMPLATE_ID = 'template_xxxxxxx' // Replace with your actual template ID
```

## Step 3: Email Template Format

Use the following HTML template format in EmailJS:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        .header {
            background-color: #1e3a8a;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
            background-color: #f9fafb;
        }
        .section {
            margin-bottom: 20px;
            padding: 15px;
            background-color: white;
            border-radius: 5px;
            border-left: 4px solid #fcd34d;
        }
        .label {
            font-weight: bold;
            color: #1e3a8a;
        }
        .value {
            color: #333;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 12px;
        }
        .highlight {
            background-color: #fef3c7;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Round Trip Taxi Booking Request</h2>
        </div>
        
        <div class="content">
            <!-- Booking Type -->
            <div class="section">
                <h3>Booking Information</h3>
                <p><span class="label">Trip Type:</span> <span class="value">{{trip_type}}</span></p>
                <p><span class="label">Service Type:</span> <span class="value">{{service_type}}</span></p>
                <p><span class="label">Booking Type:</span> <span class="value">{{booking_type}}</span></p>
            </div>

            <!-- Customer Details -->
            <div class="section">
                <h3>Customer Details</h3>
                <p><span class="label">Name:</span> <span class="value">{{customer_name}}</span></p>
                <p><span class="label">Phone:</span> <span class="value">{{customer_phone}}</span></p>
            </div>

            <!-- Vehicle Information -->
            <div class="section">
                <h3>Vehicle Information</h3>
                <p><span class="label">Vehicle Type:</span> <span class="value">{{vehicle_type}}</span></p>
                <p><span class="label">Car Type:</span> <span class="value">{{car_type}}</span></p>
            </div>

            <!-- Location Details -->
            <div class="section">
                <h3>Location Details</h3>
                <p><span class="label">Pickup Location:</span> <span class="value">{{pickup_location}}</span></p>
                <p><span class="label">Drop Location:</span> <span class="value">{{drop_location}}</span></p>
            </div>

            <!-- Date & Time -->
            <div class="section">
                <h3>Date & Time</h3>
                <p><span class="label">Pickup Date:</span> <span class="value">{{booking_date}}</span></p>
                <p><span class="label">Return Date:</span> <span class="value">{{return_date}}</span></p>
                <p><span class="label">Pickup Time:</span> <span class="value">{{booking_time}}</span></p>
                <p><span class="label">Service Date:</span> <span class="value">{{service_date}}</span></p>
                <p><span class="label">Service Time:</span> <span class="value">{{service_time}}</span></p>
            </div>

            <!-- Pricing Details -->
            <div class="section highlight">
                <h3>Pricing Details</h3>
                <p><span class="label">Base Fare:</span> <span class="value">{{base_fare}}</span></p>
                <p><span class="label">Driver Bata:</span> <span class="value">{{bata}}</span></p>
                <p><span class="label">Distance:</span> <span class="value">{{distance}}</span></p>
                <hr style="margin: 15px 0; border: none; border-top: 2px solid #fcd34d;">
                <p style="font-size: 18px; font-weight: bold;">
                    <span class="label">Final Amount:</span> 
                    <span class="value" style="color: #1e3a8a;">{{final_amount}}</span>
                </p>
                <p style="font-size: 16px;">
                    <span class="label">Total Amount:</span> 
                    <span class="value" style="color: #1e3a8a;">{{total_amount}}</span>
                </p>
            </div>
        </div>

        <div class="footer">
            <p>This is an automated booking confirmation email from SAMAYAS.</p>
            <p>Please contact the customer at {{customer_phone}} to confirm the booking.</p>
        </div>
    </div>
</body>
</html>
```

## Step 4: Available Variables

Here are all the variables you can use in your template:

### Booking Information:
- `{{subject}}` - Email subject (Round Trip Taxi Booking Request)
- `{{trip_type}}` - "Round Trip"
- `{{service_type}}` - "Round Trip Taxi"
- `{{booking_type}}` - "Round Trip Taxi"

### Customer Information:
- `{{customer_name}}` - Customer's full name
- `{{customer_phone}}` - Customer's phone number
- `{{from_name}}` - Same as customer_name
- `{{from_phone}}` - Same as customer_phone

### Vehicle Information:
- `{{vehicle_type}}` - Vehicle type (SEDAN, ETIOS, SUV, INNOVA)
- `{{car_type}}` - Same as vehicle_type

### Location Information:
- `{{pickup_location}}` - Pickup address
- `{{drop_location}}` - Drop address

### Date & Time:
- `{{booking_date}}` - Pickup date (DD-MM-YYYY format)
- `{{service_date}}` - Same as booking_date
- `{{date}}` - Same as booking_date
- `{{return_date}}` - Return date (DD-MM-YYYY format) - **IMPORTANT for Round Trip**
- `{{booking_time}}` - Pickup time with AM/PM
- `{{service_time}}` - Same as booking_time
- `{{time}}` - Same as booking_time

### Pricing Information:
- `{{base_fare}}` - Base fare (₹X,XXX)
- `{{bata}}` - Driver bata (₹400 or ₹500)
- `{{final_amount}}` - Final total amount (₹X,XXX)
- `{{total_amount}}` - Same as final_amount
- `{{distance}}` - Distance in km (X km)

### Email Configuration:
- `{{to_email}}` - Recipient email (samayasprem@gmail.com)

## Step 5: Simple Text Version (Alternative)

If you prefer a simpler text-based template:

```
Round Trip Taxi Booking Request

Booking Information:
Trip Type: {{trip_type}}
Service Type: {{service_type}}

Customer Details:
Name: {{customer_name}}
Phone: {{customer_phone}}

Vehicle Information:
Vehicle Type: {{vehicle_type}}

Location Details:
Pickup Location: {{pickup_location}}
Drop Location: {{drop_location}}

Date & Time:
Pickup Date: {{booking_date}}
Return Date: {{return_date}}
Pickup Time: {{booking_time}}

Pricing Details:
Base Fare: {{base_fare}}
Driver Bata: {{bata}}
Distance: {{distance}}
Final Amount: {{final_amount}}

---
This is an automated booking confirmation email from SAMAYAS.
Please contact the customer at {{customer_phone}} to confirm the booking.
```

## Step 6: Update Code After Creating Template

After creating the template in EmailJS, update the template ID in `src/components/BookingForm.jsx`:

```javascript
const ROUND_TRIP_TEMPLATE_ID = 'template_xxxxxxx' // Replace with your actual template ID
```

## Important Notes:

1. **Return Date Field**: The Round Trip template includes `{{return_date}}` which is unique to round trips
2. **Subject Line**: Can use `{{subject}}` variable or set a fixed subject
3. **All Variables**: Use double curly braces `{{variable_name}}` to insert dynamic values
4. **Testing**: Test the template by sending a test email from EmailJS dashboard
5. **Formatting**: The HTML template above is styled to match SAMAYAS branding (blue and yellow colors)

## Quick Setup Checklist:

- [ ] Create new template in EmailJS
- [ ] Copy the template ID
- [ ] Paste the HTML template above (or use simple text version)
- [ ] Add all variables using `{{variable_name}}` format
- [ ] Test the template with sample data
- [ ] Update `ROUND_TRIP_TEMPLATE_ID` in BookingForm.jsx
- [ ] Test booking flow to ensure emails are sent correctly


