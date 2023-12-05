import Image from 'next/image'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
 

export default function Home() {

  const data = ['data 1', 'data 2', 'data 3', 'data 4'];


  return (
    <main className="flex flex-col">
      <div className='p-10'>
        <p>HACKER NEWS</p>
      </div>

      <div className='columns-2'>
        {data.map((datafetch, index) => (
          <div className='flex'>
            <p>{datafetch} de {index}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export const getInfo = (async (context) => {
  const res = await fetch('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0')
  const repo = await res.json()
  return { props: { repo } }
}) satisfies GetStaticProps<{
  repo: News
}>

interface News {
  exhaustive: Exhaustive;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Hit[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
  query: string;
  serverTimeMS: number;
}
interface ProcessingTimingsMS {
  _request: Request;
  afterFetch: AfterFetch;
  fetch: Fetch;
  total: number;
}
interface Fetch {
  query: number;
  total: number;
}
interface AfterFetch {
  format: Format;
  merge: Merge;
  total: number;
}
interface Merge {
  total: number;
}
interface Format {
  highlighting: number;
  total: number;
}
interface Request {
  roundTrip: number;
}
interface Hit {
  _highlightResult: HighlightResult;
  _tags: string[];
  author: string;
  comment_text?: string;
  created_at: string;
  created_at_i: number;
  objectID: string;
  parent_id?: number;
  story_id: number;
  story_title?: string;
  story_url?: string;
  updated_at: string;
  children?: number[];
  num_comments?: number;
  points?: number;
  story_text?: string;
  title?: string;
}
interface HighlightResult {
  author: Author;
  comment_text?: Commenttext;
  story_title?: Author;
  story_url?: Author;
  story_text?: Commenttext;
  title?: Author;
}
interface Commenttext {
  fullyHighlighted: boolean;
  matchLevel: string;
  matchedWords: string[];
  value: string;
}
interface Author {
  matchLevel: string;
  matchedWords: any[];
  value: string;
}
interface Exhaustive {
  nbHits: boolean;
  typo: boolean;
}