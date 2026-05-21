import React from 'react';

const Exporter: React.FC<{ onExport: (data: any) => void }> = ({ onExport }) => {
    const handleExport = () => {
        // Logic to gather saber configuration and prepare for export
        const saberData = {}; // Replace with actual data gathering logic
        onExport(saberData);
    };

    return (
        <div className="exporter">
            <h2>Export Your Saber</h2>
            <button onClick={handleExport}>Export as .whacker</button>
        </div>
    );
};

export default Exporter;