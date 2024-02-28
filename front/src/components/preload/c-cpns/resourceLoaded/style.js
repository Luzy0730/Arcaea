import styled from "styled-components";
import { systemConfig } from '@/config/arcaea.config';
import { preloadStore } from '@/config/resource.config'
const { Common } = preloadStore.images

export const ResourceLoadedWrapper = styled.div`
  z-index: 10000;
  position: fixed;
  right: 0;
  bottom: 0;
  overflow: hidden;
  transform: scale(0.6);
  filter: invert(1);
  z-index: ${props => props.zIndex};
  .resourece-loaded {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    .title_loaded {
      transform: translate(-2px, 31px);
      font-family: 'GeosansLight';
      font-size: 0.5rem;
      font-weight: bold;
      transition: opacity ${systemConfig.resourceLoadedDuration}ms;
      opacity: 0;
    }
    .icon_loaded {
      opacity: 0;
      width: 0.97rem;
      height: 1.46rem;
      background: url(${Common[0]}) no-repeat center/cover;
      animation: ic_ld 700ms infinite;
      transition: opacity ${systemConfig.resourceLoadedDuration}ms 200ms;
    }
    &.loading {
      .title_loaded {
        opacity: 1;
      }
      .icon_loaded {
        opacity: 0.7;
      }
    }
  }
  
  @keyframes ic_ld {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
`