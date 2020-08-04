import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faStar } from '@fortawesome/pro-solid-svg-icons'
import { faInstagram, faFacebookF, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
    faBars, faTimes, faStar,
    faInstagram, faFacebookF, faGoogle, faFacebook
);

export default function (Vue) {
    Vue.component('font-awesome', FontAwesomeIcon)
}
