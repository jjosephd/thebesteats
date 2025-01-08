import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

interface Link {
  label: string;
  url: string;
}

@Component({
  selector: 'app-navlinks',
  imports: [CommonModule],
  templateUrl: './navlinks.component.html',
  styleUrl: './navlinks.component.css',
})
export class NavlinksComponent {
  navbarLinks: Link[] = [
    { label: 'Home', url: '/' },
    { label: 'Menu', url: '/' },
    { label: 'About', url: '#about' },
    { label: 'Contact', url: '#contact' },
  ];
}
