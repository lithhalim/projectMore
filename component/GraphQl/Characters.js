import {gql } from '@apollo/client';

const Characters=gql`
{
    characters{
      results{
        name,
        id,
        status,
        image
      }
    }
  }

`

export default Characters 