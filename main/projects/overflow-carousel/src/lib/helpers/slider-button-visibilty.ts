export class SliderButtonVisibilty {

  showLeftSlider: boolean;
  showRightSlider: boolean;

  updateSliderButtonVisibilty(
    containerWidth: number,
    contentWidth: number,
    translatedPosition: number
  ): void {

    // Content width is less that container width
    if (contentWidth < containerWidth) {
      this.showLeftSlider = false;
      this.showRightSlider = false;
    }
    else {
      // Content available to lest side
      if (translatedPosition >= 0) {
        this.showLeftSlider = false;
      }
      else {
        this.showLeftSlider = true;
      }

      // Content available to right side
      if (Math.abs(translatedPosition) >= contentWidth - containerWidth) {
        this.showRightSlider = false;
      }
      else {
        this.showRightSlider = true;
      }
    }
  }

}
