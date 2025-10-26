# Automatic Email Setup for SAMAYAS Booking Form

## 🎯 **Goal: Send Emails Automatically**
When users submit the booking form, emails should be sent directly to `samayasprem@gmail.com` without opening any external email client.

## 📧 **Solution: EmailJS with Gmail**

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a **free account**
3. Verify your email address

### **Step 2: Add Gmail Service**
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail**
4. **Connect your Gmail account** (samayasprem@gmail.com)
5. **Allow all permissions** when prompted
6. **Note the Service ID** (e.g., `service_xxxxxxx`)

### **Step 3: Create Email Template**
1. Go to **Email Templates**
2. Click **Create New Template**
3. **Template ID:** `template_booking`
4. **Subject:** `New Booking Request - {{service_type}}`

**Email Content:**
```
Hello,

You have received a new booking request:

Service Type: {{service_type}}
Customer Name: {{customer_name}}
Phone Number: {{customer_phone}}
Date: {{service_date}}
Time: {{service_time}}
Pickup Location: {{pickup_location}}
Drop Location: {{drop_location}}

Please contact the customer to confirm the booking.

Best regards,
SAMAYAS Website
```

### **Step 4: Get Public Key**
1. Go to **Account** → **General**
2. Copy your **Public Key**

### **Step 5: Update Code**
Replace these values in `src/components/BookingForm.jsx` (lines 85-87):

```javascript
const serviceId = 'your_actual_service_id' // Replace with your Service ID
const templateId = 'your_actual_template_id' // Replace with your Template ID  
const publicKey = 'your_actual_public_key' // Replace with your Public Key
```

## 🔧 **Alternative: Use Formspree (Easier Setup)**

### **Step 1: Create Formspree Account**
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for free account
3. Create a new form
4. Get your form endpoint (e.g., `https://formspree.io/f/xxxxxxx`)

### **Step 2: Update Booking Form**
Replace the EmailJS code with Formspree:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  if (validateForm()) {
    setIsLoading(true)
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_type: formData.serviceType,
          customer_name: formData.name,
          customer_phone: formData.phone,
          service_date: formData.date,
          service_time: formData.time,
          pickup_location: formData.pickupLocation,
          drop_location: formData.dropLocation,
          _replyto: formData.phone + '@customer.samayas.com'
        })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            serviceType: '',
            date: '',
            time: '',
            pickupLocation: '',
            dropLocation: '',
            name: '',
            phone: ''
          })
          setIsSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Thank you for your booking request! We will contact you shortly.')
    } finally {
      setIsLoading(false)
    }
  }
}
```

## 🚀 **Current Status**
- ✅ EmailJS package installed
- ✅ Form updated with automatic email sending
- ⏳ **Next:** Configure EmailJS or Formspree account

## 📧 **How It Works After Setup**
1. **User fills form** → Clicks "Request for Quote"
2. **Form validates** all fields
3. **Email sent automatically** to samayasprem@gmail.com
4. **User sees success message** "Request Submitted!"
5. **You receive email** with booking details
6. **No external email client** opens

## 🎯 **Benefits**
- ✅ **Automatic email sending**
- ✅ **No external email client** required
- ✅ **Professional experience**
- ✅ **Reliable delivery**
- ✅ **Email templates**
- ✅ **Analytics and tracking**
