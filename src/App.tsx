import { useState, ReactNode } from 'react';
import './App.css';

type TitlePropsType = {
  text: string;
};

interface TitlePropsInterface {
  text: string;
}

const TitleWithType = ({ text }: TitlePropsType) => {
  return <h2>{text}</h2>;
};

const TitleWithInterface = ({ text }: TitlePropsInterface) => {
  return <h2>{text}</h2>;
};

const Title = ({ text }: { text: string }) => {
  return <h1>{text}</h1>;
};

const SubTitleChildren = ({ children }: { children: string }) => {
  return <h5>{children}</h5>;
};

const SubTitleChildrenNode = ({ children }: { children: ReactNode }) => {
  return <h5>{children}</h5>;
};

function App() {
  return (
    <>
      <Title text="Hello World!" />
      <TitleWithType text="Hello TitleWithType" />
      <TitleWithInterface text="Hello TitleWithInterface" />
      <SubTitleChildren>Subtitulo</SubTitleChildren>
      <SubTitleChildrenNode>
        <span>
          Hello <strong>World</strong>!
        </span>
      </SubTitleChildrenNode>
    </>
  );
}

export default App;
