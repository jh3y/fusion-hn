// @flow
import React, {Fragment} from 'react';
import {NavLink as Link, Route, Switch} from 'fusion-plugin-react-router';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import {Helmet} from 'fusion-plugin-react-helmet-async';
import Feed from './pages/feed';
import PageNotFound from './pages/pageNotFound';
import API_CONFIG from './config/api';
import {assetUrl} from 'fusion-core';
import {Header, NavHeader, NavItem, NavOption} from './components/nav';

const root = (
  <Fragment>
    <Helmet>
      <title>Fusion HN: HN Client built with Fusion JS</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=5"
      />
      <meta name="theme-color" content="#041725" />
      <link
        href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href={assetUrl('../node_modules/normalize.css/normalize.css')}
      />
      <link rel="stylesheet" href={assetUrl('./styles/base.css')} />
    </Helmet>
    <Header>
      <HeaderNavigation
        overrides={{
          Root: {
            style: ({$theme}) => ({
              border: '0',
              margin: '0 auto',
              maxWidth: '1200px',
              paddingLeft: $theme.sizing.scale800,
              paddingRight: $theme.sizing.scale800,
            }),
          },
        }}
      >
        <NavigationList align={ALIGN.left}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <NavHeader $as="h1">Fusion.HN</NavHeader>
          </Link>
          {Object.keys(API_CONFIG.routes).map(route => (
            <NavItem key={`nav-item--${route}`}>
              <Link style={{textDecoration: 'none'}} to={`/${route}`}>
                <NavOption>{API_CONFIG.routes[route].toUpperCase()}</NavOption>
              </Link>
            </NavItem>
          ))}
        </NavigationList>
      </HeaderNavigation>
    </Header>
    <Switch>
      <Route path="/:topic/:page" component={Feed} />
      <Route path="/:topic" component={Feed} />
      <Route exact path="/" component={Feed} />
      <Route component={PageNotFound} />
    </Switch>
  </Fragment>
);

export default root;
