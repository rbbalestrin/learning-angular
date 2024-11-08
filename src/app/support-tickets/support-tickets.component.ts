import { Component } from '@angular/core';
import { NewTicketComponent } from '../server-tickets/new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [
    {
      id: '1',
      title: 'Help with my account',
      request: 'I need help logging in',
      status: 'open',
    },
  ];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    };
    this.tickets.push(ticket);
  }
  onClose(id: string) {
    this.tickets = this.tickets.map((t) => {
      if (t.id === id) {
        return { ...t, status: 'closed' };
      }
      return t;
    });
  }
}
