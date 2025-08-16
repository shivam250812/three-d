import { create } from 'zustand';

type AnimationState = {
  activeSection: 'hero' | 'details';
  setActiveSection: (section: 'hero' | 'details') => void;
};

export const useAnimationStore = create<AnimationState>((set) => ({
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
}));