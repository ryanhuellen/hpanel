// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Locale%3A%3Alist_locales

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_locales'
  });
};
