/**
 * @description Input wrapper class for hotel search requests
 * Used by the HotelReservation invocable action
 * 
 * PROACTIVE CONSIDERATIONS:
 * - All properties must be public or have public getters/setters for JSON serialization
 * - Use @InvocableVariable for each property to make them visible in Flow/Agent Builder
 * - Provide clear labels and descriptions for agent configuration
 * - Make optional fields nullable to avoid validation errors
 */
global class HotelRequest {
    
    /**
     * Check-in date for the hotel reservation
     * LIMITATION: Must use Date type (not DateTime) for lightning__dateType compatibility
     */
    @InvocableVariable(
        label='Check-in Date'
        description='The date when the guest will check in'
        required=true
    )
    global Date checkInDate;
    
    /**
     * Check-out date for the hotel reservation
     * LIMITATION: Must use Date type (not DateTime) for lightning__dateType compatibility
     */
    @InvocableVariable(
        label='Check-out Date'
        description='The date when the guest will check out'
        required=true
    )
    global Date checkOutDate;
    
    /**
     * City where the hotel search will be performed
     * PROACTIVE: Using String instead of custom Location object for simplicity
     */
    @InvocableVariable(
        label='City'
        description='The city where you want to find hotels (e.g., San Francisco, New York)'
        required=true
    )
    global String city;
    
    /**
     * Number of guests for the reservation
     * LIMITATION: Made optional (required=false) as agents may not always collect this
     * Default to 2 guests in the service logic if not provided
     */
    @InvocableVariable(
        label='Number of Guests'
        description='The number of guests staying at the hotel (optional, defaults to 2)'
        required=false
    )
    global Integer numberOfGuests;
    
    /**
     * Preferred room type (optional filtering)
     * PROACTIVE: Made optional as this is advanced filtering
     */
    @InvocableVariable(
        label='Room Type Preference'
        description='Preferred room type (Standard, Deluxe, Suite) - optional'
        required=false
    )
    global String roomTypePreference;
    
    /**
     * Maximum price per night (optional filtering)
     * PROACTIVE: Allow users to filter by budget
     */
    @InvocableVariable(
        label='Max Price Per Night'
        description='Maximum price per night in USD (optional budget filter)'
        required=false
    )
    global Decimal maxPricePerNight;
    
    /**
     * Minimum star rating (optional filtering)
     * LIMITATION: Using Integer instead of enum for Invocable compatibility
     */
    @InvocableVariable(
        label='Minimum Star Rating'
        description='Minimum hotel star rating (1-5) - optional'
        required=false
    )
    global Integer minStarRating;
    
    /**
     * No-arg constructor required for deserialization
     * SALESFORCE REQUIREMENT: All Apex classes used in invocable methods need no-arg constructor
     */
    global HotelRequest() {
        // BEST PRACTICE: Initialize collections to avoid null pointer exceptions
        // No collections in this class, but keeping pattern for consistency
    }
    
    /**
     * Constructor with required fields for testing
     * PROACTIVE: Makes unit testing easier
     */
    global HotelRequest(Date checkIn, Date checkOut, String cityName) {
        this.checkInDate = checkIn;
        this.checkOutDate = checkOut;
        this.city = cityName;
        this.numberOfGuests = 2; // Default
    }
    
    /**
     * @description Validates the request has minimum required data
     * @return Boolean true if valid, false otherwise
     * PROACTIVE: Validation method for internal use
     */
    global Boolean isValid() {
        return checkInDate != null 
            && checkOutDate != null 
            && String.isNotBlank(city)
            && checkOutDate > checkInDate;
    }
    
    /**
     * @description Returns a string representation for debugging
     * BEST PRACTICE: Override toString() for better logging
     */
    global override String toString() {
        return JSON.serializePretty(this);
    }
}
