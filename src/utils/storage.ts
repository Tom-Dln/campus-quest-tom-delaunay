export const obtenirSuccesObtenus = (): string[] => {
  const succesObtenus = localStorage.getItem('succesObtenus');
  return succesObtenus ? JSON.parse(succesObtenus) : [];
};

export const sauvegarderSucces = (idSucces: string): void => {
  const succesObtenus = obtenirSuccesObtenus();
  if (!succesObtenus.includes(idSucces)) {
    succesObtenus.push(idSucces);
    localStorage.setItem('succesObtenus', JSON.stringify(succesObtenus));
  }
};
