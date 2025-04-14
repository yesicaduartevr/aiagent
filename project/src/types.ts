export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface WorkspaceState {
  activeTab: 'flow' | 'drawing';
  messages: Message[];
  isListening: boolean;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  toggleListening: () => void;
}