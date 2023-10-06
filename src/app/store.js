import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import CartSlice from "./Features/Cart/CartSlice";
import CategorySlice from "./Features/Category/CategorySlice";
import ProductSlice from "./Features/Product/ProductSlice";
let initialState = {};
let store = configureStore(
  {
    reducer: {
      categories: CategorySlice,
      products: ProductSlice,
      carts: CartSlice,
    },
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

setupListeners(store.dispatch);

export default store;

// Kode di atas digunakan untuk mengonfigurasi dan membuat store Redux menggunakan Redux Toolkit.

// 1. `configureStore` adalah fungsi dari Redux Toolkit yang digunakan untuk membuat store Redux. Dalam kasus ini, reducer untuk store diatur melalui objek konfigurasi. Tiga reducer yang digunakan adalah `CategorySlice`, `ProductSlice`, dan `CartSlice`.

// 2. `initialState` adalah objek yang berisi nilai awal untuk state Redux. Dalam contoh ini, objek ini kosong, artinya state awal untuk semua reducer juga kosong.

// 3. `store` adalah hasil dari pemanggilan `configureStore` dengan parameter reducer dan initialState. Store ini digunakan untuk menyimpan dan mengelola state aplikasi.

// 4. `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` adalah ekstensi Redux DevTools yang digunakan untuk memantau dan debug state Redux di browser. Ini memungkinkan pengembang untuk melihat perubahan state dan aksi Redux secara visual.

// 5. `setupListeners(store.dispatch)` adalah fungsi yang disediakan oleh Redux Toolkit untuk menghubungkan listeners untuk aksi Redux yang berasal dari ekstensi Query. Ini memungkinkan Redux Toolkit untuk berinteraksi dengan pengaturan lainnya yang terkait dengan ekstensi Query.

// Jadi, secara keseluruhan, kode tersebut mengatur store Redux dengan reducer dari `CategorySlice`, `ProductSlice`, dan `CartSlice`. Ini memungkinkan pengelolaan state aplikasi dan interaksi dengan Redux DevTools untuk pengembangan dan pemantauan.