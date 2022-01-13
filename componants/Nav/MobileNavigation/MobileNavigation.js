import style from "./mobilenavigation.module.scss";
import { RiMenu3Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import NavLinks from "../NavLinks/NavLinks";
import { useState } from "react";
import Link from 'next/link'

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const hamburgericon = (
    <RiMenu3Fill
      className={style.hamburger}
      size="40px"
      color="#1c3661"
      onClick={() => setOpen(!open)}
    />
  );
  const closeicon = (
    <CgClose
      className={style.hamburger}
      size="40px"
      color="red"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <div className={style.container}>
        <Link href="/">
        <img className={style.logo} src="/Logo/mobile_logo.svg"/>
        </Link>
      {open ? closeicon : hamburgericon}
      {open && <NavLinks close={setOpen} />}
    </div>
  );
}
