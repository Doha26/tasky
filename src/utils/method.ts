import Toast from 'react-native-root-toast';

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

export const randomUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
export const showToast = (message: string) => {
    Toast.show(message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0
    });
};
