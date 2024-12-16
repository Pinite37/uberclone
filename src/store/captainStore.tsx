import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { mmkvStorage } from './storage';


type CustomLocations = {
    latitude: number;
    longitude: number;
    address: string;
    heading: number;
} | null;

interface CaptainStoreProps {
    user: any;
    location: CustomLocations;
    onDuty: boolean;
    setUser: (data: any) => void;
    setOnDuty: (data: boolean) => void;
    setLocation: (data: CustomLocations) => void;
    clearCaptainData: () => void;
}

export const useCaptainStore = create<CaptainStoreProps>()(
    persist(
        (set) => ({
            user: null,
            location: null,
            onDuty: false,
            setUser: (data) => set({ user: data }),
            setOnDuty: (data) => set({ onDuty: data }),
            setLocation: (data) => set({ location: data }),
            clearCaptainData: () => set({ user: null, location: null, onDuty: false }),
        }),
        {
            name: 'captain -store',
            partialize: (state) => ({ user: state.user }),
            storage: createJSONStorage(() => mmkvStorage)
        }
    )
)