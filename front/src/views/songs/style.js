import styled from "styled-components";

export const SongsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .songs {
    width: 100%;
    height: 100%;
    background: url("/image/songs/bg_select_dark.png") no-repeat center/cover;
    .back {
      opacity: 0.8;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 3.24rem;
      height: 0.97rem;
      background: url("/image/songs/back.png") no-repeat center/cover;
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
      background: url("/image/songs/back_pressed.png") no-repeat center/cover;
      }
    }
  }
`