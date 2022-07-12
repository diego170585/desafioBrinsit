import Layout from '../components/layout';
import Title from '../components/title';
import Link from 'next/link';
import Head from 'next/head';

export default function Users({users}) {
    
    return(

        <Layout>
            <Head>
                <title> Pagina principal de usuarios</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous">
                </link>

            </Head>
            <Title>Users Page</Title>
            
            <div>
                <div className="card">
                    <div className="card-header">
                        Listado de usuarios
                    </div>
                    <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Street/Suite</th>
                                <th>Name Company</th> 
                                <th></th>                                   
                            </tr>
                        </thead>
                        {users.map((user,i) => {
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <td>
                                            <Link href={`/users/[id]`} as={`/users/${user.id}`} key={user.id}>
                                                <a >
                                                    {user.name}                               
                                                </a>                           
                                            </Link>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.address.street}/
                                            {user.address.suite}                                    
                                        </td>
                                        <td>{user.company.name}</td>
                                        <td>
                                            <Link href={`/posts/[id]`} as={`/posts/${user.id}`} key={user.id}>
                                            <a className='btn btn-primary' role={'button'}>
                                                ver posts
                                            </a>
                                            </Link>
                                        </td>                                   
                                    </tr>
                                </tbody>    
                            )
                        })}
                    </table>

                    </div>

                </div>
            </div>
        </Layout>

    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
  
    return {
      props: {
        users
      }
    }
  }
