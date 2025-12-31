import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-client-profile-information',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<div class="bg-[#FDFBF9] border border-[#DCE5E0] mt-[24px] p-[24px] rounded-[8px]">
   <h2 class="font-[600] text-[18px] font-[600] text-[#1B3226]">Personal Information</h2>
   <div class="flex justify-between items-center pt-[24px]">
      <div class="flex items-center gap-[12px]">
         <div><img src="/assets/images/profile-header-image.jpg" class="w-[100px] h-[100px] rounded-[8px] shadow-[0px_0.8px_2.4px_0px_rgba(16,24,40,0.1)]" alt="" srcset=""></div>
         <div>
            <p class="text-[#1B3226] text-[14px] font-[500]">Profile Picture</p>
            <p class="text-[#577566] text-[12px] pt-[8px] font-[400]">Upload JPEG, PNG or JPG. Maximum 5 MB file</p>
         </div>
      </div>
      <button class="text-white block w-fit md:mt-[0px] mt-[12px] bg-[#4B715B] cursor-pointer border-2 border-[#507860] rounded-full md:h-[48px] h-[40px] focus:ring-4 focus:ring-gray-300 shadow-[0px_1px_2px_0px_#1018280D] pl-[1px] py-[1px] pr-[20px]">
         <div class="bg-[linear-gradient(90deg,#70A987_0%,#507860_100%)] md:text-[14px] text-[14px] h-full pl-[16px] pr-[4px] flex items-center font-[400] rounded-full">
            Change Photo 
         </div>
      </button>
   </div>
   <!-- FORM -->
   <form class="pt-[24px]" action="">
      <div class="grid grid-cols-2 gap-x-[36px]">
         <div>
            <p class="text-[#1B3226] text-[14px] font-[500]">First Name</p>
            <input placeholder="John" class="w-full placeholder:text-[#1B3226] font-[500] mt-[6px] py-[8px] px-[12px] rounded-[8px] border border-[#D0D5DD] shadow-[0px_0.8px_2.4px_0px_rgba(16,24,40,0.1)]" type="text" name="" id="">
         </div>
         <div>
            <p class="text-[#1B3226] text-[14px] font-[500]">Last Name</p>
            <input placeholder="Smith" class="w-full placeholder:text-[#1B3226] font-[500] mt-[6px] py-[8px] px-[12px] rounded-[8px] border border-[#D0D5DD] shadow-[0px_0.8px_2.4px_0px_rgba(16,24,40,0.1)]" type="text" name="" id="">
         </div>
         <div class="mt-[24px]">
            <p class="text-[#1B3226] text-[14px] font-[500]">First Name</p>
            <input placeholder="John" class="w-full placeholder:text-[#1B3226] font-[500] mt-[6px] py-[8px] px-[12px] rounded-[8px] border border-[#D0D5DD] shadow-[0px_0.8px_2.4px_0px_rgba(16,24,40,0.1)]" type="text" name="" id="">
         </div>
         <div  class="mt-[24px]">
            <p class="text-[#1B3226] text-[14px] font-[500]">Last Name</p>
            <input placeholder="johnsmith@gmail.com" class="w-full placeholder:text-[#1B3226] font-[500] mt-[6px] py-[8px] px-[12px] rounded-[8px] border border-[#D0D5DD] shadow-[0px_0.8px_2.4px_0px_rgba(16,24,40,0.1)]" type="email" name="" id="">
         </div>
      </div>
   </form>
</div>
`
})
export class ProfileInformationComponent { }