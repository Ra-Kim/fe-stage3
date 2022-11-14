import React from 'react'
import {Link} from 'react-router-dom'
import { StyledHeader } from './styled/StyledHeader'
import Logo from "../assets/svgs/Logo.svg"

const Header = (props) => {
  return (
    <StyledHeader>
        <Link to = "/">
        <div>
            <img
             src={Logo}
             alt = "logo"
            />
        </div>
        </Link>
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/places">Place To Stay</Link>
            <Link>NFTs</Link>
            <Link>Community</Link>
        </nav>
        <div>
            <button onClick={props.toggleOverlay}>Connect Wallet</button>
        </div>
    </StyledHeader>
  )
}

export default Header