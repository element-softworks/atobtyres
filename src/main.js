// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import '~/assets/css/style.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'

import * as VueGoogleMaps from 'vue2-google-maps'
import GridsomeScrollReveal from 'gridsome-scroll-reveal';

import axios from 'axios'
import VueAxios from 'vue-axios'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, {router, head, appOptions, isClient, isServer}) {
	head.script.push({src: 'https://kit.fontawesome.com/cd5ba7601e.js'});
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);
	Vue.use(BootstrapVue);

	Vue.use(VueAxios, axios);
	Vue.use(VueGoogleMaps, {
		load: {
			key: 'AIzaSyCX8we6CerUwx2abd85WX25afOU8nrCLzM',
			libraries: 'places',
		},
	});

	Vue.use(GridsomeScrollReveal)
}
