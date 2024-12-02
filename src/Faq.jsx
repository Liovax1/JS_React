import { useState } from 'react';

const Faq = () => {
    const [isResponseDisplayed, setIsResponseDisplayed] = useState(false);

    const displayResponse = () => {
        console.log('Question cliquée !');
        setIsResponseDisplayed(true);
    };

    return (
        <section>
            <p onClick={displayResponse}>Comment sont calculés les frais de port ?</p>
            {isResponseDisplayed && <p>Les frais de port sont calculés en fonction du poids de votre commande.</p>}
        </section>
    );
}

export default Faq;