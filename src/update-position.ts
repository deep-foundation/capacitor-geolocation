import {Position} from '@capacitor/geolocation'
import {DeepClient} from '@deep-foundation/deeplinks/imports/client.js'
import { Package } from './package'

export async function updatePosition(options: UpdatePositionOptions) {
  const {deep, position, linkId} = options
  return await deep.update({
    link_id: linkId
  }, {
    value: position
  }, {
    table: 'objects'
  })
}

export interface UpdatePositionOptions {
  /**
   * The deep client
   */
  deep: DeepClient;
  /**
   * The id of the link to update
   */
  linkId: number;
  /**
   * New position info
   */
  position: Position;
}