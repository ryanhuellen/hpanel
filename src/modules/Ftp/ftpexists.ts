// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Aftp_exists
export interface ftpExistsParameters {
  domain: number;
  user?: number;
}

import { execute } from './index';

export default (param: ftpExistsParameters) => {
  return execute({
    function: 'ftp_exists',
    parameters: param
  });
};
