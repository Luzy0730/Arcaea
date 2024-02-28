import styled from "styled-components";
import { preloadStore } from '@/config/resource.config'
const { LayoutSongs } = preloadStore.images

export const SongsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .songs {
    width: 100%;
    height: 100%;
    background: url(${LayoutSongs[0]}) no-repeat center/cover;
    .albums {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      transition: all ease-in-out .3s;
      .free {
        display: flex;
        align-items: center;
        margin-right: -20px;
        &::before {
          content: "";
          display: block;
          width: 71px;
          height: 369px;
          background: url(${LayoutSongs[3]}) no-repeat center/cover;
        }
        .free-item {
          position: relative;
          margin: 0 20px;
          width: 401px;
          height: 717px;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          &:active {
            filter: drop-shadow(0 0 20px #fff);
          }
        }
      }
      &.hide {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0;
      }
    }
    .back {
      opacity: 0.8;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 3.24rem;
      height: 0.97rem;
      background: url(${LayoutSongs[1]}) no-repeat center/cover;
      &::after {
        content: "主菜单";
        color: #342b41;
        font-size:0.28rem;
        position: absolute;
        top: 0.20rem;
        left: 1.01rem;
        font-weight: bold;
      }
      &:active {
        background: url(${LayoutSongs[2]}) no-repeat center/cover;
      }
    }
  }
`