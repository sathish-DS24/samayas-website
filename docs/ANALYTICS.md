# SAMAYAS Analytics Architecture (Phase 2 - Business Intelligence)

This document outlines the complete Google Tag Manager and Google Analytics 4 (GA4) architecture for the SAMAYAS React application. It serves as the definitive reference for all tracking capabilities, event payloads, funnel steps, and custom reports.

## System Architecture

Our analytics implementation transforms GA4 from a simple event tracker into a **Business Intelligence** system by leveraging:
1. **Global Session State**: A custom React utility parses and stores UTM parameters and initial landing page on first visit.
2. **Enhanced E-commerce Data Layer**: Centralized data pushes for unified payload architecture.
3. **Advanced Funnel Tracking**: Deep hooks into Google Maps and React forms to monitor drop-offs.
4. **Abandonment Detection**: `beforeunload` tracking to catch incomplete booking flows.

## Global Session Parameters

Every event automatically inherits these Session and SEO parameters, ensuring perfect attribution across the booking funnel:

| Parameter | Type | Description |
|-----------|------|-------------|
| `landing_page` | String | The first page the user landed on in their session (e.g., `/one-way-taxi/trichy`). |
| `referrer` | String | The original referring website (e.g., `google.com`). |
| `traffic_source` | String | UTM Source (e.g., `google`). Default is `direct`. |
| `traffic_medium` | String | UTM Medium (e.g., `cpc`). Default is `none`. |
| `campaign` | String | UTM Campaign name. |
| `gclid` | String | Google Click ID (for Ad attribution). |
| `fbclid` | String | Facebook Click ID (for Ad attribution). |
| `device_type` | String | `Mobile` or `Desktop` based on User Agent. |
| `screen_width` | Number | Window width on load. |
| `language` | String | Browser language. |

## Event Dictionary & The Booking Funnel

The booking funnel follows a strict logical sequence. By tracking every step, we can isolate exactly where users abandon the process.

### 1. `virtual_page_view`
Fires automatically whenever the user navigates between pages (SPA routing).
- **Trigger Condition**: Route change in `src/hooks/usePageTracking.js`.
- **Payload**: `page_location`, `page_path`, `page_title`, `current_url`.
- **GTM Trigger**: Custom Event = `virtual_page_view`.
- **GA4 Event**: `virtual_page_view` (Usually maps to standard `page_view`).

### 2. `pickup_selected`
Fires immediately after a user selects a pickup location from the Google Maps autocomplete drop-down.
- **Trigger Condition**: Autocomplete `place_changed` event in `BookingForm.jsx`.
- **Payload**: `pickup_city`, `pickup_lat`, `pickup_lng`.
- **GTM Trigger**: Custom Event = `pickup_selected`.
- **GA4 Event**: `pickup_selected`.

### 3. `destination_selected`
Fires immediately after a user selects a drop location.
- **Trigger Condition**: Autocomplete `place_changed` event.
- **Payload**: `destination_city`, `destination_lat`, `destination_lng`.
- **GTM Trigger**: Custom Event = `destination_selected`.
- **GA4 Event**: `destination_selected`.

### 4. `vehicle_selected`
Fires when the user changes their vehicle selection (Debounced).
- **Trigger Condition**: `<select>` `onChange` handler.
- **Payload**: `vehicle_type`.
- **GTM Trigger**: Custom Event = `vehicle_selected`.
- **GA4 Event**: `vehicle_selected`.

### 5. `travel_date_selected` & `return_date_selected`
Fires when the user modifies their travel dates (Debounced).
- **Trigger Condition**: Date input `onChange` handler.
- **Payload**: `travel_date`, `return_date`, `trip_type`.
- **GTM Trigger**: Custom Event = `travel_date_selected`, `return_date_selected`.
- **GA4 Event**: `travel_date_selected`, `return_date_selected`.

### 6. `route_search`
Fires simultaneously with the fare calculation when Google Maps successfully returns the route matrix.
- **Trigger Condition**: Calculation success in `handleOneWaySubmit` / `handleRoundTripSubmit`.
- **Payload**: `pickup_city`, `destination_city`, `distance_km`, `duration_minutes`, `fare`, `trip_type`.
- **GTM Trigger**: Custom Event = `route_search`.
- **GA4 Event**: `route_search`.

### 7. `fare_calculated`
Fires immediately after `route_search` when the modal displaying the calculated fare appears.
- **Payload**: Complete booking data object.
- **GTM Trigger**: Custom Event = `fare_calculated`.
- **GA4 Event**: `fare_calculated`.

### 8. `booking_submit` (Enhanced)
Fires when the user clicks the final "Confirm Booking" button (Before EmailJS API).
- **Payload**: Full enhanced payload (Coordinates, Fare, Distance, Vehicle, UTMs, Landing Page).
- **Example Payload**:
  ```json
  {
    "event": "booking_submit",
    "pickup_city": "Trichy Airport",
    "pickup_lat": 10.7654,
    "pickup_lng": 78.7180,
    "destination_city": "Madurai",
    "distance_km": 135,
    "fare": 2500,
    "vehicle": "INNOVA",
    "trip_type": "one-way",
    "landing_page": "/airport-taxi/trichy",
    "traffic_source": "google",
    "traffic_medium": "cpc",
    "campaign": "summer_sale"
  }
  ```
