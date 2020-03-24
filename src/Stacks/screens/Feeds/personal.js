import React from 'react';
import {getPersonalFeed} from '../../../api';

import Feed from './feed';

export default function GlobalFeedScreen({navigation}) {
  return <Feed getData={getPersonalFeed} />;
}
