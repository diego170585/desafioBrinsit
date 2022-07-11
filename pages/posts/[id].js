import Title from '../../components/title';
import Layout from '../../components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Post({ posts,user }) {
  
  return (
    <Layout>
      <Head>
        <title> Pagina de posts del usuario</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        </link>
      </Head>
      <Title>Posts del usuario {user.name}</Title>
      <div className='card'>
        <div className='card-header'>
          <h5>Listado de posts del usuario</h5>
        </div>
        <div className='card-body'>
          <table className="table">
            <thead>
              <tr>
                <th>Titulo del Post</th>
                <th>Cuerpo del Post</th>
                <th> </th>                                 
              </tr>
            </thead>
            {posts.map(post =>{
              return(
                <tbody>
                  <tr>
                    <td>{post.title}</td>
                    <td>{post.body}</td> 
                    <td>
                      <Link href={`/posts/post/[id]`} as={`/posts/post/${post.id}`} key={post.id}>
                        <a className='btn btn-primary' role={'button'}>
                          ver post
                        </a>
                      </Link>
                      
                    </td> 
                  </tr>
                </tbody>
              )

            })}
          </table>
        </div>
        <div className='card-footer'></div>
      </div>
        
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`);
  const posts = await res.json();
  const res1 = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res1.json();
  return {
    props: {
      posts,
      user
    }
  }
}