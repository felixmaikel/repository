import { OpaqueToken } from '@angular/core';
import { LANG_EN_TRANSLATE, LANG_NAME_EN } from './lang-en';
import { LANG_NAME_ES, LANG_ES_TRANSLATE } from './lang-es';

export const TRANSLATIONS = new OpaqueToken('translations');

export const dictionary = {
    [LANG_NAME_EN]: LANG_EN_TRANSLATE,
    [LANG_NAME_ES]: LANG_ES_TRANSLATE
};

export const TRANSLATIONS_PROVIDERS = [
    {provide: TRANSLATIONS, useValue: dictionary}
];