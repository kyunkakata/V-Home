import I18n from 'react-native-i18n';

// localize
import en from './locales/en';
import vi from './locales/vi';

// configs
import * as Consts from './consts';

// i18n
I18n.fallbacks = true;
I18n.translations = { en, vi };
I18n.locale = Consts.LANGUAGE_DEFAULT;

// export
export default I18n;
