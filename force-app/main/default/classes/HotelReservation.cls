@JsonAccess(serializable='always' deserializable='always')
global class HotelReservation {
    @InvocableMethod(label='Find hotels ' description='Find Available Hotels')
    global static List<HotelResponse> findHotels(List<HotelRequest> req) {
        // Hardcoding the data for example and not focusing on how we retrieve it. 
        // However, consider that we are receiving available hotels from a service, 
        // and then iterating through the data to generate the final response.

        List<HotelResponse> hotelResponseList = new List<HotelResponse>();
        
        Room r1 = new Room('DELUX', 2, 15.15d, 2000l, false);
        List<Room> rooms = new List<Room>();
        rooms.add(r1);
        
        HotelCategory fourStar = new HotelCategory('four');
        Hotel hotel1 = new Hotel('Sahara Hotels', 'Gacchibowli Hyderabad', rooms, fourStar);
        HotelCategory fiveStar = new HotelCategory('five');
        Hotel hotel2 = new Hotel('Taj Vivanta', 'Kokapet', rooms, fiveStar);
        List<Hotel> hotels = new List<Hotel>();
        hotels.add(hotel1);
        hotels.add(hotel2);
        
        HotelResponse hotelresponse = new HotelResponse(hotels);
        hotelResponseList.add(hotelresponse);
        
        return hotelResponseList;
    }    
}