export const PROJECTS = {
  title: 'مشاريع تنال',
  description:
    'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى',
  breadcrumbHistory: itemTitle => [PROJECTS.title, itemTitle],
  images: [
    {
      id: 1,
      top: -30,
      right: 100,
      width: 30,
      height: 30,
      src: false,
    },
    {
      id: 2,
      top: -10,
      right: 300,
      width: 180,
      height: 180,
      src: '/assets/images/about-img1.webp',
    },
    {
      id: 3,
      top: 130,
      right: 50,
      width: 130,
      height: 130,
      src: '/assets/images/about-img2.webp',
    },
    {
      id: 4,
      bottom: -60,
      right: 230,
      width: 210,
      height: 210,
      src: '/assets/images/about-img3.webp',
    },
    {
      id: 5,
      bottom: -30,
      left: 100,
      width: 30,
      height: 30,
      src: false,
    },
  ],
};
