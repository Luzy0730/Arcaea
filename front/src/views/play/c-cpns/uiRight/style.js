const { default: styled } = require("styled-components")

export const UiRightWrapper = styled.div`
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
`