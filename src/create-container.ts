import { DeepClient } from "@deep-foundation/deeplinks/imports/client";
import { PACKAGE_NAME } from './package-name';
// import { LinkName } from "./link-name";

/**
 * Creates a new container for the position records.
 * @param {DeepClient} deep - The DeepClient object instance.
 * @returns {Promise<number>} A Promise that resolves with the ID of the new container.
 */
export async function createContainer(deep: DeepClient): Promise<number> {
  const containTypeLinkId = await deep.id("@deep-foundation/core", "Contain"); // Retrieve the link ID for the "Contain" type.
  const positionTypeLinkId = await deep.id(PACKAGE_NAME, 'Position'); // Retrieve the link ID for the "Camera" type.

  const { data: [{ id: containerLinkId = undefined } = {}] = [] } = await deep.select({ type_id: positionTypeLinkId }); // Check if a container link already exists for the "Position" type.

  if (!containerLinkId) {
    const { data: [{ id: newContainerLinkId }] } = await deep.insert({
      type_id: positionTypeLinkId,
      in: {
        data: {
          type_id: containTypeLinkId,
          from_id: deep.linkId,
          string: { data: { value: "position" } },
        }
      }
    }); // Create a new container link for the "Position" type.

    return newContainerLinkId; // Return the ID of the new container.
  } else {
    alert("Container link already exists!"); // If a container link already exists, show an alert.
    return containerLinkId; // Return the existing container link ID.
  }
}