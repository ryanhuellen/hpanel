// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+VersionControlDeployment%3A%3Adelete
export interface deleteParameters {
  deploy_id?: number;
}

import { execute } from './index';

export default (param?: deleteParameters) => {
  return execute({
    function: 'delete',
    parameters: param
  });
};
