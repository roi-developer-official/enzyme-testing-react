import PropType from 'prop-types';
function Input({ secretWord }){

    return (
        <div data-test="component-input"></div>
    )
}

Input.propTypes = {
    secretWord: PropType.string.isRequired
}
export default Input;