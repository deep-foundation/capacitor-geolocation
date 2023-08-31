import { DeepClient } from '@deep-foundation/deeplinks/imports/client';
import { Position } from '@capacitor/geolocation';
// import { PACKAGE_NAME } from './package-name';
// import { LinkName } from './link-name';

export interface IUploadPositionOptions {
  deep: DeepClient, // The DeepClient instance.
  containerLinkId: number, // The ID of the container link.
  position: Position // Array of photos to upload.
}

export interface IUploadPositionsOptions {
  deep: DeepClient, // The DeepClient instance.
  containerLinkId: number, // The ID of the container link.
  positions: Position[] // Array of photos to upload.
}

export async function uploadPosition({ deep, containerLinkId, position }: IUploadPositionOptions) {
  console.log('uploadPosition', { deep, containerLinkId, position });
  const { data: [{ id: positionLinkId = undefined } = {}] = [] } = await deep.update({link_id: containerLinkId}, { value: position }, { table: 'objects' });
  console.log('uploadPosition data', { positionLinkId });
  // { data: [{ id: containerLinkId = undefined } = {}] = [] }
  return positionLinkId;
}

export async function uploadPositions({ deep, containerLinkId, positions }: IUploadPositionsOptions) {
  console.log('uploadPositions', { deep, containerLinkId, positions });

  const positionLinksId: any = [];
  for (const position of positions) {
    // const { data: [{ id: positionLinkId = undefined } = {} ] = [] } = 
    const result = await deep.update({link_id: containerLinkId}, { value: position }, { table: 'objects' });
    console.log({result})
    // positionLinksId.push(positionLinkId);
    // console.log('uploadPositions data', { positionLinkId });
  }
  // return positionLinksId?.[0] || null;
}
