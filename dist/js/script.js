// Navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// klik di luar 
window.addEventListener('click',function(e){
    if (e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
}
});

// dark mode

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light';
    }
});

// pindah toggle

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }


//   function toggleModal(show) {
//     const modal = document.getElementById("orderModal");
//     if (!modal) return;

//     if (show) {
//       modal.classList.remove("hidden");
//       modal.classList.add("flex");
//       document.body.classList.add("overflow-hidden");
//     } else {
//       modal.classList.add("hidden");
//       modal.classList.remove("flex");
//       document.body.classList.remove("overflow-hidden");
//     }
//   }

//   function formatTanggal(tgl) {
//     if (!tgl) return "-";
//     const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
//     const d = new Date(tgl);
//     return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
//   }

// // send email

// const contactForm = document.getElementById("contact-form");
// const loader = document.getElementById("loader");
// loader.style.display = "none";

// contactForm.addEventListener("submit", function(e){
//     loader.style.display = "block";
//     e.preventDefault();
//     const url = e.target.action;
//     const formData = new FormData(contactForm);

//     fetch(url, {
//         method: "post",
//         body: formData,
//         mode: "no-cors",
//     })

//     .then(() => {
//         loader.style.display = "none";
//         // url thankyou
//         window.location.href = "/thankyou.html";
//     })
//     .catch((e) => alert("Error occurd"));
// })

// function sendToWhatsApp(event) {
//   event.preventDefault();

//   const kategori_client = document.getElementById("kategori_client")?.value || "-";
//   const nama = document.getElementById("nama")?.value || "-";
//   const email = document.getElementById("email")?.value || "-";
//   const layan = document.getElementById("layan")?.value || "-";
//   const detail = document.getElementById("detail")?.value || "-";
//   const deadline = document.getElementById("deadline")?.value || "-";
//   const prioritas = document.getElementById("prioritas")?.value || "-";
//   const phone = document.getElementById("phone")?.value || "-";

//   if (!nama || !layan || !detail) {
//     alert("Mohon isi Nama, Layanan, dan Detail Project dengan benar!");
//     return;
//   }

//   const message =
//     `*FORM ORDER JASA FREELANCE*\n\n` +
//     `👤 *Data Klien*\n` +
//     `• Kategori Klien: ${kategori_client}\n` +
//     `• Nama: ${nama}\n` +
//     `• Email: ${email}\n\n` +
//     `💼 *Detail Layanan*\n` +
//     `• Jenis Layanan: ${layan}\n` +
//     `• Prioritas Project: ${prioritas}\n` +
//     `• Deadline: ${deadline}\n` +
//     `• Phone : ${phone}\n\n` +
//     `📄 *Detail Project*\n${detail}\n\n` +
//     `🙏 Mohon dicek kak, saya tunggu konfirmasinya.`;

//   const nomor = "628884913919";
//   const url = `https://wa.me/${nomor}?text=${encodeURIComponent(message)}`;

//   window.open(url, "_blank");
//   toggleModal(false);
// }

