import React, { useState } from 'react';

interface ImageUploadProps {
  onImageSelected: (file: File) => void;
  currentImage: File | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected, currentImage }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onImageSelected(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6 px-4">
         <span className="bg-fun-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md">1</span>
         <h2 className="text-2xl font-bold text-blue-600">
           Foto da Criança
         </h2>
      </div>
      
      <div className="relative group px-2">
        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        
        <div className={`
          border-4 border-dashed rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all duration-300
          ${preview 
            ? 'border-fun-green bg-green-50 shadow-inner' 
            : 'border-fun-blue hover:border-fun-pink hover:bg-white bg-blue-50/50 hover:shadow-lg hover:rotate-1'}
          h-72 relative overflow-hidden
        `}>
          {preview ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <img 
                src={preview} 
                alt="Preview" 
                className="max-h-full max-w-full object-contain rounded-xl shadow-md transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-2 bg-black/60 text-white px-4 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                 Trocar Foto 📸
              </div>
            </div>
          ) : (
            <div className="space-y-4 relative z-0">
              <div className="w-24 h-24 bg-white border-4 border-fun-blue text-fun-blue rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce-slow">
                <span className="text-4xl">📸</span>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-700">Toque aqui para enviar</p>
                <p className="text-base text-slate-500 mt-2 bg-white/60 inline-block px-3 py-1 rounded-full">
                  Use uma foto de rosto bem clara! 🌟
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;