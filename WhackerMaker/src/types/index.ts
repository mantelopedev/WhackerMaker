// This file exports TypeScript types and interfaces used throughout the application for type safety.

export interface SaberConfig {
    color: string;
    length: number;
    width: number;
    glowIntensity: number;
}

export interface ModelFile {
    name: string;
    type: 'fbx' | 'obj';
    data: ArrayBuffer;
}

export interface ConversionResult {
    success: boolean;
    message: string;
    file?: Blob;
}

export interface ExportOptions {
    includeMetadata: boolean;
    compressionLevel: number;
}