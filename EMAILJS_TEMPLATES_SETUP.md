# EmailJS Templates Setup Guide

## 📧 **Two Separate Email Templates**

This guide will help you set up two different email templates in EmailJS:
1. **One-Way Taxi Booking** template
2. **Other Services Booking** template

---

## 🔧 **Step 1: Create Templates in EmailJS Dashboard**

### **Go to EmailJS Dashboard:**
1. Visit: https://dashboard.emailjs.com/
2. Login to your account
3. Navigate to **Email Templates**

---

## 📝 **Step 2: Create "One-Way Taxi" Template**

1. Click **"Create New Template"**
2. **Template Name:** `One-Way Taxi Booking`
3. **Template ID:** Copy this ID (e.g., `template_xxxxx`) - you'll need it for the code
4. **Subject Line:** 
   ```
   One-Way Taxi Booking Request
   ```
   Or use dynamic: `{{subject}}`

5. **Email Content:**
   ```
   A message by {{customer_name}} has been received. Kindly respond at your earliest convenience.

   Booking Details:
   -------------------------
   Customer Name: {{customer_name}}
   Phone Number: {{customer_phone}}
   Date: {{date}}
   Time: {{time}}
   Pickup Location: {{pickup_location}}
   Drop Location: {{drop_location}}
   Vehicle Type: {{vehicle_type}}
   
   Pricing Information:
   -------------------------
   Base Fare: {{base_fare}}
   Additional Fare: {{add_fare}}
   Driver Bata: {{bata}}
   Distance: {{distance}}
   Final Amount: {{final_amount}}
   
   Please contact the customer to confirm the booking.
   
   Best regards,
   SAMAYAS Website
   ```

6. **Save the template** and note the **Template ID**

---

## 📝 **Step 3: Create "Other Services" Template**

1. Click **"Create New Template"** again
2. **Template Name:** `Other Services Booking`
3. **Template ID:** Copy this ID (e.g., `template_yyyyy`) - you'll need it for the code
4. **Subject Line:**
   ```
   Other Service Booking - {{service_type}}
   ```
   Or use dynamic: `{{subject}}`

5. **Email Content:**
   ```
   A message by {{customer_name}} has been received. Kindly respond at your earliest convenience.

   Booking Details:
   -------------------------
   Service Type: {{service_type}}
   Customer Name: {{customer_name}}
   Phone Number: {{customer_phone}}
   Date: {{date}}
   Time: {{time}}
   Pickup Location: {{pickup_location}}
   Drop Location: {{drop_location}}
   
   Please contact the customer to confirm the booking.
   
   Best regards,
   SAMAYAS Website
   ```

6. **Save the template** and note the **Template ID**

---

## 🔑 **Step 4: Update Code with Template IDs**

After creating both templates, update the template IDs in `src/components/BookingForm.jsx`:

```javascript
// Template IDs for different forms
const ONE_WAY_TAXI_TEMPLATE_ID = 'template_xxxxx' // Replace with your One-Way Taxi template ID
const OTHER_SERVICES_TEMPLATE_ID = 'template_yyyyy' // Replace with your Other Services template ID
```

**Location in code:** Lines 16-17 in `BookingForm.jsx`

---

## ✅ **Step 5: Verify Template Variables**

### **One-Way Taxi Template Variables:**
- `{{customer_name}}`
- `{{customer_phone}}`
- `{{date}}` or `{{booking_date}}`
- `{{time}}` or `{{booking_time}}`
- `{{pickup_location}}`
- `{{drop_location}}`
- `{{vehicle_type}}` or `{{car_type}}`
- `{{base_fare}}`
- `{{add_fare}}`
- `{{bata}}`
- `{{distance}}`
- `{{final_amount}}`
- `{{subject}}` (for dynamic subject)

### **Other Services Template Variables:**
- `{{service_type}}`
- `{{customer_name}}`
- `{{customer_phone}}`
- `{{date}}` or `{{service_date}}`
- `{{time}}` or `{{service_time}}`
- `{{pickup_location}}`
- `{{drop_location}}`
- `{{subject}}` (for dynamic subject)

---

## 🧪 **Step 6: Test Both Forms**

1. **Test One-Way Taxi Form:**
   - Fill out the One-Way Taxi form
   - Submit and check email
   - Verify all fields appear correctly

2. **Test Other Services Form:**
   - Fill out the Other Services form
   - Submit and check email
   - Verify all fields appear correctly

---

## 🔍 **Troubleshooting**

### **Issue: Template not found**
- Double-check the Template ID is correct
- Ensure the template is saved in EmailJS dashboard
- Verify you're using the correct Service ID

### **Issue: Missing fields in email**
- Check that variable names match exactly (case-sensitive)
- Verify template variables use double curly braces: `{{variable_name}}`
- Check browser console for any errors

### **Issue: Wrong template used**
- Verify `ONE_WAY_TAXI_TEMPLATE_ID` and `OTHER_SERVICES_TEMPLATE_ID` are different
- Check that the correct template ID is used in each form handler

---

## 📝 **Current Code Configuration**

The code is already set up to use two templates:
- **One-Way Taxi:** Uses `ONE_WAY_TAXI_TEMPLATE_ID`
- **Other Services:** Uses `OTHER_SERVICES_TEMPLATE_ID`

Just update the template IDs in the code after creating the templates in EmailJS!

