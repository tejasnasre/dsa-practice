function generate_ticket(n) {
  let ticket_code = "A";

  for (let i = 2; i <= n; i++) {
    let newTicketCode = "";
    let currentChar = ticket_code[0];
    let charCount = 0;

    for (let j = 0; j < ticket_code.length; j++) {
      if (ticket_code[j] == currentChar) {
        charCount += 1;
      } else {
        newTicketCode += charCount + currentChar;
        currentChar = ticket_code[j];
        charCount = 1;
      }
    }

    newTicketCode += charCount + currentChar;
    // Update the ticket code for the next iteration
    ticket_code = newTicketCode;
  }

  return ticket_code;
}

let code = generate_ticket(5);
console.log(code);
