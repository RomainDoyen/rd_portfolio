const sanitizeInput = (value) => {
  value = value.toString();
  
  // Supprimer les balises HTML et les caractères spéciaux
  value = value.replace(/<[^>]*>|[\{\}\[\]<>]/g, "");

  // Vérifier les mots-clés dangereux
  const dangerousPatterns = /javascript:|onerror|onload|<script>|<\/script>/i;
  if (dangerousPatterns.test(value)) {
    return ""; // Remplacer par une chaîne vide s'il y a des mots-clés dangereux
  }

  return value;
};

export const validateLastName = (value) => {
  value = sanitizeInput(value);
  if (value === "") {
    return { error: "Le nom est requis.", isValid: false };
  } else if (value.length < 3) {
    return { error: "Le nom doit contenir au moins 3 caractères.", isValid: false };
  }
  return { error: "", isValid: true };
};

export const validateFirstName = (value) => {
  value = sanitizeInput(value);
  if (value === "") {
    return { error: "Le prénom est requis.", isValid: false };
  } else if (value.length < 3) {
    return { error: "Le prénom doit contenir au moins 3 caractères.", isValid: false };
  }
  return { error: "", isValid: true };
};

export const validateSociety = (value) => {
  value = sanitizeInput(value);
  if (value === "") {
    return { error: "Le nom de la société est requis.", isValid: false };
  } else if (value.length < 3) {
    return { error: "Le nom de la société doit contenir au moins 3 caractères.", isValid: false };
  }
  return { error: "", isValid: true };
};

export const validateEmail = (value) => {
  value = sanitizeInput(value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === "") {
    return { error: "L'email est requis.", isValid: false };
  } else if (!emailRegex.test(value)) {
    return { error: "L'email n'est pas valide.", isValid: false };
  }
  return { error: "", isValid: true };
};

export const validateMessage = (value) => {
  value = sanitizeInput(value);
  if (value === "") {
    return { error: "Le message est requis.", isValid: false };
  } else if (value.length < 10) {
    return { error: "Le message doit contenir au moins 10 caractères.", isValid: false };
  }
  return { error: "", isValid: true };
};