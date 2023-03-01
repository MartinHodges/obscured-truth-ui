import { useEffect, useState } from 'react';
import { useInjectReducer } from '../utils/injectReducer';
import { useInjectSaga } from '../utils/injectSaga';

import gamesReducer from '../store/games/reducer';
import gamesSaga from '../store/games/saga';

const Preload = ({ children }) => {

  const [setup, setSetup] = useState(false);

  useEffect(() => {
    if (!setup) {
      setSetup(true);
    }
  }, [])

  useInjectReducer({ key: 'games', reducer: gamesReducer });
  useInjectSaga({ key: 'games', saga: gamesSaga });

  if (!setup) {
    return <></>
  }

  return (
    <div>
      {children}
    </div>
  );
}
  
export default Preload;