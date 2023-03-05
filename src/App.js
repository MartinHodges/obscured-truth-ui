import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';
import RegisterGame from './pages/RegisterGame';
import RegisterPlayers from './pages/RegisterPlayers';
import Play from './pages/PlayGame';
import './App.css';
import routes from './routes';
import Suspect from './pages/Suspect';
import Detective from './pages/Detective';
import ChooseSuspect from './pages/ChooseSuspect';
import InterviewAsSuspect from './pages/InterviewAsSuspect';
import InterviewAsDetective from './pages/InterviewAsDetective';
import Scoreboard from './pages/Scoreboard';
import RegisterAsPlayer from './pages/RegisterAsPlayer';
import Preload from './containers/Preload';
import GameResults from './pages/GameResults';
import RoundResults from './pages/RoundResults';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Preload>
        <BrowserRouter>
          <Routes>
            <Route path={routes.registerGame} element={<RegisterGame />} />
            <Route path={routes.registerPlayers + "/:gameId"} element={<RegisterPlayers />} />
            <Route path={routes.playGame} element={<Play />} />
            <Route path={routes.suspect} element={<Suspect />} />
            <Route path={routes.detective} element={<Detective />} />
            <Route path={routes.chooseSuspect} element={<ChooseSuspect />} />
            <Route path={routes.interviewAsSuspect + "/:gameId?"} element={<InterviewAsSuspect />} />
            <Route path={routes.interviewAsDetective + "/:gameId?"} element={<InterviewAsDetective />} />
            <Route path={routes.gameResults} element={<GameResults />} />
            <Route path={routes.roundResults} element={<RoundResults />} />
            <Route path={routes.scoreboard} element={<Scoreboard />} />
            <Route path={routes.registerAsPlayer} element={<RegisterAsPlayer />} />
          </Routes>
        </BrowserRouter>
      </Preload>
    </ThemeProvider>
  );
}

export default App;
