import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import { Excalidraw } from '@excalidraw/excalidraw';
import { useStore } from '../store';
import 'reactflow/dist/style.css';

export const Workspace: React.FC = () => {
  const { activeTab } = useStore();

  return (
    <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      {activeTab === 'flow' ? (
        <ReactFlow>
          <Background />
        </ReactFlow>
      ) : (
        <Excalidraw />
      )}
    </div>
  );
};