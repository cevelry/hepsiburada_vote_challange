import { MaxPostPer } from './MaxPostPer';
import { perPagePostSample } from './perPagePostSample';

describe('perPagePostSample Tests', () => {


    it.each(perPagePostSample)("SliceByPage %# %s", (name, inputArray, page, expectedLength) => {

        expect(MaxPostPer(inputArray, page).length).toBe(expectedLength);
    });


});