// pages/products/[id].js
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from "material-ui-search-bar";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Datatable from '../../datatable'
// import Datatable from '../../'
export async function getServerSideProps(context) {
    const { id } = context.query;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const getPost = await res.json()

    const getComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const getComs = await getComments.json()

    return {
        props: {
            posts: getPost,
            comments: getComs,
        },
    }
}

export default function Post({ posts, comments }) {
    // Render comments...
    // console.log(comments)

    const [posts1, setposts1]= useState([]);
    const[q, setQ] = useState("");
    const [searchColumns, setSearchColumns] = useState(["name", "email", "body"]);
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then((response)=>response.json())
        .then((json)=> setposts1(json));
    },[])
    function search(rows){
      return rows.filter(row =>
          searchColumns.some(
              (column)=>
              row[column].toString().toLowerCase().indexOf(q.toLowerCase()) >-1
          )
          // row.name.toLowerCase().indexOf(q)>-1 ||
          // // row.email.toLowerCase().indexOf(q)>-1 ||
          // row.body.toLowerCase().indexOf(q)>-1
      )
  }
  const columns = posts1[0] && Object.keys(posts1[0]);

    return (
      
        <div>
          <div className="container">
                <a href="/">Back To Posts</a>
                <strong>View comments for a post endpoint and search box that allows the user to filter the comments related to a post</strong>
                <div > 
                  <div >
                  {/* <SearchBar className="inputsearch" text="text" value={q} onChange={(e) => setQ(e.target.value)}
      
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    /> */}
                <input className="inputsearch" text="text" value={q} onChange={(e) => setQ(e.target.value)}/>
                <SearchIcon id="inputfiald" className="fa fa-plus-Search" color="secondary" />
                
                {columns && columns.map((column) => <label>
                    <input className="checkbox" type="checkbox" checked={searchColumns.includes(column)}
                    onChange={(e) =>{
                        const checked = searchColumns.includes(column)
                        setSearchColumns(prev => checked
                            ? prev.filter(sc => sc !== column)
                            :[...prev, column]
                             );
                    }}
                    />
                    {column}
                </label> ) }
            </div></div>
            <TableContainer component={Paper} className="post">
              
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell align="left"><a>postId</a></TableCell>
          <TableCell align="left">name</TableCell>
          <TableCell align="left">email</TableCell>
          <TableCell align="left">Body</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {/* {postList.map(row => ( */}
            {comments?.map(row =>  (
              // <div key={index}>
            // <Link as={`/${row.id}/${row.userId}`} href="/[id]/[userId]">
             
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left"> <a>{row.postId}</a></TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.body}</TableCell>
            </TableRow>
            
            // </Link>
            // </div>
          )
          )}
        </TableBody>
      </Table>
    </TableContainer>
    <strong>All comments</strong>
    <dev>
    <Datatable posts1={search(posts1) }/>
    </dev>
    </div>
    <footer>
        <p>Dawood@2020</p>
      </footer>
            <style jsx>{`
            .inputsearch{
              border: 2px solid red;
              padding: 10px;
              border-radius: 25px;
            }
            #inputfiald{
              display: inline;
            }
            .checkbox{
              padding-left:200px;
            }
            .post{
              padding-top10px;
            }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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

        a {
          color: inherit;
          text-decoration: none;
        }
        strong{
          padding-bottom:35px;
          padding-top:40px;
        }

       
      `}</style>
        </div>
        
    );
}