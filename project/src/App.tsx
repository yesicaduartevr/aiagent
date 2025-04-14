import React from 'react';
import { ChatPanel } from './components/ChatPanel';
import { Workspace } from './components/Workspace';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto h-[calc(100vh-3rem)] grid grid-cols-2 gap-6">
        <Workspace />
        <ChatPanel />
      </div>
    </div>
  );
}

export default App;