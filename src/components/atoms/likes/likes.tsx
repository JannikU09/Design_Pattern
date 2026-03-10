export const Likes = () => {

    const max = 9999;
    const min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}