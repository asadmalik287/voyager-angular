import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header.component';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  isSidebarOpen = false;
  currentStep = 0;
  progressValue = 70;

  steps = [
    {
      content: `
         <h2 class="text-[#3D536B] text-[18px] font-[600]">Description</h2>
         <p class="pt-[8px] text-[#5F7388]">Welcome to your introduction to ketamine. In this activity, we’ll cover the bare essentials: what ketamine is, how it works, and what you should know about dosage, experience length, and safety..</p>
          <div class="pt-[24px] md:flex gap-[12px]">
            <div class="md:w-8/12 text-[#3D536B]">
            Duration: <b class="text-[#3D536B]">60 minutes</b>
            </div>
            <div>
            Difficulty: <b class="text-[#3D536B]">Easy</b>
            </div>
          </div>
          <div class="pt-[24px] md:flex gap-[12px]">
            <div class="md:w-8/12 text-[#3D536B]">
            Duration: <b class="text-[#3D536B]">08</b>
            </div>
            <div>
            Difficulty: <b class="text-[#3D536B]">20 May, 2025</b>
            </div>
          </div>
            <h2 class="text-[#3D536B] pt-[24px] text-[18px] font-[600]">Required Equipment</h2>
          <div class="md:pt-[24px] pt-[8px] md:flex gap-[12px]">
            <div class="md:w-8/12 text-[#3D536B] flex items-center gap-[12px]">
            <img src="/assets/images/_Step.png" /> <b class="text-[#3D536B] font-[600]">Comfortable seating</b>
            </div>
            <div class="text-[#3D536B] md:pt-[0px] pt-[8px] flex items-center gap-[12px]">
           <img src="/assets/images/_Step.png" /> <b class="text-[#3D536B] font-[600]">Water</b>
            </div>
          </div>
          <div class="md:pt-[24px] pt-[8px] md:flex gap-[12px]">
            <div class="md:w-8/12 text-[#3D536B] flex items-center gap-[12px]">
            <img src="/assets/images/_Step.png" /> <b class="text-[#3D536B] font-[600]">Professional Therapist</b>
            </div>
            <div class="text-[#3D536B] md:pt-[0px] pt-[8px] flex items-center gap-[12px]">
           <img src="/assets/images/_Step.png" /> <b class="text-[#3D536B] font-[600]">Comfortable Seating</b>
            </div>
          </div>
         `
    },
    {
      content: `
         <h2 class="text-[#3D536B] text-[18px] font-[600]">What is Ketamine?</h2>
         <p class="pt-[8px] text-[#5F7388]">Ketamine is a unique medicine originally developed as an anesthetic. Today, it’s gaining recognition as a powerful tool in mental health care.</p>
         <p class="pt-[8px] text-[#5F7388]">When used in a therapeutic setting, ketamine can help with <b>depression, anxiety, PTSD, and chronic pain.</b> </p>
         <p class="pt-[8px] text-[#5F7388]">Unlike traditional antidepressants, which can take weeks to work, ketamine often provides relief within hours, offering hope for those who feel stuck. </p>
         <p class="pt-[8px] text-[#5F7388]">Ketamine is generally considered quite safe to consume, although it can be abused if overindulged.  </p>
         <p class="pt-[8px] text-[#5F7388]">A negative public image of Ketamine as a <b> “horse tranquilizer” </b> has led to some overblown fears stemming from it’s use among many people in the population. Incidentally, this image is not quite correct - Ketamine was developed and intended for human use since its inception, although it is also used in veterinary medicine due to the fact that the risk of fatal overdose is far far lower than with for most other anesthetics.  </p>
      `
    },
    {
      content: `
           <h2 class="text-[#3D536B] text-[18px] font-[600]">Common Dosages</h2>
           <p class="pt-[8px] text-[#5F7388]">Ketamine for therapeutic purposes is usually administered by trained professionals in forms like intravenous infusions, injection, nasal sprays, or lozenges. Rest assured, your provider will help find the right approach and dosage for you if you are taking Ketamine in a clinical context</p>
           <p class="pt-[8px] text-[#5F7388]">However, if you are buying and consuming Ketamine illicitly (which we do not recommend), then you should always consider the amounts to be consumed based on your needs, your previous experience, how you metabolize the medicine, body weight, and most importantly - the method of administration. This is because there is a huge difference between the “efficiency” with which your body can absorb Ketamine when via lozenge or nasal spray (very low to medium efficiency) versus when injected (very high efficiency). </p>
           <p class="pt-[8px] text-[#5F7388]">But, just as a general rule of thumb, here’s a <b>dosage guide</b>  breakdown:
 </p>
        <ul class="list-disc ml-6 pt-[8px]">
          <li class="text-[#3D536B] font-[600]"><b  class=" font-[600]">Low Dose (0.2–0.5 mg/kg): </b> Subtle effects, often used for relaxation and mild anxiety.</li>
          <li class="text-[#3D536B] font-[600] pt-[6px]"><b class=" font-[600]">Moderate Dose (0.5–1.0 mg/kg):</b> Dissociation begins, allowing for deep introspection.</li>
        </ul>
      `
    },
    {
      content: `
       <h2 class="text-[#3D536B] text-[18px] font-[600]">Length of Experience</h2>
       <p class="pt-[8px] text-[#5F7388]">A ketamine journey unfolds in stages:</p>
       <ul class="list-decimal
 ml-6 pt-[8px]">
          <li class="text-[#3D536B] "><b  class=" font-[600]">Onset (5–10 minutes):</b> The medicine starts to take effect. You might feel lightness in your body or subtle shifts in your perception.
</li>
          <li class="text-[#3D536B]  pt-[6px]"><b class="font-[600]">Peak (30–45 minutes):</b> Dissociation deepens, and you may feel detached from your surroundings. This is often the most profound part of the experience.
</li>
          <li class="text-[#3D536B]  pt-[6px]"><b  class=" font-[600]">Comedown (45–120 minutes):</b> Sensations gradually subside, and you begin to return to your usual state.

</li>
          <li class="text-[#3D536B]  pt-[6px]"><b  class=" font-[600]">Post-Trip (hours to days):</b> Many report lingering clarity, emotional release, or newfound perspectives.


</li>
        </ul>
             <p class="pt-[8px] text-[#5F7388]">All told, the acute experience should take something on the order of 1.5-2.5 hours, during which time you will be rather “inactive”. </p>
             <p class="pt-[8px] text-[#5F7388]">Your therapist or guide will be there to support you during each phase, ensuring your comfort and safety.</p>
      `
    },
    {
      content: `
       <h2 class="text-[#3D536B] text-[18px] font-[600]">Basic Safety</h2>
       <p class="pt-[8px] text-[#5F7388]">Here are some key tips to ensure a safe and positive experience:</p>
         <ul class="list-decimal
 ml-6 pt-[8px]">
          <li class="text-[#3D536B] ">Make sure that the <b  class="font-[600]">location of the trip</b> is somewhere where you will not not need to move at all for the length of the experience. You should be able to <b class="font-[600]">sit back or lie down comfortably</b> without being disturbed or required to attend to anything outside your own experience. If not within a clinical setting, then your own bedroom is usually ideal.

</li>
          <li class="text-[#3D536B]  pt-[6px]"><b class="font-[600]">Avoid eating 2–4 hours before</b>  your session at least, to minimize nausea.

</li>
          <li class="text-[#3D536B]  pt-[6px]"><b  class=" font-[600]">Arrange a <b  class="font-[600]">calm and quiet space</b> for your post-session recovery. Try not to drive immediately after the experience, you may feel disoriented and woozy for some time later.


</li>
          <li class="text-[#3D536B]  pt-[6px]"><b  class=" font-[600]">Inform your provider </b>about any medications or health conditions.</li>
        </ul>
          <p class="pt-[8px] text-[#5F7388] font-[600]"><i>Pro Tip: Feeling nervous is normal! Trust your care team and focus on your intention for the session.</i></p>
      `
      
    }
  ];

  openSidebar() {
    this.currentStep = 0;
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 0) this.currentStep--;
  }

  finish() {
    console.log('Finished all steps!');
    this.closeSidebar();
  }
  activities = [
    {
      title: 'Upcoming Ketamine for Depression - Psychoeducation Video',
      duration: '60 Minutes',
      steps: '05',
      completed: '14 Oct, 2025',
      image: '/assets/images/card-1.png'
    },
    {
      title: 'Upcoming Ketamine Basics',
      duration: '40 Minutes',
      steps: '04',
      completed: '10 Oct, 2025',
      image: '/assets/images/card-4.png'
    },
    {
      title: 'Completed Breathing Meditation',
      duration: '30 Minutes',
      steps: '06',
      completed: '10 Oct, 2025',
      image: '/assets/images/card-3.png'
    },
    {
      title: 'Completed Integration Journal - Immediate Post-Experience Free-Writing',
      duration: '20 Minutes',
      steps: '03',
      completed: '10 Oct, 2025',
      image: '/assets/images/card-6.png'
    },
    {
      title: 'Completed Initial Fear and Anxiety Exploration',
      duration: '50 Minutes',
      steps: '06',
      completed: '10 Oct, 2025',
      image: '/assets/images/card-2.png'
    },
    {
      title: 'Completed General Wellbeing Questionnaire (MHC-short)',
      duration: '40 Minutes',
      steps: '04',
      completed: '20 Jan, 2025',
      image: '/assets/images/card-5.png'
    },
    // Add more objects here
  ];
}
