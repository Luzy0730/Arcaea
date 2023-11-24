import styled from "styled-components";
import { systemConfig } from '@/config/arcaea.config';

export const AppLoadWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .app-load {
    width: 100%;
    height: 100%;
    .shutter_l {
      position: absolute;
      top: 0;
      left: 0;
      width: 19.5rem;
      height: 100%;
      transform: rotateX(180deg);
      background: url("/image/common/shutter_l.png") no-repeat center/cover;
      background-position: -20rem -2.06rem;
      transition: background-position ${systemConfig.appLoadDuration}ms ease-in-out;
    }
    .shutter_r {
      height: 100%;
      width: 4.7rem;
      position: absolute;
      top: 0;
      right: 0;
      transform: rotateX(180deg);
      background: url("/image/common/shutter_r.png") no-repeat center/cover;
      transition: background-position-x ${systemConfig.appLoadDuration}ms ease-in-out;
      background-position-x: 5rem;
    }
    &.loading {
      .shutter_l { background-position: -0.93rem -2.06rem; }
      .shutter_r { background-position-x: 0rem;}
    }
  }
`