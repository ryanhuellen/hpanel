// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Alist_users

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_users',
  });
};
