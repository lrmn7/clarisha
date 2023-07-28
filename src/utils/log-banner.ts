import {makeLines} from 'nodesplash';
import {readPackageSync} from 'read-pkg';

const logBanner = () => {
  console.log(makeLines({
    user: 'lrmn7',
    repository: 'clarisha',
    version: readPackageSync().version,
    paypalUser: 'lrmn7',
    githubSponsor: 'lrmn7',
    madeByPrefix: 'Made with 💗 by ',
    buildDate: process.env.BUILD_DATE ? new Date(process.env.BUILD_DATE) : undefined,
    commit: process.env.COMMIT_HASH ?? 'unknown',
  }).join('\n'));
  console.log('\n');
};

export default logBanner;
