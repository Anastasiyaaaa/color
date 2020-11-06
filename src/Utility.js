export const rgbToHex = (arr) =>{
    const r = arr[0];
    const g = arr[1];
    const b = arr[2];
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
};
