// pesan ayam
const pesan = document.querySelector('#pesan');
const ayamGeprek = document.querySelector('#ayamgeprek');
const tingkatKepedasan = document.querySelector("#tingkatkepedasan");
const minuman = document.querySelector('#minuman');
const metodePesanan = document.querySelector('#metodepesanan');
const namaPemesan = document.querySelector('#namapemesan');
const pesanKePenjual = document.querySelector('#pesankepenjual');
let harga = 0;

pesan.addEventListener('click', function () {
  // Pilihan Ayam Geprek
  const hargaAyamGeprek = {
    'Ayam Geprek Saja': 10000,
    'Ayam Geprek + Nasi': 14000,
    'Ayam Geprek + Sayur': 14000,
    'Ayam Geprek Komplit': 17000,
  }
  const pilihAyamGeprek = ayamGeprek.value;
  const ayamDipilih = hargaAyamGeprek[pilihAyamGeprek];

  // Pilihan Tingkat Kepedasan
  const pilihTingkatKepedasan = tingkatKepedasan.value;

  // Pilihan Minuman
  const hargaMinuman = {
    'Tidak Ada': 0,
    'Teh Es': 5000,
    'Jasjus': 5000,
    'Nutrisari': 5000
  }
  const pilihMinuman = minuman.value;
  const minumanDipilih = hargaMinuman[pilihMinuman];

  // Pilihan Pesanan
  const hargaOngkir = {
    'Ambil Ditempat': 0,
    'Diantar ke Alamat': 5000
  }
  const pilihMetodePesanan = metodePesanan.value;
  const pesananDipilih = hargaOngkir[pilihMetodePesanan];

  // Nama Pemesan
  const valueNamaPemesan = namaPemesan.value;

  // Pesan ke Penjual
  const valuePesanKePenjual = pesanKePenjual.value;

  // Total Harga
  const totalHarga = ayamDipilih + minumanDipilih + pesananDipilih;

  // Menuju WhatsApp
  const phone = '6285263916607';
  const pesanPelanggan = `*Format Pembelian Warung Ojo Lali*
Nama Pemesan: ${valueNamaPemesan}
Makanan yang dipilih: ${pilihAyamGeprek}
Tingkat kepedasan: ${pilihTingkatKepedasan}
Minuman yang dipilih: ${pilihMinuman}
Metode pesanan: ${pilihMetodePesanan}
Total harga: ${totalHarga}
Pesan ke penjual: ${valuePesanKePenjual}

Terimakasih 👋`;

  const encodedPesan = encodeURIComponent(pesanPelanggan);
  const memesan = `https://api.whatsapp.com/send?phone=${phone}&text= ${encodedPesan}`;

  window.open(memesan, '_blank');
  // alert(totalHarga);
})