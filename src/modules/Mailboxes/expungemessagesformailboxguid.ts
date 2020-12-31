// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mailboxes%3A%3Aexpunge_messages_for_mailbox_guid
export interface expungeMessagesForMailboxGuidParameters {
  account?: number;
  mailbox_guid?: number;
  query?: number;
}

import { execute } from './index';

export default (param?: expungeMessagesForMailboxGuidParameters) => {
  return execute({
    function: 'expunge_messages_for_mailbox_guid',
    parameters: param
  });
};
