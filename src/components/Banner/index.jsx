import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Slider from 'rax-slider';

function Banner() {
  return (
    <View>
      <Slider
        className="slider"
        width="750"
        height="500"
        style={styles.slider}
        autoPlay
        loop
        showsPagination
        paginationStyle={styles.paginationStyle}
        autoplayTimeout={3000}
        onChange={this.onchange}
        ref={this.inputRef}
      >
        <swiper-item>
          <View style={styles.itemWrap}>
            <Image
              style={styles.image}
              source={{
                height: 500,
                width: 375,
                uri:
                  '//gw.alicdn.com/tfs/TB19NbqKFXXXXXLXVXXXXXXXXXX-750-500.png',
              }}
            />
          </View>
        </swiper-item>
        <swiper-item>
          <View style={styles.itemWrap}>
            <Image
              style={styles.image}
              source={{
                height: 500,
                width: 375,
                uri:
                  '//gw.alicdn.com/tfs/TB1tWYBKFXXXXatXpXXXXXXXXXX-750-500.png',
              }}
            />
          </View>
        </swiper-item>
        <swiper-item>
          <View style={styles.itemWrap}>
            <Image
              style={styles.image}
              source={{
                height: 500,
                width: 375,
                uri:
                  '//gw.alicdn.com/tfs/TB1SX_vKFXXXXbyXFXXXXXXXXXX-750-500.png',
              }}
            />
          </View>
        </swiper-item>
      </Slider>

      <View style={styles.button} onClick={this.onClick}>Click</View>
    </View>
  );
}

export default Banner;

const styles = {
  slider: {
    width: 750,
    position: 'relative',
    overflow: 'hidden',
    height: 500,
    backgroundColor: '#cccccc',
  },
  itemWrap: {
    width: 750,
    height: 500,
  },
  image: {
    width: 750,
    height: 500,
  },
  button: {
    marginTop: 20,
    width: 340,
    height: 80,
  },
  paginationStyle: {
    position: 'absolute',
    width: 750,
    height: 40,
    bottom: 20,
    left: 0,
    itemColor: 'rgba(255, 255, 255, 0.5)',
    itemSelectedColor: 'rgb(255, 80, 0)',
    itemSize: 16,
  },
};
