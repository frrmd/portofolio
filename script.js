// // ============================================
// // FUNGSI DASAR (Hamburger Menu & Form Handler)
// // ============================================

// // Hamburger Menu
// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-menu');

// if (hamburger && navMenu) {
//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         navMenu.classList.toggle('active');
//     });

//     // Tutup menu saat klik link
//     navMenu.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', () => {
//             hamburger.classList.remove('active');
//             navMenu.classList.remove('active');
//         });
//     });

//     // Tutup jika klik luar
//     document.addEventListener('click', (e) => {
//         if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
//             hamburger.classList.remove('active');
//             navMenu.classList.remove('active');
//         }
//     });
// }

// // Form Contact Handler
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const formData = new FormData(contactForm);
//         const name = formData.get('name') || contactForm.querySelector('input[name="name"]').value;
//         const email = formData.get('email') || contactForm.querySelector('input[name="email"]').value;
//         const message = formData.get('message') || contactForm.querySelector('textarea[name="message"]').value;

//         if (name && email && message) {
//             alert(`Terima kasih, ${name}! Pesan dari ${email} diterima. (Demo - integrasikan backend untuk real.)`);
//             contactForm.reset();
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         } else {
//             alert('Mohon isi semua field!');
//         }
//     });
// }

// // ============================================
// // EFEK ANIMASI SCROLL (Intersection Observer)
// // ============================================
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
            
//             // Efek khusus untuk About Section
//             if (entry.target.classList.contains('about')) {
//                 triggerAboutEffects();
//             }
            
//             // Efek khusus untuk Projects
//             if (entry.target.classList.contains('projects')) {
//                 triggerProjectEffects();
//             }
//         }
//     });
// }, observerOptions);

// // Observe sections utama
// document.querySelectorAll('section').forEach(section => {
//     observer.observe(section);
// });

// // Observe sub-elemen About
// const aboutIntro = document.querySelector('.about-intro');
// const profileImg = document.querySelector('.profile-img');
// const aboutSkills = document.querySelector('.about-skills');
// if (aboutIntro) observer.observe(aboutIntro);
// if (profileImg) observer.observe(profileImg);
// if (aboutSkills) observer.observe(aboutSkills);

// document.querySelectorAll('.project-card').forEach(card => {
//     observer.observe(card);
// });

// // ============================================
// // EFEK BARU: Typewriter untuk Hero Title
// // ============================================
// function typewriterEffect() {
//     const heroH1 = document.querySelector('.hero h1');
//     if (heroH1) {
//         heroH1.classList.add('typewriter');
        
//         // Hapus class setelah animasi selesai (untuk reset jika perlu)
//         setTimeout(() => {
//             heroH1.classList.remove('typewriter');
//             heroH1.style.borderRight = 'none'; // Hapus cursor
//         }, 3000); // Durasi typewriter
//     }
// }

// // Jalankan typewriter saat load
// window.addEventListener('load', typewriterEffect);

// // ============================================
// // EFEK BARU: Parallax untuk Hero
// // ============================================
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         const rate = scrolled * -0.5; // Speed parallax
//         hero.style.transform = `translateY(${rate}px)`;
//     }
// });

// // ============================================
// // EFEK BARU: Foto Profil - Bounce & Glow
// // ============================================
// function triggerAboutEffects() {
//     const profileImg = document.querySelector('.profile-img');
//     if (profileImg && !profileImg.classList.contains('bounce-in')) {
//         profileImg.classList.add('bounce-in'); // Animasi masuk bounce
        
//         // Tambah glow saat fully visible
//         setTimeout(() => {
//             profileImg.classList.add('glow');
//         }, 800);
//     }
// }

// // Hover Glow & Scale untuk Foto (event listener)
// const profileImg = document.querySelector('.profile-img');
// if (profileImg) {
//     profileImg.addEventListener('mouseenter', () => {
//         profileImg.classList.add('glow');
//     });
    
//     profileImg.addEventListener('mouseleave', () => {
//         profileImg.classList.remove('glow');
//     });
// }

// // ============================================
// // EFEK BARU: Counter untuk Skills
// // ============================================
// function triggerAboutEffects() { // Update fungsi di atas
//     // ... (kode bounce sebelumnya)
    
//     // Counter Skills
//     const skillTags = document.querySelectorAll('.skill-tag');
//     const totalSkills = skillTags.length; // Misal 5
//     let count = 0;
//     const counterInterval = setInterval(() => {
//         if (count <= totalSkills) {
//             // Tambah class animate ke skill tags secara bertahap
//             if (skillTags[count]) {
//                 skillTags[count].style.opacity = '1';
//                 skillTags[count].classList.add('animate');
//             }
//             count++;
//         } else {
//             clearInterval(counterInterval);
//         }
//     }, 200); // Delay 200ms per skill
// }

// // Inisialisasi: Hide skills awal
// document.querySelectorAll('.skill-tag').forEach(tag => {
//     tag.style.opacity = '0';
//     tag.style.transition = 'opacity 0.5s ease';
// });

// // ============================================
// // EFEK BARU: Ripple pada Project Cards
// // ============================================
// function triggerProjectEffects() {
//     document.querySelectorAll('.project-card').forEach(card => {
//         card.addEventListener('click', (e) => {
//             createRipple(e, card);
//         });
//     });
// }

// function createRipple(event, element) {
//     const circle = document.createElement('span');
//     const diameter = Math.max(element.clientWidth, element.clientHeight);
//     const radius = diameter / 2;

//     circle.style.width = circle.style.height = `${diameter}px`;
//     circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
//     circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
//     circle.classList.add('ripple');

//     const ripple = element.getElementsByClassName('ripple')[0];
//     if (ripple) {
//         ripple.remove();
//     }

//     element.appendChild(circle);
//     setTimeout(() => {
//         circle.remove();
//     }, 600);
// }

// // ============================================
// // INISIALISASI TAMBAHAN SAAT LOAD
// // ============================================
// window.addEventListener('load', () => {
//     // Trigger efek awal jika diperlukan
//     typewriterEffect();
    
//     // Tambah class loaded untuk body jika ada preloader
//     document.body.classList.add('loaded');
// });