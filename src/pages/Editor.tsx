import React, { useState } from 'react';
import ModelUploader from '../components/ModelUploader';
import PreviewCanvas from '../components/PreviewCanvas';
import ConfigPanel from '../components/ConfigPanel';
import Exporter from '../components/Exporter';

const Editor = () => {
    const [model, setModel] = useState(null);
    const [config, setConfig] = useState({});

    const handleModelUpload = (uploadedModel) => {
        setModel(uploadedModel);
    };

    const handleConfigChange = (newConfig) => {
        setConfig(newConfig);
    };

    return (
        <div className="editor">
            <h1>Saber Editor</h1>
            <ModelUploader onModelUpload={handleModelUpload} />
            <PreviewCanvas model={model} />
            <ConfigPanel config={config} onConfigChange={handleConfigChange} />
            <Exporter model={model} config={config} />
        </div>
    );
};

export default Editor;