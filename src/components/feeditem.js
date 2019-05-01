// @flow
import React from 'react'
import { styled } from 'baseui'
import CONFIG from '../config/style'

const Item = styled('li', ({ $theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto auto',
  marginBottom: $theme.sizing.scale600,
}))

const ItemIndex = styled('span', ({ $theme }) => ({
  ...$theme.typography.font600,
  color: CONFIG.COLORS.GREY,
  fontWeight: 'lightest',
  gridRow: '1 / -1',
  marginRight: $theme.sizing.scale800,
  minWidth: $theme.sizing.scale1000,
  textAlign: 'right',
}))
const ItemHeader = styled('div', {})
const ItemMeta = styled('div', ({ $theme }) => ({
  color: CONFIG.COLORS.GREY,
  fontSize: $theme.typography.font250.fontSize,
}))
const linkStyle = {
  color: CONFIG.COLORS.LIGHTBLUE,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
}
const MetaLink = styled('a', {
  ...linkStyle,
})
const Domain = styled('a', ({ $theme }) => ({
  ...linkStyle,
  color: CONFIG.COLORS.GREY,
  fontSize: $theme.typography.font250.fontSize,
}))

const FeedItem = ({
  data: {
    comments_count,
    domain,
    id,
    index,
    points,
    time_ago,
    title,
    url,
    user,
  },
}) => (
  <Item>
    <ItemIndex>{index}</ItemIndex>
    <ItemHeader>
      <MetaLink href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </MetaLink>
      {domain && (
        <Domain
          href={`https://news.ycombinator.com/from?site=${domain}`}
          target="_blank"
          rel="noreferrer noopener">{` (${domain})`}</Domain>
      )}
    </ItemHeader>
    <ItemMeta>
      {`${points ? `${points} points` : ''} by `}
      {user && (
        <MetaLink href={`https://news.ycombinator.com/user?id=${user}`}>
          {user}
        </MetaLink>
      )}
      {!user && 'Anonymous'}
      {` ${time_ago} | `}
      <MetaLink href={`https://news.ycombinator.com/item?id=${id}`}>
        {comments_count
          ? `${comments_count} comment${comments_count > 1 ? 's' : ''}`
          : 'discuss'}
      </MetaLink>
    </ItemMeta>
  </Item>
)
export default FeedItem
