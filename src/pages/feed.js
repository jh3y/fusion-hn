// @flow
import React, { useEffect } from 'react'
import { gql } from 'fusion-plugin-apollo'
import { Query } from 'react-apollo'
import { Link } from 'fusion-plugin-react-router'
import { Container } from '../components/layout'
import FeedItem from '../components/feeditem'
import Loader from '../components/loader'
import { List, More } from '../components/feedlist'
import API_CONFIG from '../config/api'

const GET_NEWS = gql('../queries/news.graphql')

const Feed = ({ match }) => {
  const topic = match.params.topic || 'news'
  const page = match.params.page || '1'
  useEffect(() => {
    if (window.scrollY > 0) window.scrollTo(0, 0)
  }, [topic, page])
  return (
    <Query query={GET_NEWS} pollInterval={60000} variables={{ page, topic }}>
      {({ loading, error, data }) => {
        if (loading) return <Loader />
        return (
          <Container>
            {error && <div>Something went wrong try again</div>}
            {data && data.Items && data.Items.length > 0 && (
              <List>
                {data.Items.map((data, idx) => {
                  const index = idx + 30 * (parseInt(page, 10) - 1) + 1
                  return (
                    <FeedItem
                      data={{ ...data, index }}
                      key={`${topic}-item--${index}`}
                    />
                  )
                })}
              </List>
            )}
            {/** Only show more if page isn't at config limit */}
            {parseInt(page, 10) < API_CONFIG.paging[topic] && (
              <Link
                to={`/${topic}/${parseInt(page, 10) + 1}`}
                style={{ textDecoration: 'none' }}>
                <More>More</More>
              </Link>
            )}
          </Container>
        )
      }}
    </Query>
  )
}

export default Feed
