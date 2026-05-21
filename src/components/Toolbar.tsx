import React from 'react';

const Toolbar: React.FC = () => {
    const handleSave = () => {
        // Logic for saving the current saber configuration
    };

    const handleLoad = () => {
        // Logic for loading a previously saved saber configuration
    };

    const handleExport = () => {
        // Logic for exporting the saber as a .whacker file
    };

    return (
        <div className="toolbar">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleLoad}>Load</button>
            <button onClick={handleExport}>Export</button>
        </div>
    );
};

export default Toolbar;