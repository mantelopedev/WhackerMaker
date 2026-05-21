import React, { useState } from 'react';

const ConfigPanel = ({ onConfigChange }) => {
    const [color, setColor] = useState('#ff0000');
    const [size, setSize] = useState(1);
    const [effect, setEffect] = useState('none');

    const handleColorChange = (e) => {
        setColor(e.target.value);
        onConfigChange({ color: e.target.value, size, effect });
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
        onConfigChange({ color, size: e.target.value, effect });
    };

    const handleEffectChange = (e) => {
        setEffect(e.target.value);
        onConfigChange({ color, size, effect: e.target.value });
    };

    return (
        <div className="config-panel">
            <h2>Configure Saber</h2>
            <div>
                <label>Color:</label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
            <div>
                <label>Size:</label>
                <input type="range" min="0.5" max="2" step="0.1" value={size} onChange={handleSizeChange} />
            </div>
            <div>
                <label>Effect:</label>
                <select value={effect} onChange={handleEffectChange}>
                    <option value="none">None</option>
                    <option value="glow">Glow</option>
                    <option value="trail">Trail</option>
                </select>
            </div>
        </div>
    );
};

export default ConfigPanel;