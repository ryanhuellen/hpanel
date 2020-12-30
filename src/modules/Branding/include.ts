// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Ainclude
export interface DangerousIncludeParameters {
  file: string;
  skip_default?: boolean;
  raw?: boolean;
}

import { execute } from './index';

export default (param: DangerousIncludeParameters) => {
  return execute({
    function: 'include',
    parameters: param
  });
};
