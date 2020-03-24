import React from 'react';
import {getGlobalFeed} from '../../../api';

import Feed from './feed';

export default function GlobalFeedScreen({navigation}) {
  return <Feed getData={getGlobalFeed} />;
}
