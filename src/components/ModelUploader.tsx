import React, { useState } from 'react';

const ModelUploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const validExtensions = ['.fbx', '.obj'];
            const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
            if (fileExtension && validExtensions.includes(`.${fileExtension}`)) {
                setFile(selectedFile);
                setError(null);
            } else {
                setError('Invalid file type. Please upload a .fbx or .obj file.');
            }
        }
    };

    const handleUpload = () => {
        if (file) {
            // Logic to handle the file upload and conversion
            console.log('Uploading file:', file.name);
        }
    };

    return (
        <div className="model-uploader">
            <input type="file" accept=".fbx,.obj" onChange={handleFileChange} />
            {error && <p className="error">{error}</p>}
            <button onClick={handleUpload} disabled={!file}>Upload Model</button>
        </div>
    );
};

export default ModelUploader;