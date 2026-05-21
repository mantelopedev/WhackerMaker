import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { LoadingManager } from 'three';

export const loadFBXModel = (url: string, onLoad: (object: any) => void, onError: (error: Error) => void) => {
    const manager = new LoadingManager();
    const loader = new FBXLoader(manager);

    manager.onStart = () => {
        console.log('Loading FBX model...');
    };

    manager.onLoad = () => {
        console.log('FBX model loaded.');
    };

    loader.load(url, onLoad, undefined, onError);
};

export const loadOBJModel = (url: string, onLoad: (object: any) => void, onError: (error: Error) => void) => {
    const manager = new LoadingManager();
    const loader = new OBJLoader(manager);

    manager.onStart = () => {
        console.log('Loading OBJ model...');
    };

    manager.onLoad = () => {
        console.log('OBJ model loaded.');
    };

    loader.load(url, onLoad, undefined, onError);
};