document$.subscribe(() => {
  const lang = document.documentElement.lang; // Detecta el idioma actual
  
  // Define las palabras según el idioma
  const strings = lang === "es" 
      ? ['NDR', 'Plataforma de ciberseguridad', 'IPS de próxima generación']
      : ['NDR', 'Cybersecurity platform', 'Next Generation IPS'];

  // Inicializa el efecto de máquina de escribir con las palabras en el idioma correspondiente
  const instance = new Typewriter('#typewriter', {
      strings: strings,
      autoStart: true,
      loop: true,
  });
});