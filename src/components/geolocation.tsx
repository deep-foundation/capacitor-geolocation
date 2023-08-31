import React from 'react';
import {
  DeepClient,
} from '@deep-foundation/deeplinks/imports/client';

import { Button, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePermissions } from '../hooks/use-permissions';
import { useContainer } from '../hooks/use-container';
import { usePosition } from '../hooks/use-position';
import { usePositionListener } from '../hooks/use-position-listener';

const defaultOptions = {
  enableHighAccuracy: false,
  timeout: 10000,
  maximumAge: 0,
}

export function Geolocation({
  deep,
  deviceLinkId,
}: {
  deep: DeepClient;
  deviceLinkId: number;
}) {
  // const [positionHandler, setPositionHandler] = useState<ClearWatchOptions | undefined>();

  const { geolocationPermissions, getPermissions, checkPermissions } = usePermissions(); // Get geolocation permissions.
  const containerLinkId = useContainer(deep); // Retrieve the container link ID.
  const { positions, newPosition } = usePosition({ deep, containerLinkId }); // Custom hook for taking a new position.
  const { positions: positionsFromListener, subscribeToPositionsChanges, unsubsribeToPositionsChanges } = usePositionListener({ deep, containerLinkId, options: defaultOptions }); // Custom hook for listening to position changes.

  return (
    <Stack>
      <Link href="/">Home</Link>
      <Button
        onClick={async () => { await getPermissions(); }}
      >
        Request permissions
      </Button>
      <Button
        onClick={async () => { await checkPermissions() }}
      >
        Check permissions
      </Button>
      <Button
        onClick={async () => { await newPosition() }}
      >
        Get current position
      </Button>
      <Button
        onClick={async () => { await subscribeToPositionsChanges() }}
      >
        Subscritbe to Position Changes
      </Button>
      <Button
        onClick={async () => { await unsubsribeToPositionsChanges() }}
      >
        Unsubscritbe to Position Changes
      </Button>
    </Stack>
  );
}