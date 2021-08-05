import React from 'react';
import Logo from './cr.png';
import Tenor from './tenor.gif';
function Home(props) {
    const { Transition } = props;
    return (
        <div className="container flex text-center justify-center justify-items-center animate__animated animate__slow" id="axie">
            <div className="w-full max-w-xl text-center" style={{ margin: "auto" }}>
                <h4 className="text-center justify-center justify-items-center fontNunito" style={{ fontSize: "1.8rem" }}>Scholarships CryptoClub</h4>
                <div className="text-center justify-center justify-items-center" style={{ marginTop: "70%", cursor: "pointer" }}>
                    <img src={Logo} onClick={() => { Transition() }} className="w-1/6 Logo" style={{ margin: "auto", right: "44.8%", top: "16%", position: "fixed" }} />
                    <img src={Tenor} />
                    {/* <button onClick={() => { Transition() }}>Test</button> */}
                </div>
            </div>
        </div>
    )


}
export default Home;