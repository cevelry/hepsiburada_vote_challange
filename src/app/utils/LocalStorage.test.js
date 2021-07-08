import { LoadDataFromStorage, SaveDataToStorage } from './LocalStorage';
import TestData from '../static/TestData'

describe('Local Storage Test', () => {


    it("Local Storage Test", () => {
        SaveDataToStorage(TestData);
        const loaded = LoadDataFromStorage();
        expect(JSON.stringify(TestData)).toBe(JSON.stringify(loaded));
    });


});