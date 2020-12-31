// Import types and execute method from module.
    import { FunctionEP, mexecute } from '..';
    
    // Import Functions
    import create from './create';
import delete from './delete';
import retrieve from './retrieve';

    export const execute = (ep: FunctionEP) => {
      return mexecute({
        module: 'VersionControlDeployment',
        functionEP: ep
      });
    };
    
    export { create, delete, retrieve,  };