@JsonAccess(serializable='always' deserializable='always')
global class Hotel {
    @InvocableVariable
    global String name;
    
    @InvocableVariable
    global String address;
    
    @InvocableVariable
    global List<Room> rooms;
    
    @InvocableVariable
    global HotelCategory hotelCategory;
    
    global Hotel(String name, String address, List<Room> rooms, HotelCategory hotelCategory) {
        this.name = name;
        this.address = address;
        this.rooms = rooms;
        this.hotelCategory = hotelCategory;
    }
}
