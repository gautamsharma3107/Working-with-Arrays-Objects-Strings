function check_Pangram(str){
    let arr = str.toLowerCase();
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabets.length; i++) {
      if(arr.indexOf(alphabets[i]) < 0){
        return false;
      }
    }
    return true;
  }
let str = 'The quick brown fox jumps over the lazy dog';

console.log(check_Pangram(str));
