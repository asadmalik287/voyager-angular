import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<header class="bg-[#FFFFFF80] border-b border-[#DCE5E0] md:py-[23px] py-[15px] md:px-0 px-[15px]">
  <nav class="max-w-[1152px] m-auto flex justify-between">
    <div
      class="border px-[16px] shadow-[0px_1px_2px_0px_#1018280D] rounded-[8px] border-[#DCE5E0] bg-[#fff] h-[44px] flex items-center lg:w-[558px]">
      <img src="/assets/images/search-header.png" class="mr-[8px]" alt="">
      <input type="text" placeholder="Search" class="w-full placeholder-[#475467] font-[400]">
    </div>

    <div class="relative">
      <!-- Profile trigger -->
      <div
        class="flex items-center cursor-pointer"
        (click)="toggleProfileMenu()"
      >
        <div class="md:mr-[12px]">
          <img
            src="/assets/images/profile-header-image.jpg"
            class="w-[42px] h-[42px] rounded-full"
            alt=""
          />
        </div>

        <div class="pt-[2px] md:block hidden">
          <p class="text-[#1B3226] font-[600]">John Smith</p>
          <p class="text-[#628473] text-[14px] font-[400]">Solo Journeyer</p>
        </div>
      </div>

      <!-- Dropdown -->
      <div
        *ngIf="isProfileMenuOpen"
        class="absolute right-0 mt-4 w-[150px] bg-white rounded-xl shadow-lg border border-[#EAECF0] z-50"
      >
        <a
          routerLink="/client/settings"
          class="block px-4 py-[10px] text-sm text-[#577566] hover:bg-gray-100"
          (click)="closeProfileMenu()"
        >
          Settings
        </a>

        <a
          class="block px-4 py-[10px]  text-sm text-[#577566] hover:bg-gray-100"
        >
          Profile
        </a>


        <button
          class="w-full text-left px-4 py-[10px]  text-sm text-[#577566] hover:bg-gray-100"
          (click)="logout()"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</header>
  `
})
export class HeaderComponent {
  isProfileMenuOpen = false;

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }

  logout() {
    console.log('Logout clicked');
    // add auth logout logic here
  }
}
