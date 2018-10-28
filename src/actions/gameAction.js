import { COL_DATA } from './types';

export const colorColumnCell = (col) =>  {
    return {type: COL_DATA, payload: col};
};