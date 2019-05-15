// @flow
import React, { Fragment } from 'react'
import { NavLink as Link, Route, Switch } from 'fusion-plugin-react-router'
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation'
import { Helmet } from 'fusion-plugin-react-helmet-async'
import Feed from './pages/feed'
import Item from './pages/item'
import PageNotFound from './pages/pageNotFound'
import API_CONFIG from './config/api'
// import { assetUrl } from 'fusion-core'
import { Header, NavHeader, NavItem, NavOption } from './components/nav'
import CONFIG from './config/style'
import { LightTheme } from 'baseui'

const root = (
  <Fragment>
    <Helmet>
      <title>Fusion HN: HN Client built with Fusion JS</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=5"
      />
      <meta name="theme-color" content={CONFIG.COLORS.DARK} />
      <style>
        {`
          // NOT IDEAL BUT YOU CAN INLINE STYLES LIKE THIS FOR BETTER PERF
          * {
            box-sizing: border-box;
          }
          html, body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-weight: 400;
            margin: 0;
          }
          /** Override for active route styling on Link */
          a.active > span {
            color: ${LightTheme.colors.mono100};
          }
          pre {
            max-width: 100%;
            white-space: pre-wrap;
          }
          .comment p {
            margin: 0;
            padding: 0 0 ${LightTheme.sizing.scale600};
          }
          .comment a,
          .blurb a {
            color: ${CONFIG.COLORS.LIGHTBLUE};
            text-decoration: none;
            word-break: break-all;
          }
          .comment a:hover,
          .blurb a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </Helmet>
    <Header>
      <HeaderNavigation
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              border: '0',
              margin: '0 auto',
              maxWidth: '1200px',
              paddingLeft: $theme.sizing.scale800,
              paddingRight: $theme.sizing.scale800,
            }),
          },
        }}>
        <NavigationList align={ALIGN.left}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <NavHeader $as="h1">Fusion.HN</NavHeader>
          </Link>
          {Object.keys(API_CONFIG.routes).map(route => (
            <NavItem key={`nav-item--${route}`}>
              <Link
                rel="prefetch"
                style={{ textDecoration: 'none' }}
                to={`/${route}`}>
                <NavOption>{API_CONFIG.routes[route].toUpperCase()}</NavOption>
              </Link>
            </NavItem>
          ))}
        </NavigationList>
      </HeaderNavigation>
    </Header>
    <Switch>
      <Route path="/item/:id" component={Item} />
      <Route path="/:topic/:page" component={Feed} />
      <Route path="/:topic" component={Feed} />
      <Route exact path="/" component={Feed} />
      <Route component={PageNotFound} />
    </Switch>
  </Fragment>
)

export default root
