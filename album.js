new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/WhatsApp Image 2025-02-17 at 14.35.16 (1).jpeg",
          img2: "images/WhatsApp Image 2025-02-17 at 14.35.16.jpeg",
          img3: "images/WhatsApp Image 2025-02-17 at 14.40.54.jpeg",
          title: "Gorgeous",
          isOpen: false,
        },
        {
          img1: "images/WhatsApp Image 2025-02-17 at 14.40.55 (1).jpeg",
          img2: "images/WhatsApp Image 2025-02-17 at 14.40.55.jpeg",
          img3: "images/WhatsApp Image 2025-02-17 at 14.40.57.jpeg",
          title: "Stunning",
          isOpen: false,
        },
        {
          img1: "images/WhatsApp Image 2025-02-17 at 14.40.56 (3).jpeg",
          img2: "images/WhatsApp Image 2025-02-17 at 14.40.56 (2).jpeg",
          img3: "images/WhatsApp Image 2025-02-17 at 14.40.56 (1).jpeg",
          title: "Lovely",
          isOpen: false,
        },
        {
          img1: "images/WhatsApp Image 2025-02-17 at 14.40.59.jpeg",
          img2: "images/WhatsApp Image 2025-02-17 at 14.40.58 (2).jpeg",
          img3: "images/WhatsApp Image 2025-02-17 at 14.40.56.jpeg",
          title: "Exquisite",
          isOpen: false,
        },
        {
          img1: "images/WhatsApp Image 2025-02-17 at 14.40.58 (1).jpeg",
          img2: "images/WhatsApp Image 2025-02-17 at 14.41.20.jpeg",
          img3: "images/WhatsApp Image 2025-02-17 at 14.40.57 (2).jpeg",
          title: "Pretty",
          isOpen: false,
        },
        {
          img1: "images/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_FMjpg_UX1000_.jpg",
          img2: "images/download.jpeg",
          img3: "images/720474_v9_bc.jpg",
          title: "selir nya nuno",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
