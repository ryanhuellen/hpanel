// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+TwoFactorAuth%3A%3Agenerate_user_configuration

import { execute } from './index';

export default () => {
  return execute({
    function: 'generate_user_configuration',
  });
};
