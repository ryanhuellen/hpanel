// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressBackup%3A%3Acleanup
export interface cleanupParameters {
  site?: number;
}

import { execute } from './index';

export default (param?: cleanupParameters) => {
  return execute({
    function: 'cleanup',
    parameters: param
  });
};
