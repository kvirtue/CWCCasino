/*
 * Copyright 2022 salesforce.com, inc.
 * All Rights Reserved
 * Company Confidential
 */

import { LightningElement, api } from 'lwc';

export default class HotelReservationDetails extends LightningElement {

    @api value;

    connectedCallback() {
        console.log('🔵🔵🔵 HotelReservationDetails component LOADED 🔵🔵🔵');
        console.log('🔵 Component name: hotelReservationDetails');
        console.log('🔵 Initial value:', this.value);
        console.log('🔵 Value type:', typeof this.value);
        console.log('🔵 Value is array?', Array.isArray(this.value));
    }

    renderedCallback() {
        console.log('🔵 HotelReservationDetails RENDERED');
        console.log('🔵 Template rendered, checking DOM...');
        const card = this.template.querySelector('lightning-card');
        console.log('🔵 Card element found?', card !== null);
    }

    get hotels() {
        // The value comes from Agentforce as the HotelResponse object
        // Log for debugging
        console.log('HotelReservationDetails received value:', JSON.stringify(this.value));
        
        if (!this.value) {
            return [];
        }
        
        // If value is already an array of hotels, return it
        if (Array.isArray(this.value)) {
            return this.processHotels(this.value);
        }
        
        // If value has a hotels property, return that array
        if (this.value.hotels && Array.isArray(this.value.hotels)) {
            return this.processHotels(this.value.hotels);
        }
        
        // Otherwise return empty array
        return [];
    }

    processHotels(hotels) {
        // Add formatted properties for better display
        return hotels.map(hotel => ({
            ...hotel,
            rooms: hotel.rooms ? hotel.rooms.map(room => ({
                ...room,
                petAllowedDisplay: room.petAllowed ? 'Yes' : 'No'
            })) : []
        }));
    }

    get hasHotels() {
        return this.hotels && this.hotels.length > 0;
    }

}
