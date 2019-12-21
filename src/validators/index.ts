import { validateCadastralNumber as cadastralNumber } from './cadastralNumber';
import { validateEmail as email } from './email';
import { validatePostalCode as postalCode } from './postalCode';
import { validateSnils as snils } from './snils';
import {
  validateOgrn as ogrn,
  validateOgrnIp as ogrnIp,
} from './ogrn';
import {
  validateInn as inn,
  validateInnCorp as innCorp,
  validateInnPrivate as innPrivate,
} from './inn';
import { validateKpp as kpp } from './kpp';
import { validateOkpo as okpo } from './okpo';
import { validateBankCardNumber as bankCardNumber } from './bankCardNumber';

export const validate = {
  cadastralNumber,
  email,
  inn,
  innCorp,
  innPrivate,
  kpp,
  ogrn,
  ogrnIp,
  okpo,
  postalCode,
  snils,
  bankCardNumber,
};
