import { createSelector } from "@reduxjs/toolkit";

// Selector untuk mendapatkan daftar item di keranjang
export const cartsItem = (state) => state.carts.carts;

// Menghitung total jumlah produk di keranjang
export const totalCartItem = createSelector(cartsItem, (items) => {
  let total = 0;
  if (items) {
    items.map((i) => (total += i.quantity));
  }
  return total;
});

// Menghitung total harga semua produk di keranjang
export const subTotalPrice = createSelector(cartsItem, (items) => {
  let total = 0;
  if (items) {
    items.map((i) => (total += i.price * i.quantity));
  }
  return total.toFixed(2);
});

// Menghitung pajak untuk pembelian produk
// Jika total pembelian lebih dari atau sama dengan 300$, tambahkan pajak sebesar 2%
export const totalTax = createSelector(subTotalPrice, (tax) => (tax * (2 / 100)).toFixed(2));

// Menghitung total harga semua produk di keranjang termasuk pajak
export const totalPrice = createSelector(subTotalPrice, totalTax, (subtotal, tax) => parseFloat(subtotal) + parseFloat(tax));