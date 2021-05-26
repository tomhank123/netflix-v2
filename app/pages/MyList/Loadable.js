/**
 *
 * Asynchronously loads the component for MyList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
