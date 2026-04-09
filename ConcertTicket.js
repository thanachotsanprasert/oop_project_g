class ConcertTicket {
  constructor(zone, price) {
    this.zone = zone;
    this.price = price;
  }

  generalFoodProvide(){
  console.log(`${this.zone} Get Free Water and Crips`);
  }
}

module.exports = ConcertTicket;