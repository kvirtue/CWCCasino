@JsonAccess(serializable='always' deserializable='always')
global class Room {
    @InvocableVariable
    global String type;
    
    @InvocableVariable
    global Integer available;
    
    @InvocableVariable
    global Double discountPercentage;
    
    @InvocableVariable
    global Long price;
    
    @InvocableVariable
    global Boolean petAllowed;
    
    global Room(String type, Integer available, Double discountPercentage, Long price, Boolean petAllowed) {
        this.type = type;
        this.available = available;
        this.discountPercentage = discountPercentage;
        this.price = price;
        this.petAllowed = petAllowed;
    }
}
