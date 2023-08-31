import React, { useEffect } from 'react';
import { useLocalStore } from '@deep-foundation/store/local';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client';
import { createContainer } from '../create-container';

// Hook to manage the container link for camera images.
// Parameters:
// - deep: The DeepClient object used for communication.
// Returns: The container link ID.
export const useContainer = (deep: DeepClient) => {
    const [containerLinkId, setContainerLinkId] = useLocalStore<number | undefined>(
        'positionLinkId',
        undefined
    );

    useEffect(() => {
        if (!containerLinkId) {
            const initializeContainerLink = async () => {
                setContainerLinkId(await createContainer(deep)); // Create a new container for camera images and set the container link ID.
            };
            initializeContainerLink(); // Initialize the container link.
        }
    }, [deep]);

    return containerLinkId as number; // Return the container link ID.
};