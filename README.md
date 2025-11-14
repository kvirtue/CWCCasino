# Hotel Reservation Project

This project contains the fixed Apex classes and LWC component for hotel reservations.

## Changes Made

### Fixed Reserved Keyword Issue
- Renamed `currency` field to `currencyCode` in:
  - `force-app/main/default/classes/Hotel.cls`
  - `force-app/main/default/classes/Room.cls`
  - Updated `HotelReservation.cls` to use `currencyCode` instead of `currency`

### Created LWC Component
- `force-app/main/default/lwc/hotelReservationDetails/` - Complete component with:
  - JavaScript controller (`hotelReservationDetails.js`)
  - HTML template (`hotelReservationDetails.html`) 
  - CSS styling (`hotelReservationDetails.css`)

## Deployment Instructions

To deploy using Salesforce Workbench:

1. Package the following components:
   - All Apex classes (Hotel, Room, HotelReservation, HotelRequest, HotelResponse, HotelCategory, HotelReservationTest)
   - Lightning Component Bundle (hotelReservationDetails)

2. Use the package.xml file included in this project for deployment

## Files Included

### Apex Classes
- Hotel.cls
- Room.cls  
- HotelReservation.cls
- HotelRequest.cls
- HotelResponse.cls
- HotelCategory.cls
- HotelReservationTest.cls

### LWC Component
- hotelReservationDetails/ (complete bundle)
