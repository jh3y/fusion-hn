// @flow
import React, { Fragment } from 'react'
import { styled } from 'baseui'
import { Block } from 'baseui/block'
import CONFIG from '../config/style'
import Comment from './comment'

const Title = styled('a', ({ $theme }) => ({
  color: CONFIG.COLORS.LIGHTBLUE,
  fontWeight: 400,
  fontSize: $theme.sizing.scale600,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
}))

const Blurb = styled('div', ({ $theme }) => ({
  fontSize: $theme.sizing.scale500,
  marginBottom: $theme.sizing.scale800,
}))

const Meta = styled('div', ({ $theme }) => ({
  color: CONFIG.COLORS.GREY,
  fontSize: $theme.sizing.scale500,
  marginBottom: $theme.sizing.scale800,
}))

const Join = styled('a', ({ $theme }) => ({
  color: CONFIG.COLORS.LIGHTBLUE,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
}))

const Domain = styled('a', ({ $theme }) => ({
  color: CONFIG.COLORS.GREY,
  fontSize: $theme.sizing.scale500,
  marginLeft: $theme.sizing.scale200,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
}))

const Item = ({
  comments_count,
  comments,
  content,
  domain,
  id,
  points,
  time_ago,
  title,
  user,
  url,
}) => {
  return (
    <Fragment>
      <Block
        overrides={{
          Block: {
            style: ({ $theme }) => ({
              marginBottom: $theme.sizing.scale400,
            }),
          },
        }}>
        <Title href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </Title>
        {domain && (
          <Domain
            href={`https://news.ycombinator.com/from?site=${domain}`}
            target="_blank"
            rel="noreferrer noopener">{`(${domain})`}</Domain>
        )}
      </Block>
      <Meta>
        {`${points ? `${points} points` : ''} by ${user ||
          'Anonymous'} ${time_ago} | ${
          comments_count > 0
            ? `${comments_count} comment${comments_count > 1 ? 's' : ''}`
            : ''
        } | `}
        <Join
          href={`https://news.ycombinator.com/item?id=${id}`}
          target="_blank"
          rel="noreferrer noopener">
          join the discussion
        </Join>
      </Meta>
      {content && (
        <Blurb
          className="blurb"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      {comments &&
        comments.length > 0 &&
        comments.map(comment => (
          <Comment comment={comment} key={`comment--${comment.id}`} />
        ))}
      {comments && comments.length === 0 && (
        <Fragment>
          <h1>There are no comments</h1>
          <a
            href={`https://news.ycombinator.com/item?id=${id}`}
            target="_blank"
            rel="noreferrer noopener">
            Start the discussion
          </a>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Item
