@JsonAccess(serializable='always' deserializable='always')
global class HotelCategory {
    @InvocableVariable
    global String star;
    
    global HotelCategory(String star) {
        this.star = star;
    }
}
