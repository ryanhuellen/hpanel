// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_lists
export interface listListsParameters {
  regex: number;
  domain: number;
}

import { execute } from './index';

export default (param: listListsParameters) => {
  return execute({
    function: 'list_lists',
    parameters: param
  });
};
