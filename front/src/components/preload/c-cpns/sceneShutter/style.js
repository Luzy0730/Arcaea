import styled from "styled-components";
import { systemConfig } from '@/config/arcaea.config';
import preloadStore from '@/config/resource.config'
const { Common } = preloadStore.images

export const SceneShutterWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.zIndex};
  .scene-shutter {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .shutter_l {
      position: absolute;
      top: -0.82rem;
      left: -20rem;
      width: 19.5rem;
      height: 110%;
      transform: rotateX(180deg);
      background: url(${Common[1]}) no-repeat center/cover;
      transition: left ${systemConfig.sceneShutterDuration}ms ease-in-out;
    }
    .shutter_r {
      height: 100%;
      width: 4.7rem;
      position: absolute;
      top: 0;
      right: -5rem;
      transform: rotateX(180deg);
      background: url(${Common[2]}) no-repeat center/cover;
      transition: right ${systemConfig.sceneShutterDuration}ms ease-in-out;
    }
    &.loading {
      .shutter_l { left: -0.93rem; }
      .shutter_r { right: 0rem;}
    }
  }
`