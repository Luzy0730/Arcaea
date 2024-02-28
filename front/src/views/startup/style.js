import styled from 'styled-components'
import { preloadStore } from '@/config/resource.config'
const { Startup } = preloadStore.images

export const StartupWrapper = styled.div`
  width: 100%;
  height: 100%;
  .arcaea-startup {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${Startup[0]});
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: 100%;
    animation: as_bpy 18s ease-in-out 2s forwards;

    .start-icon-wrapper {
      opacity: 1;
      animation: si_wp 2s forwards;
      .start_wreath {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 8.31rem;
        height: 8.21rem;
        background: url(${Startup[1]}) no-repeat center/cover;
      }
      .start_icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotateY(0deg);
        width: 4.2rem;
        height: 4.2rem;
        background: url(${Startup[2]}) no-repeat center/cover;
        animation: si_ry 1s ;
      }
    }

    .prequel {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) ;
      animation : pq 2s 13s forwards;
      .m1,.m2,.m3 { 
        width: 7.2rem; 
        height: 1.2rem; 
        transform: translateY(1rem);
        opacity: 0;
      }
      .m1 {
        animation : pq_m 2s ease-in-out 6s forwards;
        background: url(${Startup[3]}) no-repeat center/cover;
      }
      .m2 { 
        animation : pq_m 2s ease-in-out 8s forwards;
        background: url(${Startup[4]}) no-repeat center/cover;
      }
      .m3 {
        animation : pq_m 2s ease-in-out 10s forwards;
         background: url(${Startup[5]}) no-repeat center/cover;
      }
    }
    .title {
      opacity: 0;
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%) rotateY(0deg);
      width: 13.52rem;
      height: 3.9rem;
      background: url(${Startup[6]}) no-repeat center/cover;
      animation: tl 4s ease-in-out 14s forwards;
      &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${Startup[7]}) no-repeat center/cover;
        transform: scale(1.01);
        opacity: 0;
        filter: brightness(1);
        animation: tl_gl 4s ease-in 18s infinite;
      }
    }
    .flash {
      width: 19.2rem;
      height: 10.8rem;
      position: fixed;
      top: 0;
      left: 0;
      background: #fff;
      opacity: 0;
      animation: flash .5s ease 18.5s;
    }
    .char_t_wp {
      position: absolute;
      bottom: -19%;
      opacity: 0;
      left: -13%;
      width: 18rem;
      height: 12.75rem;
      animation: char_t 1.5s ease 18.5s forwards;
    }
    .char_t {
      width: 100%;
      height: 100%;
      background: url(${Startup[8]}) no-repeat center/cover;
      animation: chart 5s ease-out 20.3s infinite;
    }
    .char_h_wp {
      opacity: 0;
      position: absolute;
      bottom: -43%;
      left: 14%;
      width: 18rem;
      height: 12.75rem;
      animation: char_h 1.5s ease 18.5s forwards;
      .char_h {
        width: 100%;
        height: 100%;
        background: url(${Startup[9]}) no-repeat center/cover;
        animation: chart 5s ease-out 20s infinite;
      }
    }
    .copy {
      opacity: 0;
      position: absolute;
      bottom: 1%;
      left: 1%;
      width: 2.07rem;
      height: 0.32rem;
      background: url(${Startup[10]}) no-repeat center/cover;
      animation: appear 0.5s 18.5s forwards;
    }
    .manufacturer {
      opacity: 0;
      position: absolute;
      bottom: 1%;
      right: 1%;
      width: 2.2rem;
      height: 0.96rem;
      background: url(${Startup[11]}) no-repeat center/cover;
      animation: appear 0.5s 18.5s forwards;
    }
    .glass_wp {
      position: absolute;
      top: 5%;
      left: 0%;
      width: 19.2rem;
      height:10.8rem;
      opacity: 0;
      animation: glass_wp 1s ease-in-out 18.5s forwards;
      .glass {
        width: 100%;
        height: 100%;
        filter: brightness(1.2);
        background: url(${Startup[12]}) no-repeat center/cover;
        animation: glass 2.5s ease-in-out 20s infinite;
        &::after {
          content: "";
          position: absolute;
          top: 0%;
          left: 0%;
          width: 100%;
          height: 100%;
          transform: scale(1.01);
          opacity: 0.4;
          filter: brightness(1.5);
          background: url(${Startup[12]}) no-repeat center/cover;
          animation: glass_gl 2.5s ease-in-out 20s infinite;
        }
      }
    }
  }

  @keyframes si_ry {
    0% {transform: translate(-50%,-50%) rotateY(0deg);}
    100% {transform: translate(-50%,-50%) rotateY(180deg);}
  }
  @keyframes si_wp {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  @keyframes as_bpy {
    0% { background-position-y: 0%}
    100% { background-position-y: 80%}
  }
  @keyframes pq_m {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0rem);
    }
  }
  @keyframes pq {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes tl {
    0% {
      bottom: 20%;
      opacity: 0;
    }
    100% {
      bottom: 0%;
      opacity: 1;
    }
  }
  @keyframes tl_gl {
    30% {
      transform: scale(1.01);
      opacity: 0;
      filter: brightness(1);
    }
    70% {
      transform: scale(1.04);
      opacity: 0.5;
      filter: brightness(3);
    }
    100% {
      transform: scale(1.01);
      opacity: 0;
      filter: brightness(1);
    }
  }
  @keyframes flash {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.4;
      filter: brightness(1.5);
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes char_t {
    0% {
      opacity: 0;
      left: -12%;
    }
    100% {
      opacity: 1;
      left: -22%;
    }
  }
  @keyframes char_h {
    0% {
      opacity: 0;
      left: 4%;
    }
    100% {
      opacity: 1;
      left: 14%;
    }
  }
  @keyframes chart {
    0% {transform: translateY(0%);}
    50% { transform: translateY(-2%);}
    100% {transform: translateY(0%);}
  }
  @keyframes glass_wp {
    0% {
      opacity: 0.8;
      transform: scale(.7);
    }
    100% {
      opacity: 1;
      transform: scale(1.12);
    }
  }
  @keyframes glass {
    0% {transform: scale(1);}
    70% { transform: scale(1.05);}
    100% {transform: scale(1);; }
  }
  @keyframes glass_gl {
    0% {transform: scale(1.01);}
    70% { transform: scale(1.08);}
    100% {transform: scale(1.01); }
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`