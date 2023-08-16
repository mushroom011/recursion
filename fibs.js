const fibs = (num) => {
    const arrResult = [];
    for(let i = 0; i < num; i++){
        if(i < 2 ){
            arrResult.push(i);
        } else {
            arrResult.push(arrResult[i-1] + arrResult[i-2]);
        }
    }

    return arrResult
}

const fibsRec = (num) => {
    if(num === 0) return 'No sequence of length "0" ¯\\_(ツ)_/¯';
    if(num === 1 ) return [0];
    if(num === 2 ) return [0, 1];
    
    return [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
}