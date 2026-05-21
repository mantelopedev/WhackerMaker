import { saveAs } from 'file-saver';
import { convertModelToWhacker } from './conversionService';
import { SaberConfig } from '../types';

export const exportWhackerFile = async (model: File, config: SaberConfig) => {
    try {
        const whackerData = await convertModelToWhacker(model, config);
        const blob = new Blob([whackerData], { type: 'application/octet-stream' });
        saveAs(blob, `${config.name}.whacker`);
    } catch (error) {
        console.error('Error exporting .whacker file:', error);
        throw new Error('Failed to export .whacker file');
    }
};