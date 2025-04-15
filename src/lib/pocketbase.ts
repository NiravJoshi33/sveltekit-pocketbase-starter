import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import Pocketbase from 'pocketbase';

export const createPBInstance = () => {
	return new Pocketbase(PUBLIC_POCKETBASE_URL || 'http://localhost:8090');
};

export const pb = createPBInstance();
