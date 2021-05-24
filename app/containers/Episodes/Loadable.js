/**
 *
 * Asynchronously loads the component for Episodes
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
