import { createGlobalStyle } from 'styled-components';

import AkzidenzGroteskWoff from './AkzidenzGrotesk.woff';
import AkzidenzGroteskWoff2 from './AkzidenzGrotesk.woff2';
import AkzidenzGroteskCondensedWoff from './Akzidenz-GroteskCondensed.woff';
import AkzidenzGroteskCondensedWoff2 from './Akzidenz-GroteskCondensed.woff2';
import AkzidenzGroteskItalicWoff from './AkzidenzGroteskBE-It.woff';
import AkzidenzGroteskItalicWoff2 from './AkzidenzGroteskBE-It.woff2';
import GaramoundItalicWoff from './CormorantGaramondItalic.woff'
import GaramoundMediumItalicWoff from './CormorantGaramondMediumItalic.woff'
import LateefWoff from './Lateef.woff';
import LateefWoff2 from './Lateef.woff2';
import Circular from './Circular.woff';
import Circular2 from './Circular.woff2';
import DrukWM from './DrukWM.woff';
import DrukWM2 from './DrukWM.woff2';
import Iskoola from './IskoolaPota.woff';
import Iskoola2 from './IskoolaPota.woff2';
import MochaMattari from './MochaMattari.woff';
import MochaMattari2 from './MochaMattari.woff2';
import NeurialGrotesk from './NeurialGrotesk.woff';
import NeurialGrotesk2 from './NeurialGrotesk.woff2';
import Orpheus from './Orpheus.woff';
import Orpheus2 from './Orpheus.woff2';
import SharpGrotesk from './SharpGrotesk.woff';
import SharpGrotesk2 from './SharpGrotesk.woff2';
import SpaceMono from './SpaceMono.woff';
import SpaceMono2 from './SpaceMono.woff2';
import GoudyBookletter from './GoudyBookletter.woff';
import GoudyBookletter2 from './GoudyBookletter.woff2';
import Cardo from './Cardo.woff';
import Cardo2 from './Cardo.woff2';
import FrenchCanon from './FrenchCanon.woff';
import FrenchCanon2 from './FrenchCanon.woff2';
import JejuMyeongjo from './JejuMyeongjo.woff';
import JejuMyeongjo2 from './JejuMyeongjo.woff2';
import CGLightItalic from './CormorantGaramondLightItalic.woff';
import CGLightItalic2 from './CormorantGaramondLightItalic.woff2';
import CGLight from './CormorantGaramondLight.woff';
import CGLight2 from './CormorantGaramondLight.woff2';
import AGHelvetica from './AG_Helvetica.woff';
import AGHelvetica2 from './AG_Helvetica.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'AG';
        src: local('Akzidenz Grotesk'), local('AkzidenzGrotesk'),
        url(${AkzidenzGroteskWoff}) format('woff'),
        url(${AkzidenzGroteskWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'AG Condensed';
        src: local('Akzidenz Grotesk Condensed'), local('AkzidenzGroteskCondensed'),
        url(${AkzidenzGroteskCondensedWoff}) format('woff'),
        url(${AkzidenzGroteskCondensedWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'AG Italic';
        src: local('Akzidenz Grotesk Italic'), local('AkzidenzGroteskItalic'),
        url(${AkzidenzGroteskItalicWoff}) format('woff'),
        url(${AkzidenzGroteskItalicWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Lateef';
        src: local('Lateef'), local('Lateef'),
        url(${LateefWoff}) format('woff'),
        url(${LateefWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'CG Italic';
        src: local('Garamound Italic'), local('GaramoundItalic'),
        url(${GaramoundItalicWoff}) format('woff');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'CG Medium Italic';
        src: local('Garamound Medium Italic'), local('GaramoundMediumItalic'),
        url(${GaramoundMediumItalicWoff}) format('woff');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular';
        src: local('Circular'), local('Circular'),
        url(${Circular}) format('woff'),
        url(${Circular2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'DrukWM';
        src: local('DrukWM'), local('DrukWM'),
        url(${DrukWM}) format('woff'),
        url(${DrukWM2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'Iskoola';
        src: local('Iskoola'), local('Iskoola'),
        url(${Iskoola}) format('woff'),
        url(${Iskoola2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'Mocha';
        src: local('Mocha Mattari'), local('MochaMattari'),
        url(${MochaMattari}) format('woff'),
        url(${MochaMattari2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'Neurial';
        src: local('Neurial Grotesk'), local('NeurialGrotesk'),
        url(${NeurialGrotesk}) format('woff'),
        url(${NeurialGrotesk2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'Orpheus';
        src: local('Orpheus'), local('Orpheus'),
        url(${Orpheus}) format('woff'),
        url(${Orpheus2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'SharpGrotesk';
        src: local('Sharp Grotesk'), local('SharpGrotesk'),
        url(${SharpGrotesk}) format('woff'),
        url(${SharpGrotesk2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'SpaceMono';
        src: local('Space Mono'), local('SpaceMono'),
        url(${SpaceMono}) format('woff'),
        url(${SpaceMono2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'GoudyBookletter';
        src: local('Goody Bookletter'), local('GoudyBookletter'),
        url(${GoudyBookletter}) format('woff'),
        url(${GoudyBookletter2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Cardo';
        src: local('Cardo'), local('Cardo'),
        url(${Cardo}) format('woff'),
        url(${Cardo2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'FrenchCanon';
        src: local('French Canon'), local('FrenchCanon'),
        url(${FrenchCanon}) format('woff'),
        url(${FrenchCanon2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'JejuMyeongjo';
        src: local('Jeju Myeongjo'), local('JejuMyeongjo'),
        url(${JejuMyeongjo}) format('woff'),
        url(${JejuMyeongjo2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'CG LI';
        src: local('CGLightItalic'), local('CGLightItalic'),
        url(${CGLightItalic}) format('woff'),
        url(${CGLightItalic2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }

    @font-face {
        font-family: 'CG Light';
        src: local('CG Light'), local('CGLight'),
        url(${CGLight}) format('woff'),
        url(${CGLight2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }
    
    @font-face {
        font-family: 'AGHelvetica';
        src: local('AG Helvetica'), local('AGHelvetica'),
        url(${AGHelvetica}) format('woff'),
        url(${AGHelvetica2}) format('woff2');
        /* font-weight: 300; */
        font-style: normal;
    }
`;