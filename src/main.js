// @flow
import App from 'fusion-react'
import Router from 'fusion-plugin-react-router'
import Styletron, { AtomicPrefixToken } from 'fusion-plugin-styletron-react'
import { swTemplate as swTemplateFunction } from 'fusion-cli/sw'
import SwPlugin, {
  SWTemplateFunctionToken,
  SWRegisterToken,
} from 'fusion-plugin-service-worker'
import { html, createToken, createPlugin, RenderToken } from 'fusion-core'
import { FetchToken } from 'fusion-tokens'
import HelmetPlugin from 'fusion-plugin-react-helmet-async'
import fetch from 'node-fetch'
import root from './root.js'
import HNSchema from './schemas/hn'
import Manifest from './manifest'
import {
  ApolloClientPlugin,
  ApolloClientToken,
  GraphQLSchemaToken,
  ApolloRenderEnhancer,
} from 'fusion-plugin-apollo'

type ManifestType = {
  name: String,
  icons: { [key: string]: string },
}

const ManifestToken: ManifestType = createToken('ManifestToken')

const ManifestPlugin = createPlugin({
  deps: {
    manifest: ManifestToken.optional,
  },
  provides({ manifest }) {
    if (manifest) return manifest
    const testManifest = {
      name: 'FUSION HN',
    }
    return testManifest
  },
  middleware: (_, manifest) => {
    return (ctx, next) => {
      if (ctx.element) {
        ctx.template.head.push(
          html`
            <link rel="manifest" href="/manifest.json" />
          `
        )
      } else if (ctx.method === 'GET' && ctx.path === '/manifest.json') {
        ctx.body = manifest
      }
      return next()
    }
  },
})

export default () => {
  const app = new App(root)
  app.register(Styletron)
  app.register(Router)
  app.register(HelmetPlugin)
  app.register(AtomicPrefixToken, 'hn__')
  app.register(ApolloClientToken, ApolloClientPlugin)
  app.register(SwPlugin)
  app.enhance(RenderToken, ApolloRenderEnhancer)
  if (__BROWSER__) {
    app.register(FetchToken, window.fetch)
    app.register(SWRegisterToken, true)
  }
  if (__NODE__) {
    app.register(ManifestToken, Manifest)
    app.register(ManifestPlugin)
    app.register(FetchToken, fetch)
    app.register(GraphQLSchemaToken, HNSchema)
    app.register(SWTemplateFunctionToken, swTemplateFunction)
  }

  return app
}
