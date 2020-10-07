import React, {useState, useEffect} from 'react';
import posttable from './post/posttable'
// requir("es6-promise").polufill();
// require("isomorphic-fetch");
export default function App(){
    const [post, setpost]= useState([]);
    const[q, setQ] = useState("");
    const [searchColumns, setSearchColumns] = useState(["name", "body"]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>response.json())
        .then((json)=> setpost(json));
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
    const columns = post[0] && Object.keys(post[0]);

    return(
        <div>
            <div > 
                <input text="text" value={q} onChange={(e) => setQ(e.target.value)}/>
                {columns && columns.map((column) => <label>
                    <input type="checkbox" checked={searchColumns.includes(column)}
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
            </div>
            <div>
                <posttable post={search(post) }/>
            </div>
        </div>
    )
}