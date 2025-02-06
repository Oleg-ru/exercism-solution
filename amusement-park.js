/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
function createVisitor(name, age, ticketId) {
    return {name, age, ticketId};
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
function revokeTicket(visitor) {
    visitor['ticketId'] = null;
    return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function ticketStatus(tickets, ticketId) {
    const ticket = tickets[ticketId];
    switch (ticket) {
        case undefined:
            return 'unknown ticket id';
        case null:
            return 'not sold';
        default:
            return `sold to ${tickets[ticketId]}`;
    }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function simpleTicketStatus(tickets, ticketId) {
    return tickets[ticketId] ?? 0 ? tickets[ticketId] : 'invalid ticket !!!';
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
function gtcVersion(visitor) {
    return visitor.gtc?.version;
}

//console.log(createVisitor('Legin', 18, 'DF560KG'));
//console.log(revokeTicket(createVisitor('Legin', 18, 'DF560KG')));


const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};
/*
console.log(ticketStatus(tickets, 'RE90VAW7'));;
// => 'unknown ticket id'

console.log(ticketStatus(tickets, '0H2AZ123'));;
// => 'not sold'

console.log(ticketStatus(tickets, '23LA9T41'));;
// => 'sold to Verena Nardi'
*/

//console.log(simpleTicketStatus(tickets, 'RE90VAW7'))
//console.log(simpleTicketStatus(tickets, '0H2AZ123'))
//console.log(simpleTicketStatus(tickets, '23LA9T41'))

const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
        signed: true,
        version: '2.1',
    },
};

console.log(gtcVersion(visitorNew));;
// => '2.1'

const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};

console.log(gtcVersion(visitorOld));;
// => undefined