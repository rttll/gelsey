// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import album from './documents/album';
import bio from './documents/bio';
import video from './documents/video';
import press from './documents/press';
import quote from './documents/quote';
import event from './documents/event';
import event_archive from './documents/event_archive';
import work from './documents/work';

import blockContent from './objects/blockContent';
import blockImage from './objects/blockImage';
import link from './objects/link';
import address from './objects/address';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type

  types: schemaTypes.concat([
    bio,
    album,
    video,
    address,
    event_archive,
    event,
    quote,
    press,
    work,
    blockContent,
    blockImage,
    link,
  ]),
});
