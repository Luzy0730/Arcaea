import styled from "styled-components";
import preloadStore from '@/config/resource.config'
const { Common, Char } = preloadStore.images

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  .layout {
    width: 100%;
    height: 100%;
    .topbar {
      box-sizing: border-box;
      position: fixed;
      top: 0;
      left: 0;
      width: 19.2rem;
      height: 1.046rem;
      background: url(${Common[3]}) no-repeat center/cover;
      font-size: 36px;
      font-weight: bold;
      .topbar-content {
        position: absolute;
        top: 0;
        left: 0.2rem;
        right: 0;
        bottom: 0.24rem;
        overflow: hidden;
        display: flex;
        align-items: center;
      }
      .title {
        color: #4a303d;
        font-family: 'GeosansLight';
      }
      .identity {
        position: absolute;
        left: 32.5%;
        top: 33%;
        width: 2.32rem;
        height: 0.28rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url(${Common[4]}) no-repeat center/cover;
        & >div {
          transform: translateY(-4px);
        }
      }
    }
    .avatar {
      position: absolute;
      left: 46%;
      top: -23%;
      width: 1.4rem;
      height: 1.4rem;
      background: url(${Char[0]}) no-repeat center/cover;
    }
    .config {
      position: absolute;
      left: 56%;
      top: 4%;
      width: 105px;
      height: 105px;
      background-color: #6b5072;
      transform: rotateZ(45deg);
      .config-lock {
        position: absolute;
        top: 22%;
        left: 20%;
        opacity: 0.5;
        width: 0.5rem;
        height: 0.5rem;
        background: url(${Common[5]}) no-repeat center/cover;
      }
    }
  }
`