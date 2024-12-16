import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { mmkvStorage } from './storage';


type CustomLocations = {
    latitude: number;
    longitude: number;
    address: string;
} | null;

interface UserStoreProps {
    user: any;
    location: CustomLocations;
    outOfRange: boolean;
    setUser: (data: any) => void;
    setOutOfRange: (data: boolean) => void;
    setLocation: (data: CustomLocations) => void;
    clearData: () => void;
}

export const useUserStore = create<UserStoreProps>()(
    persist(
        (set) => ({
            user: null,
            location: null,
            outOfRange: false,
            setUser: (data) => set({ user: data }),
            setOutOfRange: (data) => set({ outOfRange: data }),
            setLocation: (data) => set({ location: data }),
            clearData: () => set({ user: null, location: null, outOfRange: false }),
        }),
        {
            name: 'user-store',
            partialize: (state) => ({ user: state.user }),
            storage: createJSONStorage(() => mmkvStorage)
        }
    )
)