// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron, {AtomicPrefixToken} from 'fusion-plugin-styletron-react';
import {RenderToken} from 'fusion-core';
import {FetchToken} from 'fusion-tokens';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import fetch from 'node-fetch';
import root from './root.js';
import HNSchema from './schemas/hn';

import {
  ApolloClientPlugin,
  ApolloClientToken,
  GraphQLSchemaToken,
  ApolloRenderEnhancer,
} from 'fusion-plugin-apollo';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);
  app.register(HelmetPlugin);
  app.register(AtomicPrefixToken, 'hn__');
  app.register(ApolloClientToken, ApolloClientPlugin);
  app.enhance(RenderToken, ApolloRenderEnhancer);
  if (__BROWSER__) app.register(FetchToken, window.fetch);
  if (__NODE__) {
    app.register(FetchToken, fetch);
    app.register(GraphQLSchemaToken, HNSchema);
  }

  return app;
};
