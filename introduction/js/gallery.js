const { createApp } = Vue;

createApp({
  components: {
    'image-gallery': {
      template: `
        <div class="gallery-grid">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            alt="Gallery image"
            class="gallery-img"
          >
        </div>
      `,
      data() {
        return {
          images: [
            'https://thirdimpactanime.com/wp-content/uploads/2018/04/wotakoi.png',
            'https://wallpapers.com/images/hd/anime-city-night-4k-q3k6o3v6t8yk0z1r.jpg',
            'https://wallpapers.com/images/hd/anime-scenery-4k-ultra-hd-9l5osn5y1x9ohx3z.jpg'
          ]
        };
      }
    }
  }
}).mount('#app');
