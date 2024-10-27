function cinemaTickets(input) {
    let studentTicketCount = 0;
    let standarTicketCount = 0;
    let kidTicketCount = 0;
    let index = 0;
    let command = input[index++];
    //index++;
    while (command !== "Finish") {
        let movieTitle = command;
        let freeSeats = Number(input[index++]);
        //index++;
        let command1 = input[index++];
        //index++;
        let takenSeats = 0;
        while (command1 !== "End") {
            let ticketType = command1;
            if (ticketType === "standard") {
                standarTicketCount++;
            }
            else if (ticketType === "student") {
                studentTicketCount++;
            }
            else if (ticketType === "kid") {
                kidTicketCount++;
            }
            takenSeats++;
            if (takenSeats === freeSeats) {
                break;
            }
            command1 = input[index++];
            //index++;
        }
        let fullPercent = takenSeats / freeSeats * 100;
        console.log(`${movieTitle} - ${fullPercent.toFixed(2)}% full.`);
        command = input[index++];
        //index++;
    }
    let totalTicketCount = studentTicketCount + standarTicketCount + kidTicketCount;
    console.log(`Total tickets: ${totalTicketCount}`);
    let studentTicketsPercent = studentTicketCount / totalTicketCount * 100;
    let standartTicketsPercent = standarTicketCount / totalTicketCount * 100;
    let kidTicketsPercent = kidTicketCount / totalTicketCount * 100;
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);