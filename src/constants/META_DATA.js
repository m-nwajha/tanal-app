export const META_DATA = {
  title: 'شركة تنال الأولى للاستثمار Tanal Aloula',
  description: 'شركة تنال الأول للاستثمار'
};


export const PAGES_META_DATA = {
  // main meta data.
  home: `الصفحة الرئيسية | ${META_DATA.title}`,
  about: `عن تنال | ${META_DATA.title}`,
  services: `خدماتنا | ${META_DATA.title}`,
  OurProjects: `مشاريع تنال | ${META_DATA.title}`,
  OurProjects: title => `${title}| ${META_DATA.title}`,

  // auth meta data.
  signin: `تسجيل الدخول | ${META_DATA.title}`,

  // dashboard  meta data.
  dashboard: `لوحة تحكم الموقع | ${META_DATA.title}`,

  // Services.
  viewServices: `عرض الخدمات | ${META_DATA.title}`,
  createService: `إضافة خدمة جديدة | ${META_DATA.title}`,
  editService: `تعديل الخدمة | ${META_DATA.title}`,

  // Projects.
  viewProjects: `عرض  المشاريع | ${META_DATA.title}`,
  createProject: `إضافة مشروع جديد | ${META_DATA.title}`,
  editProject: `تعديل المشروع | ${META_DATA.title}`,

  // Reviews.
  viewReviews: `عرض  التقييمات | ${META_DATA.title}`,
  createReview: `إضافة تقييم جديد | ${META_DATA.title}`,

  // Counters.
  viewCounters: `عرض  العدادات | ${META_DATA.title}`,
  createCounter: `إضافة عداد جديد | ${META_DATA.title}`,
};