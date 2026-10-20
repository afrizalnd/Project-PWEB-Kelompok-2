// ---------- Footer ----------
const infoPembuat = document.getElementById("info-pembuat");
if (infoPembuat !== null) {
  infoPembuat.textContent = "© 2026 Kopi Senja, Cilacap | Dibuat oleh Mahasiswa D3 Teknik Informatika";
}

// ---------- Beranda: sapaan dan promo ----------
const sapaan = document.getElementById("sapaan");
const tombolPromo = document.getElementById("tombol-promo");
const promoIsi = document.getElementById("promo-isi");
let promoTampil = false;

if (sapaan !== null) {
  const jam = new Date().getHours();
  if (jam < 11) {
    sapaan.textContent = "Selamat pagi, kopi pertama hari ini?";
  } else if (jam < 15) {
    sapaan.textContent = "Selamat siang, waktunya istirahat.";
  } else if (jam < 18) {
    sapaan.textContent = "Selamat sore, senja sebentar lagi.";
  } else {
    sapaan.textContent = "Selamat malam, mau ditemani kopi?";
  }
}

if (tombolPromo !== null) {
  tombolPromo.addEventListener("click", function () {
    if (promoTampil === false) {
      promoIsi.style.display = "block";
      tombolPromo.textContent = "Sembunyikan promo";
      promoTampil = true;
    } else {
      promoIsi.style.display = "none";
      tombolPromo.textContent = "Lihat promo";
      promoTampil = false;
    }
  });
}

// ---------- Katalog Menu ----------
const kopi = document.getElementById("kopi");
const nonKopi = document.getElementById("nonkopi");
const camilan = document.getElementById("camilan");
const infoFilter = document.getElementById("info-filter");

function tampilkan(kategori) {
  kopi.style.display = "none";
  nonKopi.style.display = "none";
  camilan.style.display = "none";

  if (kategori === "kopi") {
    kopi.style.display = "block";
    infoFilter.textContent = "Menampilkan: Kopi";
  } else if (kategori === "nonkopi") {
    nonKopi.style.display = "block";
    infoFilter.textContent = "Menampilkan: Non-Kopi";
  } else if (kategori === "camilan") {
    camilan.style.display = "block";
    infoFilter.textContent = "Menampilkan: Camilan";
  } else {
    kopi.style.display = "block";
    nonKopi.style.display = "block";
    camilan.style.display = "block";
    infoFilter.textContent = "Menampilkan: Semua menu";
  }
}

if (kopi !== null) {
  document.getElementById("filter-semua").addEventListener("click", function () {
    tampilkan("semua");
  });
  document.getElementById("filter-kopi").addEventListener("click", function () {
    tampilkan("kopi");
  });
  document.getElementById("filter-nonkopi").addEventListener("click", function () {
    tampilkan("nonkopi");
  });
  document.getElementById("filter-camilan").addEventListener("click", function () {
    tampilkan("camilan");
  });
}

// ---------- Pesan Cepat ----------
const inputNama = document.getElementById("nama");
const pilihan = document.getElementById("pilihan");
const inputJumlah = document.getElementById("jumlah");
const tombolHitung = document.getElementById("tombol-hitung");
const tombolHapus = document.getElementById("tombol-hapus");
const pesan = document.getElementById("pesan");
const diskon = document.getElementById("diskon");
const total = document.getElementById("total");
const statistik = document.getElementById("statistik");

let jumlahPesanan = 0;

function ambilHarga(menu) {
  if (menu === "espresso") {
    return 18000;
  } else if (menu === "kopisusu") {
    return 25000;
  } else if (menu === "cappuccino") {
    return 27000;
  } else if (menu === "matcha") {
    return 28000;
  } else if (menu === "cokelat") {
    return 26000;
  } else if (menu === "lemontea") {
    return 18000;
  } else if (menu === "croissant") {
    return 22000;
  } else {
    return 20000;
  }
}

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function hitungPesanan() {
  if (inputNama.value === "") {
    pesan.textContent = "Nama belum diisi.";
    return;
  }
  if (inputJumlah.value === "") {
    pesan.textContent = "Jumlah belum diisi.";
    return;
  }

  const jumlah = Number(inputJumlah.value);
  if (jumlah < 1) {
    pesan.textContent = "Jumlah minimal 1.";
    return;
  }

  const harga = ambilHarga(pilihan.value);
  let subtotal = harga * jumlah;
  let potongan = 0;

  if (jumlah >= 5) {
    potongan = subtotal * 0.1;
    diskon.textContent = "Diskon 10%: -" + formatRupiah(potongan);
  } else {
    diskon.textContent = "Diskon: tidak ada";
  }

  const totalBayar = subtotal - potongan;
  pesan.textContent = inputNama.value + " memesan " + jumlah + " x " + pilihan.options[pilihan.selectedIndex].text;
  total.textContent = formatRupiah(totalBayar);

  jumlahPesanan++;
  statistik.textContent = "Pesanan dihitung: " + jumlahPesanan;
}

if (tombolHitung !== null) {
  tombolHitung.addEventListener("click", hitungPesanan);

  tombolHapus.addEventListener("click", function () {
    inputNama.value = "";
    inputJumlah.value = "";
    pesan.textContent = "Isi formulir lalu tekan Hitung pesanan.";
    diskon.textContent = "Diskon: -";
    total.textContent = "Rp0";
  });
}
