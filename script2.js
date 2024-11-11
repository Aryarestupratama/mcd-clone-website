// Variabel global untuk menyimpan item yang ditambahkan ke keranjang
var keranjangItems = [];

// Fungsi untuk menambahkan item ke keranjang
function tambahKeKeranjang(item) {
  // Cek apakah item sudah ada di keranjang
  var existingItem = keranjangItems.find(function (i) {
    return i.caption === item.caption;
  });

  if (existingItem) {
    // Jika item sudah ada, tambahkan jumlahnya
    existingItem.quantity++;
  } else {
    // Jika item belum ada, tambahkan item baru ke keranjang
    item.quantity = 1;
    keranjangItems.push(item);
  }

  // Memperbarui tampilan keranjang
  updateKeranjang();
}

// Fungsi untuk menghapus item dari keranjang
function hapusDariKeranjang(index) {
  keranjangItems.splice(index, 1);
  updateKeranjang();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateKeranjang() {
  var keranjangItemsContainer = document.querySelector(".keranjang-items-container");
  keranjangItemsContainer.innerHTML = ""; // Menghapus isi container sebelum memperbarui

  if (keranjangItems.length === 0) {
    // Jika keranjang kosong, tampilkan pesan kosong
    keranjangItemsContainer.textContent = "Keranjang kosong";
  } else {
    // Membuat elemen untuk setiap item dalam keranjang
    keranjangItems.forEach(function (item, index) {
      var itemElement = document.createElement("div");
      itemElement.classList.add("keranjang-item");

      var itemName = document.createElement("span");
      itemName.textContent = item.caption; // Menampilkan nama menu

      var itemQuantity = document.createElement("span");
      itemQuantity.textContent = "Jumlah: " + item.quantity; // Menampilkan jumlah

      // Menambahkan nama menu dan jumlah ke dalam container
      itemElement.appendChild(itemName);
      itemElement.appendChild(itemQuantity);

      // Menambahkan tombol untuk menghapus item dari keranjang
      var hapusButton = document.createElement("button");
      hapusButton.textContent = "Hapus";
      hapusButton.addEventListener("click", function () {
        hapusDariKeranjang(index);
      });
      itemElement.appendChild(hapusButton);

      keranjangItemsContainer.appendChild(itemElement);
    });
  }
}

// Memperbarui tampilan keranjang saat halaman dimuat
updateKeranjang();

// Fungsi untuk menampilkan detail item saat di klik
function showItemDetails(menuItemIndex) {
  // Menampilkan kotak putih dengan detail item
  var itemDetailsContainer = document.querySelector(".item-details-container");
  itemDetailsContainer.style.display = "block";

  // Menampilkan harga acak untuk item tersebut
  var harga = generateRandomPrice();
  var hargaText = document.querySelector(".harga");
  hargaText.textContent = "Harga: $" + harga.toFixed(2);

  // Menambahkan event listener untuk tombol "Masukkan Keranjang"
  var masukkanKeranjangButton = document.querySelector(".masukkan-keranjang-button");
  masukkanKeranjangButton.addEventListener("click", function () {
    var jumlahInput = document.querySelector(".jumlah-input");
    var jumlah = parseInt(jumlahInput.value);
    if (!isNaN(jumlah) && jumlah > 0) {
      var totalHarga = jumlah * harga;
      alert("Item telah dimasukkan ke keranjang! Total harga: $" + totalHarga.toFixed(2));
      // Menyembunyikan kotak putih setelah item dimasukkan ke keranjang
      itemDetailsContainer.style.display = "none";

      // Menambahkan item ke keranjang
      tambahKeKeranjang({ caption: "Nama Item", price: totalHarga }); // Ubah "Nama Item" sesuai dengan item yang dipilih
    } else {
      alert("Masukkan jumlah yang valid!");
    }
  });
}

// Mengambil semua elemen menu-item
var menuItems = document.querySelectorAll(".menu-item");

// Menambahkan event listener untuk setiap menu-item
menuItems.forEach(function (item, index) {
  item.addEventListener("click", function () {
    showItemDetails(index);
  });
});

// Mengambil elemen ikon silang
var closeIcon = document.querySelector(".close-icon");

// Menambahkan event listener untuk klik pada ikon silang
closeIcon.addEventListener("click", function () {
  // Menyembunyikan kotak item details dan isinya
  var itemDetailsContainer = document.querySelector(".item-details-container");
  itemDetailsContainer.style.display = "none";
});

// Mengambil elemen ikon keranjang
var keranjangIcon = document.querySelector(".keranjang-icon");

// Menambahkan event listener untuk klik pada ikon keranjang
keranjangIcon.addEventListener("click", function () {
  var keranjangContainer = document.querySelector(".keranjang-container");
  if (keranjangContainer.style.display === "none" || keranjangContainer.style.display === "") {
    keranjangContainer.style.display = "block";
  } else {
    keranjangContainer.style.display = "none";
  }
});

// Fungsi untuk menghasilkan harga acak
function generateRandomPrice() {
  // Misalnya, kita akan menggunakan rentang harga antara $5 dan $15
  return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}
