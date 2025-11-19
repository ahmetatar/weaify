import { effect } from '@angular/core';
import {
  EmptyFeatureResult,
  getState,
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  SignalStoreFeatureResult,
  withHooks,
} from '@ngrx/signals';

/**
 * Adds storage synchronization to a signal store.
 *
 * @param key The key under which the state is stored in the storage.
 * @param storage The storage object to synchronize with (e.g., localStorage or sessionStorage).
 */
export function withStorage<T extends SignalStoreFeatureResult>(
  key: string,
  storage: Storage,
): SignalStoreFeature<T, EmptyFeatureResult> {
  return signalStoreFeature(
    withHooks({
      onInit(store) {
        const storedValue = storage.getItem(key);
        if (storedValue) {
          patchState(store, JSON.parse(storedValue) as T['state']);
        }

        effect(() => {
          const state = structuredClone(getState(store));
          storage.setItem(key, JSON.stringify(state));
        });
      },
    }),
  );
}
