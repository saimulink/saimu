// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui","@primevue/nuxt-module","@nuxtjs/supabase"],
  css: ['~/assets/css/main.css'],
  primevue: {
    
    options: {
        theme: {
            preset: Aura,
            options: {
              darkModeSelector: '.my-app-dark',
          }
        }
    }
}
})