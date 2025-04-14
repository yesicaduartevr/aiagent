import React from 'react';
import { Mic, MicOff } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useStore } from '../store';

export const ChatPanel: React.FC = () => {
  const { messages, isListening, addMessage, toggleListening } = useStore();
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleListen = () => {
    if (!isListening) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      SpeechRecognition.stopListening();
      if (transcript) {
        addMessage({ text: transcript, sender: 'user' });
        simulateLLMResponse(transcript);
        resetTranscript();
      }
    }
    toggleListening();
  };

  const simulateLLMResponse = (question: string) => {
    setTimeout(() => {
      const response = `Here's how we can solve ${question}...`;
      addMessage({ text: response, sender: 'assistant' });
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Math Assistant</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <button
          onClick={handleListen}
          className={`w-full flex items-center justify-center p-3 rounded-lg ${
            isListening ? 'bg-red-500' : 'bg-blue-500'
          } text-white`}
        >
          {isListening ? (
            <>
              <MicOff className="w-5 h-5 mr-2" />
              Stop Listening
            </>
          ) : (
            <>
              <Mic className="w-5 h-5 mr-2" />
              Start Listening
            </>
          )}
        </button>
        {isListening && (
          <div className="mt-2 text-sm text-gray-500 text-center">
            {transcript || 'Listening...'}
          </div>
        )}
      </div>
    </div>
  );
};