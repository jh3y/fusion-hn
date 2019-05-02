// @flow
import React, { useEffect } from 'react'
import { gql } from 'fusion-plugin-apollo'
import { Query } from 'react-apollo'
import { Container } from '../components/layout'
import Loader from '../components/loader'
import ItemHeader from '../components/item'

const GET_ITEM = gql('../queries/item.graphql')

const Item = ({ match }) => {
  const id = match.params.id || '1'
  useEffect(() => {
    if (window.scrollY > 0) window.scrollTo(0, 0)
  }, [id])
  return (
    <Query query={GET_ITEM} pollInterval={60000} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loader />
        return (
          <Container>
            {error && <div>Something went wrong try again</div>}
            {data.Item && <ItemHeader {...data.Item} />}
          </Container>
        )
      }}
    </Query>
  )
}

export default Item
