import React, { createContext, useContext } from 'react';
import { db, ref, set, onValue } from '../firebase/config';

const FirebaseContext = createContext();

export function FirebaseProvider({ children }) {
  // Función para guardar datos
  const saveData = (path, data) => {
    return set(ref(db, path), data);
  };

  // Función para leer datos
  const getData = (path, callback) => {
    onValue(ref(db, path), (snapshot) => {
      callback(snapshot.val());
    });
  };

  const value = {
    saveData,
    getData
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}

// Hook personalizado
export function useFirebase() {
  return useContext(FirebaseContext);
}