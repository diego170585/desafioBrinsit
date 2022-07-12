
import Layout from '../../../components/layout';
import Title from '../../../components/title';
import Head from 'next/head';
import Link from 'next/link';

export default function post1({post,user}) {
    
    return(
        <Layout>
            <Head>
                <title> Datos del post </title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous">
                </link>

            </Head>
            <Title>Datos del post seleccionado del usuario {user.name}</Title>
            <br></br>
            <div>
                <Link href={`/posts/[id]`} as={`/posts/${post.userId}`} key={post.userId}>
                    <a className='btn btn-primary' role={'button'}>
                        Posts
                    </a>
                </Link>
            </div>
            <div className='card'>
                <p>Title: {post.title}</p>
                <br></br>
                <p>Body: {post.body}</p>

            </div>
            <style jsx>
                {`
                    .card {
                        width:500px;
                        margin: auto;
                        flex-basis: 45%;
                        padding: 1.5rem;
                        text-align: left;
                        color: black;
                        text-decoration: none;
                        border: 1px solid #eaeaea;
                        border-radius: 10px;
                        transition: color 0.15s ease, border-color 0.15s ease;
                    }
                    .card:hover,
                    .card:focus,
                    .card:active {
                        color: #0070f3;
                        border-color: #0070f3;
                    }
                    .card p {
                        margin: 0;
                        font-size: 1.25rem;
                        line-height: 1.5;
                    }
                `}
            </style>
        </Layout>
    ) 
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    const res2 = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await res2.json();
    return {
      props: {
        post,
        user
      }
    }
  }
