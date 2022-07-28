import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import * as S from "./AppStyle";
import Projetos from "./Components/Projetos";
function App() {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Column>
        <Home />
        <Projetos/>
      </S.Column>
    </S.Wrapper>
  );
}

export default App;
