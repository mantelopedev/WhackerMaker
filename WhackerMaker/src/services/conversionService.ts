import { loadModel } from '../three/loaders';
import { convertToWhackerFormat } from './whackerExporter';

export async function convertModel(file: File): Promise<ArrayBuffer | null> {
    try {
        const modelData = await loadModel(file);
        if (!modelData) {
            throw new Error('Failed to load model data');
        }
        const whackerFile = await convertToWhackerFormat(modelData);
        return whackerFile;
    } catch (error) {
        console.error('Error converting model:', error);
        return null;
    }
}