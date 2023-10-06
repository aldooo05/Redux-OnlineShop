export const axiosErrorHandler = (error) => {
  if (
    ["ERR_BAD_REQUEST", "ERR_NETWORK", "ERR_BAD_RESPONSE"].includes(error.code)
  ) {
    if (
      typeof error.response.data == "undefined" ||
      !error.response.data.message
    ) {
      return { message: error.message };
    }
  }
  return error.response.data;
};

// Fungsi `axiosErrorHandler` digunakan untuk menangani kesalahan yang mungkin terjadi saat menggunakan Axios, yang adalah pustaka JavaScript untuk membuat permintaan HTTP. Dalam konteks ini:
// 1. Jika kesalahan memiliki kode `"ERR_BAD_REQUEST"`, `"ERR_NETWORK"`, atau `"ERR_BAD_RESPONSE"`, fungsi akan memeriksa apakah tanggapan kesalahan tersebut tidak memiliki properti `data` atau properti `message`. Jika salah satu dari keduanya tidak ada, maka fungsi akan mengembalikan objek dengan properti `message` berisi pesan kesalahan dari objek kesalahan tersebut.

// 2. Jika kesalahan tidak memiliki salah satu kode yang disebutkan di atas, atau jika tanggapan kesalahan memiliki properti `data` dan `message`, fungsi akan mengembalikan objek yang berisi data respons kesalahan tersebut.

// Dengan kata lain, fungsi ini bertujuan untuk memberikan penanganan kesalahan yang lebih spesifik tergantung pada jenis kesalahan yang diterima dari permintaan HTTP. Jika kesalahan tidak memiliki pesan yang jelas atau jika jenis kesalahan tertentu terjadi, fungsi ini memberikan pesan kesalahan yang lebih deskriptif untuk membantu pemrosesan kesalahan lebih lanjut.