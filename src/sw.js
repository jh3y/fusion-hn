// @flow
import { getHandlers } from 'fusion-plugin-service-worker'

export default assetInfo => {
  const { onFetch, onInstall, onActivate } = getHandlers(assetInfo)
  self.addEventListener('install', onInstall)
  self.addEventListener('activate', onActivate)
  self.addEventListener('fetch', onFetch)
}
