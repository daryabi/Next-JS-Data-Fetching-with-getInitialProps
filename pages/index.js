import Head from 'next/head'
import Link from 'next/link'
import ViewPost from '../components/viewPost'
import { getPosts } from '../api/posts'

export async function getStaticProps() {
  const res = await getPosts();
  const json = await res.json()
  console.log(json)
  return {
    props: {
      posts: json,
    },
  }
}
export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="">Comments Management!</a>
        </h1>
        <div className="container">
          {posts.map((post) => (
            <div key={post.id} className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <Link href="/post/[id]" as={`/post/${post.id}`}>
                      <a className="btn btn-primary">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <Link href="/post/[id]" as={`/post/${post.id}`}>
                      <a className="btn btn-primary">Read More</a>
                    </Link>                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>Dawood@2020</p>
      </footer>

      <style jsx>{`
         .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card {
          margin-bottom: 10px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
