/**
 * @type {import('@auto-it/npm').INpmConfig}
 */
const npmOptions = {
  exact: true
};

/**
 * @type {import('@auto-it/slack').ISlackPluginOptions}
 */
// const slackOptions = {
//   auth: 'app',
//   channels: [],
//   url: '',
//   publishPreRelease: true
// };

/**
 *
 * @returns {import('auto').AutoRc}
 */
function rc() {
  return {
    onlyPublishWithReleaseLabel: true,
    baseBranch: 'main',
    plugins: [
      ['npm', npmOptions],
      'all-contributors',
      'conventional-commits',
      'first-time-contributor',
      'released'
      // ['slack', slackOptions]
    ],
    labels: []
  };
}

module.exports = rc;
