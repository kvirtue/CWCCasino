@JsonAccess(serializable='always' deserializable='always')
global class HotelResponse {
    @InvocableVariable
    global List<Hotel> hotels;
         
    global HotelResponse(List<Hotel> hotels) {
        this.hotels = hotels;
    }
}