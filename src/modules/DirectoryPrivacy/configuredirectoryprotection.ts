// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DirectoryPrivacy%3A%3Aconfigure_directory_protection
export interface configureDirectoryProtectionParameters {
  dir?: number;
  enabled?: boolean;
  authname?: number;
}

import { execute } from './index';

export default (param?: configureDirectoryProtectionParameters) => {
  return execute({
    function: 'configure_directory_protection',
    parameters: param
  });
};
