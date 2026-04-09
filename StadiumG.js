const StandingTicket = require("./StandingTicket");


class StadiumG {
    constructor(name,ticket) {
        this.name = name;
        this.ticket = [];
    }
    
    addTicket(ticket) {
        this.ticket.push(ticket);
        console.log(`Added ${ticket.name} to the ${this.StadiumGName}`);
    }

    removeTicket(ticket) {
        const index = this.ticket.indexOf(ticket);
        if (index !== -1) {
            this.ticket.splice(index, 1); 
            console.log(`Removed ${ticket.name} from ${this.StadiumGName}`);
        } else {
            console.log("Ticket not found!");
        }
    }
}

module.exports = StadiumG;


