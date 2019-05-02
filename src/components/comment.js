// @flow
import React from 'react'
import { styled } from 'baseui'
import CONFIG from '../config/style'

const Meta = styled('div', ({ $level, $theme }) => ({
  fontSize: $theme.sizing.scale500,
  color: CONFIG.COLORS.LIGHTBLUE,
  position: 'relative',
  padding: $theme.sizing.scale600,
  marginLeft: $level > 1 ? $theme.sizing.scale200 : 0,
  ':before': {
    content: "''",
    display: 'inline-block',
    borderRadius: '100%',
    height: $theme.sizing.scale400,
    width: $theme.sizing.scale400,
    backgroundColor: CONFIG.COLORS.LIGHTBLUE,
    position: 'absolute',
    left: 0,
    top: '50%',
    opacity: $level / 15,
    transform: 'translate(0, -50%)',
  },
}))

const Container = styled('div', ({ $level, $theme }) => ({
  borderLeft: `${
    $level ? $theme.sizing.scale400 : 0
  } solid rgba(24, 94, 119, ${$level / 15})`,
}))

const Content = styled('div', ({ $level, $theme }) => ({
  fontSize: $theme.sizing.scale500,
  marginLeft: $level > 1 ? $theme.sizing.scale200 : 0,
  paddingBottom: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
}))

const Comment = ({ comment: { content, comments, level, user, time_ago } }) => (
  <Container className="comment" $level={level}>
    <Meta $level={level ? level + 1 : 1}>{`${user ||
      'Anonymous'} ${time_ago}`}</Meta>
    <Content
      $level={level ? level + 1 : 1}
      dangerouslySetInnerHTML={{ __html: content }}
    />
    {comments &&
      comments.length > 0 &&
      comments.map(comment => (
        <Comment comment={comment} key={`comment--${comment.id}`} />
      ))}
  </Container>
)

export default Comment
