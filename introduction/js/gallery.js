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
            'https://cdn.wallpapersafari.com/60/15/XkY4aA.jpg',
            'https://wallpapercave.com/wp/wp9597089.jpg'
          ]
        };
      }
    }
  }
}).mount('#app');
