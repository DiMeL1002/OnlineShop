export default class Helpers {
    static bowWord(n, words) {
        let word;
        /*
        * товар - 1 | 21 | 31 | 41 | 51 | 61 |71 | 81 | 91 | 101 ...
        * товара - 2 | 3 | 4 | 22 | 23 | 24 | 32 | 33 | 34 ...
        * товаров - 0 | 5 | 6 | 7 | 8 | 9 | 10-20 | 25-30 | 35-40 ...
        * */
        if ((n === 1) || (n > 20 && n % 10 === 1)) word = words[0];
        else if ((n >= 2 && n <= 4) || (n > 20 && n % 10 >= 2 && n % 10 <= 4)) word = words[1];
        else word = words[2];
    
        return word;
    }
}