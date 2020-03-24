import { schema } from 'normalizr';

export const characterSchema = new schema.Entity('character');

export const characterListSchema = new schema.Array(characterSchema);



/* 

const normalizedData = normalize(originalData, char acterSchema);


*/