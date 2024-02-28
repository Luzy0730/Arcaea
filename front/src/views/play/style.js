import styled from "styled-components";
import { systemConfig } from '@/config/arcaea.config';

export const PlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  .play {
    width: 100%;
    height: 100%;
    background: url("/image/play/base_light.jpg") no-repeat center/cover;
    .uileft {
      position: absolute;
      left: 0;
      top: 20px;
      width: 237px;
      height: 99px;
      transform: scale(0.95);
      transform-origin: left;
      background: url("/image/play/uileft.png") no-repeat center/cover;
      cursor: pointer;
      &:active {
        background: url("/image/play/uileft_pressed.png") no-repeat center/cover;
      }
    }
    .uiright {
      position: absolute;
      right: 0;
      top: 20px;
      width: 616px;
      height: 314px;
      transform: scale(0.95);
      transform-origin: right;
      background: url("/image/play/uiright.png") no-repeat center/cover;
      font-family: 'Exo-Light';
      color: #fff;
      text-shadow: 3px 3px #000000d1;
      .song-score {
        position: absolute;
        width: 450px;
        right: 34px;
        top: 34px;
        font-size: .9rem;
      }
      .song-cover {
        position: absolute;
        width: 131px;
        height: 131px;
        bottom: 12px;
        left: 97px;
        background: url("/songs/fairytale/1080_base_256.jpg") no-repeat center/cover;
      }
    }
    .hp-bar {
      position: absolute;
      top: 0;
      left: 30px;
      width: 39px;
      height: 487px;
      background: url("/image/play/hp_bar_course_grid.png") no-repeat center/cover;
      background-color: #fff;
    }
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
          animation: track-line ${systemConfig.playSpeed}ms forwards;
          z-index: -1;
        }
        .track-part {
          flex-grow: 1;
          position: relative;
          &.active::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: purple;
            opacity: 0.05;
          }
          &:nth-child(1)::after,
          &:nth-child(2)::after,
          &:nth-child(3)::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 0.06rem;
            height: 100%;
            background: url("/image/play/track_lane_divider.png") no-repeat center/cover;
          }
          .note-judge {
            position: absolute;
            bottom: 10%;
            left: 0px;
            position: absolute;
            bottom: 11%;
            width: 100%;
            height: 16px;
            background-color: #653e70;
            border-top: 2px solid #9f4596;
            border-bottom: 2px solid #9f4596;
            .note-hited {
              position: absolute;
              left: 0%;
              right: 2%;
              padding-top: 100%;
              top: 50%;
              transform: translateY(-50%);
              &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url("/image/play/note_colorless.png") no-repeat ;
                animation: note-hited ${systemConfig.playHitDuration}ms steps(16) both;
              }
            }
            .hited-word {
              position: absolute;
              left: 50%;
              top: -80px;
              opacity: 0;
              transform: translateX(-50%);
              width: 114px;
              height: 108px;
              animation: hw-1 ${systemConfig.playHitDuration}ms forwards;
              &.hw-1 {
                background: url("/image/play/hit_pure.png") no-repeat ;
              }
              &.hw-2 {
                background: url("/image/play/hit_far.png") no-repeat ;
              }
              &.hw-3 {
                background: url("/image/play/hit_lost.png") no-repeat ;
              }
            }
          }
          .note {
            border-radius: 5px;
            position: absolute;
            top: -2.5%;
            left: 5%;
            width: 90%;
            height: 0.64rem;
            background: url("/image/play/note.png") no-repeat center/cover;
            animation: note ${systemConfig.playSpeed}ms forwards;
            &.hited {
              display: none;
            }
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
      top: -0.64rem;
    }
    100% {
      top: calc(105% - 0.64rem)
    }
  }

  @keyframes note-hited {
    0% { background-position: -14px -8px};
    100% { background-position: -4096px -8px};
  }
  @keyframes hw-1 {
    0% { 
      top: -80px;
      opacity: 0;
    };
    75% {
      top: -115px;
      opacity: 1;
    };
    100% {
      top: -115px;
      opacity: 0.75;
    }
  }
`