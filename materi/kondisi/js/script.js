let x = false
let y = false
let z = true
if (x){
    console.log('x adalah benar')
}else if(y){
    console.log('Y adalah benar');
}else if(z){
    console.log('z adalah benar');
}else{
    console.log('x adalah salah');
}

let x_ = 'biru'

switch (x_){
    case 'kuning':
        console.log('x adalah', x_);
        break
    case 'biru':
        console.log('x adalah', x_);
        break
    case 'merah':
        console.log('x adalah', x_);
        break
    default:
        console.log('tidak ada pilihan yang tersedia');
        break
}

//ternary

let nilai = 90
// let result = (nilai >= 80) ? 'Diatas KKM' : 'Dibawah KKM'
let result = nilai > 70 && 'Di atas KKM'
console.log(result);