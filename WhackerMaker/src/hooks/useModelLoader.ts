import { useState, useEffect } from 'react';
import { loadModel } from '../three/loaders';

const useModelLoader = (file: File | null) => {
    const [model, setModel] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (file) {
            setLoading(true);
            setError(null);

            loadModel(file)
                .then((loadedModel) => {
                    setModel(loadedModel);
                })
                .catch((err) => {
                    setError(err.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [file]);

    return { model, loading, error };
};

export default useModelLoader;