import React, { useState, useEffect } from 'react'; // on importe les hooks useState et useEffect depuis 'react'

const Message = () => { // on crée notre composant Message et en dessous on utilise useState pour créer une variable d'état
  const [message, setMessage] = useState("Vous vous baladez dans Bourg Palette"); // on déclare notre state message avec la valeur "Vous vous baladez dans Bourg Palette" et setMessage permet de modifier le message

  useEffect(() => { //avec useEffect on déclenche un message après 5 secondes
    const timer = setTimeout(() => { // setTimeout permet de déclencher une fonction après un certain délai
      setMessage("Un Ratatat sauvage vous attaque"); // après 5s on affiche ce message
    }, 5000); // 5000ms = 5s

    return () => clearTimeout(timer); // on retourne une fonction qui permet d'annuler le timer si le composant est démonté avant la fin du délai
  }, []);

  return <p>{message}</p>; // on retourne notre message
};

export default Message; // on exporte notre composant Message pour pouvoir l'utiliser ailleurs dans notre application
