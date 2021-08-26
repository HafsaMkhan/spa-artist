import { useCallback, useEffect, useState } from "react";
import { GetStateInterface, GetState } from "src/common";
import { callCT, setCT } from "src/utils";
import { GetEventInterface } from "./artists.interface";
import { getEventsApi } from "./events.api";

export const useEvents = (artistName?: string) => {
  const [res, setRes] =
    useState<GetStateInterface<Array<GetEventInterface>>>(GetState);
  const actionName = "GET_EVENTS";

  const getEvents = useCallback(async () => {
    setRes((res) => ({ ...res, loading: true, error: null }));
    callCT(actionName);
    try {
      if (artistName) {
        const { data } = await getEventsApi(artistName, setCT(actionName));
        setRes({ loading: false, error: null, data });
      }
    } catch (error) {
      console.error(error);
      setRes({ loading: false, error, data: null });
    }
  }, [artistName]);

  useEffect(() => {
    artistName && getEvents();
  }, [artistName, getEvents]);

  return { res, getEvents };
};
