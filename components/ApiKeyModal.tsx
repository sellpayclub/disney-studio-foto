import React, { useState, useEffect } from 'react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentKey: string;
  onSave: (key: string) => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, currentKey, onSave }) => {
  const [key, setKey] = useState(currentKey);

  useEffect(() => {
    setKey(currentKey);
  }, [currentKey]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-pop">
        <div className="bg-fun-purple p-6 border-b border-purple-400">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            ⚙️ Configurações Mágicas
          </h3>
        </div>
        
        <div className="p-6 space-y-4">
          <p className="text-gray-600 text-sm">
            Para garantir que a mágica funcione sem limites para todos, você pode usar sua própria 
            <strong> Google Gemini API Key</strong>. É gratuita!
          </p>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Sua API Key</label>
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Cole sua chave AIza..."
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-fun-purple focus:ring-2 focus:ring-fun-purple/20 outline-none transition-all"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-800">
            <strong>Como conseguir uma chave?</strong>
            <ol className="list-decimal ml-4 mt-1 space-y-1">
              <li>Acesse <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline font-bold">Google AI Studio</a>.</li>
              <li>Faça login com sua conta Google.</li>
              <li>Clique em "Create API Key".</li>
              <li>Copie e cole aqui.</li>
            </ol>
          </div>
        </div>

        <div className="p-4 bg-gray-50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition-colors"
          >
            Cancelar
          </button>
          <button 
            onClick={() => {
              onSave(key);
              onClose();
            }}
            className="px-6 py-2 bg-fun-purple text-white font-bold rounded-xl hover:bg-purple-700 transition-colors shadow-lg"
          >
            Salvar Chave
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;