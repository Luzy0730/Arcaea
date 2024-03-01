import styled from "styled-components";
import { preloadStore } from '@/config/resource.config'
const { Char, Main } = preloadStore.images

export const MainWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .main {
    width: 100%;
    height: 100%;
    background: url(${Main[0]}) no-repeat center/cover;
  }
  .portrait {
    position: absolute;
    top: 0.65rem;
    right: -6.44rem;
    width: 18rem;
    height: 18rem;
    background: url(${Char[1]}) no-repeat center/cover;
    animation: portrait 10s infinite;
  }
  .main-shadow {
    position: fixed;
    top: 0;
    right: 0;
    width: 9.45rem;
    height: 100%;
    background: url(${Main[1]}) no-repeat center/cover;
  }
  .main-menu {
    position: absolute;
    top: 22%;
    left: 9.5%;
    font-size: 0.8rem;
    color: #fff;
    line-height: 1.6;
    & > div {
      text-indent: 1rem;
    }
    .start-game {
      position: absolute;
      top: 0.32rem;
      left: 0.88rem;
      width: 6.29rem;
      height: 1.75rem;
      background: url(${Main[2]}) no-repeat center/cover;
      &.new::before {
        content: "";
        position: absolute;
        top: -42px;
        left: -18px;
        width: 1.2rem;
        height: 1.2rem;
        background: url(${Main[4]}) no-repeat center/cover;
      }
      &:active {
        background: url(${Main[3]}) no-repeat center/cover;
      }
    }
    .story-mode {
      position: absolute;
      top: 1.87rem;
      left: 0.05rem;
      width: 6.35rem;
      height: 1.75rem;
      background: url(${Main[5]}) no-repeat center/cover;
      &:active {
        background: url(${Main[6]}) no-repeat center/cover;
      }
    }
    .world-place {
      position: absolute;
      top: 187px;
      left: 560px;
      width: 3.02rem;
      height: 3.02rem;
      transform: rotate(45deg);
      z-index: 10;
      &:active +.world{
        background: url(${Main[9]}) no-repeat center/cover;
      }
    }
    .world {
      position: absolute;
      top: 1.21rem;
      left: 4.88rem;
      width: 4.65rem;
      height: 4.64rem;
      background: url(${Main[7]}) no-repeat center/cover;

      &::after {
        content: "";
        position: absolute;
        width: 3.76rem;
        height: 0.98rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url(${Main[8]}) no-repeat center/cover;
      }
    }
    .challenge {
      position: absolute;
      top: 3.43rem;
      left: -0.95rem;
      width: 7.26rem;
      height: 1.75rem;
      background: url(${Main[10]}) no-repeat center/cover;
      &:active {
        background: url(${Main[11]}) no-repeat center/cover;
      }
    }
    .online {
      position: absolute;
      top: 5.02rem;
      left: -0.21rem;
      width: 3.81rem;
      height: 1.74rem;
      background: url(${Main[12]}) no-repeat center/cover;
      &:active {
        background: url(${Main[13]}) no-repeat center/cover;
      }
    }
    .other {
      position: absolute;
      top: 5rem;
      left: 3.05rem;
      width: 4.06rem;
      height: 1.74rem;
      background: url(${Main[14]}) no-repeat center/cover;
      &:active {
        background: url(${Main[15]}) no-repeat center/cover;
      }
    }
  }

  @keyframes portrait {
    0% {
      top: 0.65rem;
    }
    50% {
      top: 0.41rem;
    }
    100% {
      top: 0.65rem;
    }
  }
`