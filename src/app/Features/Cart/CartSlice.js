import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart", // Nama slice untuk Redux store
  initialState: {
    carts: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : localStorage.setItem("carts", JSON.stringify([])), // Mengambil keranjang belanja dari localStorage atau membuat keranjang kosong jika tidak ada
    error: null, // Variabel untuk menangani kesalahan (jika ada)
  },
  reducers: {
    // Menambahkan item ke dalam keranjang belanja
    addToCarts: (state, action) => {
      if (!state.carts) {
        // Jika keranjang belanja kosong, tambahkan item baru
        state.carts = [action.payload];
      } else {
        // Jika keranjang belanja tidak kosong
        const existItem = state.carts.find((i) => i.id === action.payload.id);

        if (existItem) {
          // Jika item sudah ada, tambahkan jumlahnya dengan jumlah yang baru
          let update = state.carts.map((i) => {
            if (i.id === action.payload.id) {
              return { ...i, quantity: i.quantity + action.payload.quantity };
            } else {
              return i;
            }
          });

          state.carts = update;
        } else {
          // Jika item belum ada dalam keranjang, tambahkan item baru
          state.carts = [...state.carts, action.payload];
        }
      }

      // Simpan perubahan ke localStorage
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    // Menambah jumlah item dalam keranjang belanja
    increaseQuantity: (state, action) => {
      const item = state.carts.find((product) => product.id === action.payload.id);

      if (item && item.quantity >= 1) {
        // Jika item ditemukan dan jumlahnya lebih dari atau sama dengan 1, tambahkan jumlahnya
        item.quantity += 1;
      }

      // Simpan perubahan ke localStorage
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    // Mengurangi jumlah item dalam keranjang belanja
    decreaseQuantity: (state, action) => {
      const item = state.carts.find((product) => product.id === action.payload.id);

      if (item && item.quantity === 1) {
        // Jika jumlah item adalah 1, hapus item dari keranjang
        state.carts = state.carts.filter((product) => product.id !== action.payload.id);
      } else if (item && item.quantity > 1) {
        // Jika jumlah item lebih dari 1, kurangi jumlahnya
        item.quantity -= 1;
      }

      // Simpan perubahan ke localStorage
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    // Menghapus item dari keranjang belanja
    removeFormCart: (state, action) => {
      const item = state.carts.find((product) => product.id === action.payload.id);

      // Jika item ditemukan, hapus item dari keranjang
      if (item) {
        state.carts = state.carts.filter((product) => product.id !== action.payload.id);
      }

      // Simpan perubahan ke localStorage
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
  },
});

// Ekspor nilai default dari slice
export const cartState = (state) => state.carts;

// Ekspor reducer dan aksi (actions)
export const { addToCarts, increaseQuantity, decreaseQuantity, removeFormCart } = CartSlice.actions;

// Ekspor nilai default dari slice
export default CartSlice.reducer;
