import { create } from "zustand";

const useLoggedInUser = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useLoggedInUser;
