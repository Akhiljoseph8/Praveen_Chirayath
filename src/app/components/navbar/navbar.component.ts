import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNavbarCollapsed = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.fixed-navbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

  navItems = [
    {
      name: 'Home',
      dropdown: null,
    },
    {
      name: 'Courses',
      dropdown: ['All Programs', 'Sponken English', 'IELTS','Employability skill'],
      showDropdown: false,
    },
    {
      name: 'Events',
      dropdown: null,
    },
    {
      name: 'About',
      dropdown: null,
    },
   
   
  ];

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  showDropdown(item: any) {
    item.showDropdown = true;
  }

  hideDropdown(item: any) {
    item.showDropdown = false;
  }
}
