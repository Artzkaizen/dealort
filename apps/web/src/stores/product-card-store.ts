import { create } from "zustand";

// /home/morse-code/projects/dealort/apps/web/src/stores/product-card-store.ts

export interface Product {
  id: string;
  logo?: string;
  name: string;
  tagline: string;
  category: string[]; // up to 5
  url: string;
  isDev: boolean;
  isOpenSource: boolean;
  rating: number; // 0.0 - 5.0
}

interface ProductCardState {
  product: Product | null;
  isLoading: boolean;

  // actions
  setProduct: (product: Product) => void;
  clearProduct: () => void;
  setLoading: (loading: boolean) => void;
  updateProduct: (patch: Partial<Product>) => void;

  // optional helper: fetch product by id (example implementation)
  fetchProductById: (id: string) => Promise<void>;
}

type SetStateFn = (
  partial:
    | Partial<ProductCardState>
    | ((state: ProductCardState) => Partial<ProductCardState>)
) => void;

export const useProductCardStore = create<ProductCardState>(
  (set: SetStateFn, get: () => ProductCardState) => ({
    product: null,
    isLoading: false,

    setProduct: (product: Product) => set({ product }),
    clearProduct: () => set({ product: null }),
    setLoading: (loading: boolean) => set({ isLoading: loading }),
    updateProduct: (patch: Partial<Product>) =>
      set((state) => ({
        product: state.product ? { ...state.product, ...patch } : state.product,
      })),

    fetchProductById: async (id: string) => {
      set({ isLoading: true });
      try {
        const res = await fetch(`/api/products/${encodeURIComponent(id)}`);
        if (!res.ok) throw new Error(`Failed to fetch product ${id}`);
        const data = (await res.json()) as Product;
        set({ product: data });
      } catch (err) {
        // handle/log error as needed
        set({ product: null });
        throw err;
      } finally {
        set({ isLoading: false });
      }
    },
  })
);
