// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WebDisk%3A%3Aset_permissions
export interface setPermissionsParameters {
  user?: number;
  perms?: number;
}

import { execute } from './index';

export default (param?: setPermissionsParameters) => {
  return execute({
    function: 'set_permissions',
    parameters: param
  });
};
