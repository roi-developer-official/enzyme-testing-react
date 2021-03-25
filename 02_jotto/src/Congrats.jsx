
export default function Congrats({sucess}){
    if(sucess){
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulation! You guessed the word!
                </span>
            </div>
        )
    }
     else {
         return <div data-test="component-congrats"></div>
     }
}
