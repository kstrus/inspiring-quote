import { useQuery, gql } from '@apollo/client';

import Quote from './Quote';

const RANDOM_QUOTE_QUERY = gql`
    query getRandomQuote {
      randomQuote {
        text
        author
      }
    }
`;

const RandomQuote = () => {
    const { data, error, loading } = useQuery(RANDOM_QUOTE_QUERY);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Something went wrong</div>;

    return <Quote {...data.randomQuote} />;
};

export default RandomQuote;