- **GTM Trigger**: Custom Event = `booking_submit`.
- **GA4 Event**: `booking_submit`.

### 9. `booking_completed`
Fires when the EmailJS API successfully confirms the booking email was sent.
- **Payload**: All data from `booking_submit`, plus `booking_id` (e.g., `bkg_168475892`) and `currency`.
- **Google Ads Conversion Mapping**: Connected via `trackAdsConversion()`.
- **GTM Trigger**: Custom Event = `booking_completed`.
- **GA4 Event**: `booking_completed` / `purchase`.

### 10. `booking_abandoned`
Fires if the user closes the browser tab/window *after* starting a booking, but *before* reaching `booking_completed`.
- **Trigger Condition**: `beforeunload` event listener.
- **Payload**: `last_completed_step`, `pickup_city`, `destination_city`, `vehicle`.
- **GTM Trigger**: Custom Event = `booking_abandoned`.
- **GA4 Event**: `booking_abandoned`.

---

## Secondary Events

- **`whatsapp_click`**: Fired when user clicks floating WhatsApp widget or WhatsApp contact links.
- **`phone_click`**: Fired when user taps phone numbers to call.
- **`social_click`**: Fired when user clicks Facebook/Instagram/YouTube links.
- **`cta_clicked`**: Generic click tracker for primary buttons (e.g., "Book Now").
- **`faq_expand`**: Fired when user opens an accordion item in the FAQ section.
- **`error` / `booking_failed`**: System failures, Google Maps API rejections, or EmailJS errors.

---

## GA4 Business Intelligence Reporting Guide

To answer critical business questions, create a new **Exploration** in Google Analytics 4 (Explore -> Blank). Add the necessary Dimensions and Metrics as defined below.

*Note: You MUST register your new custom parameters (e.g., `landing_page`, `pickup_city`, `distance_km`, `fare`) as **Custom Dimensions / Metrics** in GA4 Admin (Admin > Custom Definitions) before they will appear in Explorations.*

### 1. Which district landing page generates the most bookings?
- **Dimensions**: `landing_page`
- **Metrics**: `Event count`
- **Filter**: `Event name` exactly matches `booking_completed`
- **Visualization**: Table

### 2. Which pickup/destination cities have the highest demand?
- **Dimensions**: `pickup_city`, `destination_city`
- **Metrics**: `Event count`
- **Filter**: `Event name` exactly matches `route_search` or `booking_completed`
- **Visualization**: Table or Heatmap

### 3. Which routes generate the highest revenue?
- **Dimensions**: `pickup_city`, `destination_city`
- **Metrics**: `Event value` (or Custom Metric `fare`)
- **Filter**: `Event name` exactly matches `booking_completed`

### 4. Which vehicle has the highest conversion rate?
- **Dimensions**: `vehicle`
- **Metrics**: `Event count`
- **Setup**: Create two columns. One filtered by `vehicle_selected` and one filtered by `booking_completed`. The ratio between the two is your conversion rate by vehicle type.

### 5. Where do users abandon the booking process?
- **Dimensions**: `last_completed_step`
- **Metrics**: `Event count`
- **Filter**: `Event name` exactly matches `booking_abandoned`
- **Insight**: If `fare_calculated` is the highest abandonment step, your pricing may be causing friction. If `pickup_selected` is highest, the Google Maps autocomplete might be failing for users.

### 6. Which Google Ads campaign generates the most completed bookings?
- **Dimensions**: `Session source / medium`, `campaign`
- **Metrics**: `Conversions`
- **Filter**: `traffic_source` exactly matches `google` AND `traffic_medium` exactly matches `cpc`

### 7. Which organic landing pages generate completed bookings?
- **Dimensions**: `landing_page`
- **Metrics**: `Conversions`
- **Filter**: `Session medium` exactly matches `organic` (or Custom Dimension `traffic_source` = `direct` / `organic`)

### 8. Which service converts best?
- **Dimensions**: `trip_type` (One Way Taxi, Round Trip, Other Services)
- **Metrics**: `Event count`
- **Filter**: `Event name` exactly matches `booking_completed`

### 9. Which travel dates have the highest booking volume?
- **Dimensions**: `travel_date`
- **Metrics**: `Event count`
- **Filter**: `Event name` exactly matches `booking_submit`

---

## Technical Testing & Verification Checklist

- [ ] **GTM Payload Validation**: Use GTM Preview Mode (`tagassistant.google.com`) and verify that `route_search` contains `distance_km` and `fare`.
- [ ] **SEO Integrity**: Add `?utm_source=test&utm_medium=test` to the URL. Navigate to a second page, then submit a booking. Verify `traffic_source` equals `test` (proving sessionStorage persistence works).
- [ ] **Abandonment Beacon**: Start a booking (select a vehicle). Close the tab. Open GTM Preview Mode history and look for `booking_abandoned` fired via `beforeunload`.
- [ ] **Coordinate Precision**: Ensure `pickup_lat` and `pickup_lng` are float values, not strings.
- [ ] **Debounce Safety**: Rapidly change the Travel Date 5 times. Ensure `travel_date_selected` only fires once after a 1-second pause.
