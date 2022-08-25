import PocketBase from 'pocketbase';

export const client = new PocketBase(process.env.VUE_POCKETBASE_URL);
