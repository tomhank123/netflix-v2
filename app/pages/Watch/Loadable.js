/**
 *
 * Asynchronously loads the component for Watch
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
