const kopi = document.getElementById("kopi");
const nonKopi = document.getElementById("nonkopi");
const camilan = document.getElementById("camilan");
const infoFilter = document.getElementById("info-filter");
const infoPembuat = document.getElementById("info-pembuat");

// Menampilkan kategori sesuai pilihan
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

infoPembuat.textContent = "© 2026 Kopi Senja, Cilacap | Dibuat oleh Mahasiswa D3 Teknik Informatika";