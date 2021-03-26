import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', ()=>{
    const secretWord = 'party';

    test('return 0 when no matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });

    test('return 3 when 3 matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });

    test('return the currect count when there are duplicate letters in the guess', ()=>{
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });


});