// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Backup%3A%3Afullbackup_to_ftp
export interface fullbackupToFtpParameters {
  variant: number;
  username?: number;
  password?: number;
  host?: number;
  directory: number;
  port: number;
  email: number;
  dbbackup: number;
  dbbackup_mysql: number;
}

import { execute } from './index';

export default (param: fullbackupToFtpParameters) => {
  return execute({
    function: 'fullbackup_to_ftp',
    parameters: param
  });
};
