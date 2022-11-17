import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    /*** onInputChange es la funcion que captura el evento de tecleado y cambia el valor del input  */
    const onInputChange = ({target}) => {
        setInputValue(event.target.value);
    }

    /*** Insertar en el arreglo y se muestre de manera visual */
    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        //AddCategoria(categories => [inputValue, ...categories]);
        onNewCategory(inputValue);
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                 type="text"
                 placeholder="Buscar gifs"
                 value={inputValue}
                 onChange={ onInputChange }
            />
        </form>
    )
}