import { useState } from 'react';

const Faq = () => {
    console.log('c\'est ok');
    const [isResponseDisplayed, setIsResponseDelayed] = useState(false);

    const displayResponse = () => {
        setIsResponseDelayed(true);
    };

    return (
        <section>
            <p onClick={displayResponse}>Comment sont calculés les frais de port ?</p>

            {isResponseDisplayed && <p>Les frais de port sont calculés en fonction du poids de votre commande.</p>}
        </section>
    );
}

export default Faq;