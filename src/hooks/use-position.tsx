import React, { useEffect, useState } from 'react';
import { Position, PositionOptions } from '@capacitor/geolocation';
import { useLocalStore } from '@deep-foundation/store/local';
import { getPosition } from '../get-position';
import { uploadPositions } from '../upload-positions';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client';

/**
 * Represents the parameters for using the geolocation.
 */
export interface IUsePositionOptions {
  deep: DeepClient; // The DeepClient object used for communication.
  containerLinkId: number; // The ID of the container link.
  options?: PositionOptions; // The options to get positions.
}

/**
 * Custom hook for using the position.
 * @param {IUsePositionOptions} param0 - The parameters for using the position.
 * @returns {Function} A function that can be called to get a new position.
 */
export const usePosition = ({ deep, containerLinkId, options }: IUsePositionOptions) => {
  console.log('usePosition', {deep, containerLinkId, options});
  const [positions, setPositions] = useState<Position[]>([]); // State to store positions.

  console.log('usePosition state', {positions});

  useEffect(() => {
    const upload = async () => {
      await uploadPositions({ deep, containerLinkId, positions }); // Upload positions
      setPositions([]); // Clear the positions array after uploading.
    };

    if (positions.length > 0) {
      upload(); // Upload the position if there are any in the array.
    }

    console.log('usePosition useEffect', {positions});
  }, [positions, deep]);

  /**
   * Function to get a new position.
   * @returns {Promise<Position>} A Promise that resolves with the new position.
   */
  const newPosition = async () => {
    console.log('newPosition', {deep, containerLinkId, options})
    const position = await getPosition(options); // Get a new position.
    console.log('newPosition', [...positions, position])
    setPositions([...positions, position]); // Add the position to the positions array.
    return position; // Return the new position.
  };

  return {positions, newPosition}; // Return the function to get a new position.
};