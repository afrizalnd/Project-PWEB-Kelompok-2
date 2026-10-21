const inputNama = document.getElementById("nama");
const pilihan = document.getElementById("pilihan");
const inputJumlah = document.getElementById("jumlah");
const tombolHitung = document.getElementById("tombol-hitung");
const tombolHapus = document.getElementById("tombol-hapus");
const pesan = document.getElementById("pesan");
const diskon = document.getElementById("diskon");
const total = document.getElementById("total");
const statistik = document.getElementById("statistik");
const infoPembuat = document.getElementById("info-pembuat");

let jumlahPesanan = 0;

// Mengembalikan harga satuan sesuai menu
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
  // Validasi input
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

  // Diskon 10% untuk 5 item atau lebih
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

tombolHitung.addEventListener("click", hitungPesanan);

tombolHapus.addEventListener("click", function () {
  inputNama.value = "";
  inputJumlah.value = "";
  pesan.textContent = "Isi formulir lalu tekan Hitung pesanan.";
  diskon.textContent = "Diskon: -";
  total.textContent = "Rp0";
});

infoPembuat.textContent = "© 2026 Kopi Senja, Cilacap | Dibuat oleh Mahasiswa D3 Teknik Informatika";