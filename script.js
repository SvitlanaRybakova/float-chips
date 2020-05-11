window.onload = () => {
    document.querySelector('#chips-show').onclick = () => {
        let text = document.querySelector ('#chips-text').value;
        document.querySelector ('#chips-text').value = '';
        let newChips = document.createElement('div');// создаем новый элемент
        newChips.classList.add('chipsStyle');//присваеваем ему класс
        newChips.innerText = text;// присваеваем текст из инпута внутрь всплывающего окна

        //document.body.appendChild(newChips);
        if (!document.querySelector('#chips-field')){//если  нет поля  chips-field, добавляю его
            let chipsField = document.createElement('div');
            chipsField.id = 'chips-field';
            document.body.appendChild(chipsField)//рисую  поле в документе
        }
         
            document.querySelector('#chips-field').appendChild(newChips);//рисую в поле всплывающее окно
            setTimeout(
                () => {
                    newChips.remove();
                    removeChipsField();
                },
                3000
            );
        }

        function removeChipsField() {
            
            let temp = document.querySelectorAll('#chips-field .chipsStyle');
            if ( temp.length == 0){
               
                document.querySelector('#chips-field').remove();
            }
        }


}
