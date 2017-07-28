import {OpaqueToken} from '@angular/core';
import { LANG_ES_NAME, LANG_ES_TRANSLATE } from './lang-es';
import { LANG_EN_NAME, LANG_EN_TRANSLATE } from './lang-en';

export const TRANSLATIONS = new OpaqueToken('translations');

export const dictionary = {
    [LANG_ES_NAME]: LANG_ES_TRANSLATE,
    [LANG_EN_NAME]: LANG_EN_TRANSLATE
};

export const TRANSLATION_PROVIDERS =[
    {provide: TRANSLATIONS, useValue: dictionary}
];