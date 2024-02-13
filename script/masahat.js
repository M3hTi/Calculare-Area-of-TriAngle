
const buttonElement = document.querySelector('.js-calculate-area');
console.log(buttonElement);
buttonElement.onclick = () => {
    const baseElement = document.querySelector('.js-base-triangle');
    const heighElement = document.querySelector('.js-height-triangle');
    const base = Number(baseElement.value);
    const height = Number(heighElement.value);
    if(!base ||!height){
        document.querySelector('.js-result').innerHTML = `Pls Fill All Fields`;
    }else if(base && height){
        if(base <= 0 || height <= 0){
            document.querySelector('.js-result').innerHTML = `Pls Enter a Positive Value`;
            document.querySelector('.js-base-triangle').value = '';
            document.querySelector('.js-height-triangle').value = '';
            document.querySelector('.js-base-triangle').focus();
        }else{
            const area = (base * height) / 2;
            document.querySelector('.js-result').innerHTML = `Your result is : ${area}`;
            document.querySelector('.js-base-triangle').value = '';
            document.querySelector('.js-height-triangle').value = '';
            document.querySelector('.js-base-triangle').focus();
        }
    }
}
