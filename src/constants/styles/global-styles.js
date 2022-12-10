import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${() => css`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

    :root {
      --swiper-navigation-size: 30px;
    }

    * {
      border: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 0;
      list-style: none;
      text-decoration: none;
      outline: none;
    };

    body {
      position: relative;
    };

    body,button, input, select {
      font-family: 'Open Sans', sans-serif;
    }

    .bodyOverflow {
      overflow: hidden;
    }

    .header, .section {
      transition: filter 0.7s ease;
      filter: none;
    };

    .headerFilter, .sectionFilter {
      transition: filter 0.7s ease;
      filter: blur(2px);
    };

    .root {
      position: relative;
    };

    .swiper {
      position: static;
      overflow-y: visible;
      width: 100%;
      overflow-x: hidden;
    }

    .front-end, .back-end, .design {
      opacity: 0.6;
    }

    .front-end-prg, .back-end-prg, .design-prg {
      opacity: 1;
    }

    .front-end {
      background: linear-gradient(140deg, rgba(154,218,100,1) 6%, rgba(127,192,71,1) 39%);
    }

    .back-end {
      background-image: linear-gradient(140deg, rgba(157,153,236,1) 6%, rgba(104,98,200,1) 39%);
    }

    .design {
      background-image: linear-gradient(140deg, rgba(251,178,128,1) 6%, rgba(249,145,76,1) 39%);;
    }

    .swiper-button-prev, .swiper-button-next {
      background: #333;
      color: white;
      padding: 20px;
      border-radius: 50%;
      top: auto;
      left: auto;
      bottom: -50px;
    }

    .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
      position: absolute;
      left: 50%;
      margin-left: -9px;
    }

    .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
      position: absolute;
      left: 50%;
      margin-left: -5px;
    }

    .swiper-button-prev {
      right: 85px;
    }

    .swiper-button-next {
      right: 30px;
    }

    .swiper-scrollbar-drag, .swiper-scrollbar {
      display: none;
    }

    .swiper-pagination-bullet {
      background-color: black;
    }

    .openMenu {
      transition: height 0.7s ease;
      height: 100%;
    };

    .closeMenu {
      transition: height 0.7s ease;
      height: 0;
      overflow:hidden;
    };

    .openActionMenu,.openDeleteMenu, .openPrgMenu {
      transition: all 500ms ease;
      height: 155px;
      padding: 10px;
      width: 217.656px;
    }

    .closeActionMenu, .closeDeleteMenu  {
      transition: all 500ms ease;
      height: 0px;
      padding: 0px;
      width: 0px;
    }

    .openDeleteMenu {
      width: 192px;
      height: 121px;
    }

    .openPrgMenu {
      height: 121px;
      width: 261px;
    }
  `}
`;
