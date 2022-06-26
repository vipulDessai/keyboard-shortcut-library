type CallbacksType = () => any;
type KeyComboGroupedCallbacksType = {
  [key: string]: CallbacksType[];
};
const keyComboGroupedCallbacks: KeyComboGroupedCallbacksType = {};

let globalListenerInstance: any = null;

export const keypressJsListener = {
  register: (combo: string, description: string, callback: CallbacksType) => {
    if (!globalListenerInstance) {
      globalListenerInstance = new keypress.Listener();
    }

    if (keyComboGroupedCallbacks[combo]) {
      keyComboGroupedCallbacks[combo].push(callback);
    } else {
      keyComboGroupedCallbacks[combo] = [callback];
      globalListenerInstance.simple_combo(combo, () => {
        const allCallbacksForThisCombo = keyComboGroupedCallbacks[combo];
        for (let i = 0; i < allCallbacksForThisCombo.length; i++) {
          allCallbacksForThisCombo[i]();
        }
      });
    }
  },
  deregister: (combo: string, callback: CallbacksType) => {
    if (keyComboGroupedCallbacks[combo]) {
      const allCallbacksForThisCombo = keyComboGroupedCallbacks[combo];
      for (let i = 0; i < allCallbacksForThisCombo.length; i++) {
        if (allCallbacksForThisCombo[i] === callback) {
          allCallbacksForThisCombo.splice(i, 1);

          // while splicing if the array lenght is zero
          // that means all the combos are deregisted for the keypress
          // therefore remove the key;
          if (allCallbacksForThisCombo.length === 0) {
            delete keyComboGroupedCallbacks[combo];
          }
        }
      }

      // if all keys are removed, that means the keypress plugin
      // needs to be reset because the globalListenerInstance is
      // in global context and resides even when all the components get
      // unmounted
      if (Object.keys(keyComboGroupedCallbacks).length === 0) {
        globalListenerInstance.reset();
      }
    }
  },
};
