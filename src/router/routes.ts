export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import('@/pages/PrivacyPolicyPage.vue'),
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    component: () => import('@/pages/TermsOfServicePage.vue'),
  },
];
