// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aset_homedir
export interface setHomedirParameters {
  user?: number;
  domain: number;
  homedir: number;
}

import { execute } from './index';

export default (param: setHomedirParameters) => {
  return execute({
    function: 'set_homedir',
    parameters: param
  });
};
