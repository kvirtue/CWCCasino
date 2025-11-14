import { LightningElement, api } from 'lwc';

export default class HotelRequestInput extends LightningElement {
    @api value;

    connectedCallback() {
        console.log('🟢🟢🟢 HotelRequestInput component LOADED 🟢🟢🟢');
        console.log('🟢 Component name: hotelRequestInput');
        console.log('🟢 Initial value:', this.value);
        console.log('🟢 Value type:', typeof this.value);
    }

    renderedCallback() {
        console.log('🟢 HotelRequestInput RENDERED');
        console.log('🟢 Template rendered, checking DOM...');
        const card = this.template.querySelector('lightning-card');
        console.log('🟢 Card element found?', card !== null);
        const inputs = this.template.querySelectorAll('lightning-input');
        console.log('🟢 Number of input fields:', inputs.length);
    }

    // Getters for form fields
    get checkInDate() {
        return this.value?.checkInDate || '';
    }

    get checkOutDate() {
        return this.value?.checkOutDate || '';
    }

    get city() {
        return this.value?.city || '';
    }

    get numberOfGuests() {
        return this.value?.numberOfGuests || 2;
    }

    // Handle input changes
    handleCheckInDateChange(event) {
        this.updateValue('checkInDate', event.target.value);
    }

    handleCheckOutDateChange(event) {
        this.updateValue('checkOutDate', event.target.value);
    }

    handleCityChange(event) {
        this.updateValue('city', event.target.value);
    }

    handleNumberOfGuestsChange(event) {
        this.updateValue('numberOfGuests', parseInt(event.target.value, 10));
    }

    updateValue(field, fieldValue) {
        const updatedValue = {
            ...this.value,
            [field]: fieldValue
        };
        
        // Dispatch custom event to notify parent
        const changeEvent = new CustomEvent('valuechange', {
            detail: { value: updatedValue }
        });
        this.dispatchEvent(changeEvent);
        
        console.log('🔵 HotelRequestInput value updated:', updatedValue);
    }
}

