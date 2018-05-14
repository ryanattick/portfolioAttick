import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import style from './App.css';

class Home extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <div class="bg-video">
              <video class="bg-video__content" autoplay muted loop>
                <source src="../public/Aloha-Mundo/MP4/Aloha-Mundo.mp4" type="video/mp4"/>
                <source src="../public/Aloha-Mundo/WEBM/Aloha-Mundo.webm" type="video/webm"/>
                  Your browser is not supported :(
              </video>
        </div>
        <Subheader class="subheader">
            <strong> SPENCER ATTICK </strong>
          </Subheader>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', alignContent: 'stretch', alignItems: 'center'}}>
            <img
              src="https://lh3.googleusercontent.com/16p91QuOxLXjdZ-SID_grZIzmz6byfjPFDxhC8OWOuGH-V3GhE7PCZQQrZndhtS-hdSEXfMap3D6EmZ2P6spsQnyDEkiwmzHAEWu7Hco43QbkKjfmGTQ7iZgnv6rwDuzKjwqza1r2811K0pG5EleEeEaQ-N0q0nh_WKwM4WqMebqcabw0ILnkIGsE0001OjgPuQh1Uyj_pKM6qGO8WpQjxENSB0h0iGRAjQHuK_UtiIZ30GlvBNWctWpQ6XR0jPkcNnITHS5clQbglsGFtGoMbJMJ6VartlK4y5Vdy4bqMH-8gbuXzlGFUGYNM384dYT6XrcifzIYcJW85Jo3duNrLlSnfwWCenFKmo_i9n2IrgpNHnuBwoY4IdjZOkkZ4yH24uV3FhVUnd7d-IKxnwSUoUPeynzNXANcxlLS2G7T1sq9OQdi3tieSWaWnCgDU1yURNdRUERFu19qQOb7zL2wWWxhV5Ctf2fkmxbJTL9hCOY-G0mP-dT9X6muHVBfajK2QkkksAmYa6eEx93Sx3oMDdYvv2n31DaCBm_UQdhsJMYDI30Im-Kz8rBHFrq1E16MlHxpvj36jG9rIxPXiW64JRB1EdYcrxAZvNzUfc=s200-no"
              style={{width: '20%', height: 'auto', borderRadius: '150px', margin: '70px'}}
            />
            <div
              style={{maxWidth: '700px', height: '200px', fontSize: '2vw', color: 'rgba(0, 0, 0, 0.54)', lineHeight: '140%'}}
            >
              <strong>I am a fullstack software engineer based in the San Francisco Bay Area specializing in frontend frameworks. My focus has primarily been on building efficient Javascript applications that create beautiful user interfaces and intuitive user flow. I'm passionate about using new and innovative concepts to solve problems and build comprehensive applications.</strong>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
