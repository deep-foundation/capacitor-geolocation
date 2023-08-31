import React, { useEffect, useState } from 'react';
// import { ConnectionStatus, Network } from '@capacitor/network';
import { Position, Geolocation } from '@capacitor/geolocation';
import { useLocalStore } from '@deep-foundation/store/local';
import { uploadPositions } from '../upload-positions';
import { PluginListenerHandle } from '@capacitor/core';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client';

export interface IUsePositionProps {
  deep: DeepClient,
  containerLinkId: number,
  options?: PositionOptions,
}

export const usePositionListener = ({ deep, containerLinkId, options }: IUsePositionProps) => {

  const [positions, setPositions] =
    useLocalStore<Position[]>("Positions", []);

  const [positionChangeHandler, setPositionChangeHandler] =
    useState<string | undefined>("");

  const subscribeToPositionsChanges = async () => {
    if (positionChangeHandler !== undefined) {
      setPositionChangeHandler(undefined);
    }

    const newPositionChangeHandler = await Geolocation.watchPosition({
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 0,
      ...options,
    }, () => {});

    setPositionChangeHandler(newPositionChangeHandler);
  }

  const unsubsribeToPositionsChanges = async () => {
    if (positionChangeHandler !== undefined) {
      await Geolocation.clearWatch({ id: positionChangeHandler });
      setPositionChangeHandler(undefined);
    }
  }

  useEffect(() => {
    new Promise(async () => {
      if (positions.length > 0) {
        uploadPositions({ deep, containerLinkId, positions });
        setPositions([]);
      }
    });
  }, [positions]);

  useEffect(() => {
    subscribeToPositionsChanges();
  }, [containerLinkId]);

  return { positions, subscribeToPositionsChanges, unsubsribeToPositionsChanges };
}