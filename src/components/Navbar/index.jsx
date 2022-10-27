import * as Styled from './styles';
import gabriel from "../../image/photo_2022-10-11_15-28-52.jpg"
import { useEffect, useState } from 'react';

export const NavBar = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100)
    });
  }, []);

  return (
    <Styled.Container className={`nav-container ${show && "nav-container-black"}`}>
      <Styled.Image
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix" />
      <Styled.Image
        className="nav-avatar"
        src={gabriel}
        alt="GabrielLucas" />
    </Styled.Container>
  );
};

