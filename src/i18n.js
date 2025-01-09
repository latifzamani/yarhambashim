import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
.use(HttpBackend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng:'fa',
    supportedLngs:['en','fa','pa'],
    debug:true,
    interpolation:{
        escapeValue:false,},
    backend:{
        loadPath:'/src/locales/{{lng}}/translation.json'},
    detection:{
        order:['querystring','cookie','localStorage','navigator'],
    caches:['cookie','localStorage'],}});
export default i18n;
