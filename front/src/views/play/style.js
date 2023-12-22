import styled from "styled-components";

export const PlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  .play {
    width: 100%;
    height: 100%;
    background: url("/image/play/base_light.jpg") no-repeat center/cover;
    .track-wp{
      perspective: 1000px;
      width: 100%;
      height: 100%;
      position: relative;
      .track {
        content: "";
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        height: 404%;
        background: url(/image/play/track.png) no-repeat center;
        background-repeat: repeat-y;
        transform: rotateX(60deg) scale(6);
        transform-origin: 50% 100%;
        animation: track-run 1000s ease infinite;
        display: flex;
        padding: 0 25%;
        box-sizing: border-box;
        .track-line {
          position: absolute;
          top: 50%;
          height: 12px;
          width: 50%;
          background: #cecece;
          animation: track-line 5s forwards;
          z-index: -1;
        }
        .track-part {
          flex-grow: 1;
          position: relative;
          &:nth-child(1)::before,
          &:nth-child(2)::before,
          &:nth-child(3)::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 0.06rem;
            height: 100%;
            background: url("/image/play/track_lane_divider.png") no-repeat center/cover;
          }
          &:active {
            background: purple;
            opacity: 0.05;
          }
          .note {
            border-radius: 5px;
            position: absolute;
            top: -2.5%;
            left: 5%;
            width: 90%;
            height: 0.64rem;
            background: url("/image/play/note.png") no-repeat center/cover;
            animation: note 5s forwards;
          }
        }
      }
    }
  }

  @keyframes track-run {
    0% {
      background-position-y: 0%;
    }
    100% {
      background-position-y: 20000%;
    }
  }

  @keyframes track-line {
    0% {
      top: 0%;
    }
    100% {
      top: 105%;
    }
  }
  @keyframes note {
    0% {
      top: -0.64rem;;
    }
    100% {
      top: calc(105% - 0.64rem);
    }
  }
`