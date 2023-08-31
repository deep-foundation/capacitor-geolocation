import { Geolocation, Position, PositionOptions } from '@capacitor/geolocation';

/**
 * Retrieves the device's current position using the Geolocation plugin.
 *
 * @param options - (Optional) Configuration options for position retrieval.
 * @returns A Promise that resolves to the current Position.
 */
export async function getPosition(options?: PositionOptions): Promise<Position> {
  const position = await Geolocation.getCurrentPosition({
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 0,
    ...options // User provided options will override the defaults
  }); // Use the Geolocation plugin to get a position.
  return position; // Return the retrieved position.
}
