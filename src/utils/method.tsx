export const isOdd = (number: number) => {
    return number % 2;
};
export const randomString = (an: string) => {
    an = an && an.toLowerCase();
    var str = "",
        i = 0,
        min = an == "a" ? 10 : 0,
        max = an == "n" ? 10 : 62;
    for (; i++ < 10;) {
        var r = Math.random() * (max - min) + min << 0;
        str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
    }
    return str;
};
export const randomInt = (min: number, max: number) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
};
