import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { NewTicketComponent } from '../server-tickets/new-ticket/new-ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {}
