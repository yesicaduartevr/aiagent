import { create } from 'zustand';
import { WorkspaceState } from './types';

export const useStore = create<WorkspaceState>((set) => ({
  activeTab: 'flow',
  messages: [],
  isListening: false,
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: Math.random().toString(36).substring(7),
          timestamp: new Date(),
        },
      ],
    })),
  toggleListening: () =>
    set((state) => ({ isListening: !state.isListening })),
}));