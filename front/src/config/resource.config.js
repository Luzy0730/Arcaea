export const preloadImages = {
  // 公共图片
  Common: [
    "/image/layouts/loaded/activity_icon.png",
    "/image/layouts/shutter/shutter_l.png",
    "/image/layouts/shutter/shutter_r.png",
    "/image/layouts/topbar/top_bar_bg.png",
    "/image/layouts/topbar/status_bg.png",
    "/image/layouts/topbar/settings.png",
  ],
  // 人物
  Char: [
    "/image/char/0_icon.png",
    "/image/char/1080/0.png"
  ],
  // 起始页
  Startup: [
    "/image/startup/1080/bg.jpg",
    "/image/startup/start_wreath.png",
    "/image/startup/start_icon.png",
    "/image/startup/m1.png",
    "/image/startup/m2.png",
    "/image/startup/m3.png",
    "/image/startup/1080/title.png",
    "/image/startup/1080/title_glow.png",
    "/image/startup/1080/char_t.png",
    "/image/startup/1080/char_h.png",
    "/image/startup/copyright.png",
    "/image/startup/lowiro_white.png",
    "/image/startup/main_glass.png",
    "/image/startup/lowiro_white.png",
  ],
  // 主页
  "/layout/main": [
    "/image/main/bg_light.jpg",
    "/image/main/bg_shadow.png",
    "/image/main/mainmenu/main_musicplay.png",
    "/image/main/mainmenu/main_musicplay_pressed.png",
    "/image/main/mainmenu/new_badge.png",
    "/image/main/mainmenu/main_story.png",
    "/image/main/mainmenu/main_story_pressed.png",
    "/image/main/mainmenu/world_offline.png",
    "/image/main/mainmenu/world_text_offline.png",
    "/image/main/mainmenu/world_offline_pressed.png",
    "/image/main/mainmenu/main_course_disabled.png",
    "/image/main/mainmenu/main_course_disabled_pressed.png",
    "/image/main/mainmenu/main_network.png",
    "/image/main/mainmenu/main_network_pressed.png",
    "/image/main/mainmenu/main_more.png",
    "/image/main/mainmenu/main_more_pressed.png"
  ],
  // 歌单页
  '/layout/songs': [
    "/image/songs/bg_select_dark.png",
    "/image/songs/back.png",
    "/image/songs/back_pressed.png",
    "/image/songs/divider_free.png",
    "/image/songs/1080_select_base.png",
    "/image/songs/1080_select_extend_2.png"
  ],
  // 游玩界面
  "/play": [
    "/image/play/base_light.jpg",
    "/image/play/track.png",
    "/image/play/track_lane_divider.png",
    "/image/play/note.png",
    "/image/play/note_colorless.png",
    "/image/play/hit_far.png",
    "/image/play/hit_lost.png",
    "/image/play/hit_pure.png",
    "/image/play/uileft.png",
    "/image/play/uileft_pressed.png",
    "/image/play/uiright.png",
    "/image/play/1080_base_256.png",
    "/image/play/hp_bar_course_grid.png",
  ]
}

export const preloadStore = {
  images: process.env.REACT_APP_ENV === 'production'
    ? Object.keys(preloadImages).reduce((acc, key) => {
      const updatedImages = preloadImages[key].map(image => {
        let updatedImage = image.replace('/image', '/image-min');
        updatedImage = updatedImage.replace(/.png|.jpg/g, '.webp');
        return updatedImage;
      });
      acc[key] = updatedImages;
      return acc;
    }, {})
    : preloadImages
}