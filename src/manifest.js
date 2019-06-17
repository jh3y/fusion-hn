// @flow
import { assetUrl } from 'fusion-core'

export default {
  short_name: 'Fusion HN',
  name: 'Fusion HN',
  start_url: '/',
  background_color: '#041725',
  display: 'standalone',
  theme_color: '#041725',
  icons: [
    {
      src: assetUrl('./icons/fusion-hn-192.png'),
      type: 'image/png',
      sizes: '192x192',
    },
    {
      src: assetUrl('./icons/fusion-hn-512.png'),
      type: 'image/png',
      sizes: '512x512',
    },
  ],
}
