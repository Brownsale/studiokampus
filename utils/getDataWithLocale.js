export default (data, locale = 'fr-FR') => {
  if(locale === 'fr-FR') {
    return data.fr;
  } else if(locale === 'en-US') {
    return data.en;
  }
}