import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
// import Sidebar from './components/Sidebar.jsx';

export default function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
