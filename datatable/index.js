
// import React from 'react';
// export default function posttable({post}){
//     const columns= post[0] && Object.keys(post[0]);
//     return( <table cellPadding={3} cellSpacing={1}>
//         <thead>
//             <tr>{post[0] && columns.map((heading )=> <th>{heading}</th>)} </tr>
//         </thead>
//         <tbody>

//         </tbody>
//         {post.map(row =><tr>
//             {
//                 columns.map(column => <td>{row[column]}</td>)
//             }
//         </tr>)}
//     </table>
//     );
// }


import React from 'react';
export default function posts1table({posts1}){
    const columns= posts1[0] && Object.keys(posts1[0]);
    return( <table cellPadding={3} cellSpacing={1}>
        <thead>
            <tr>{posts1[0] && columns.map((heading )=> <th>{heading}</th>)} </tr>
        </thead>
        <tbody>

        </tbody>
        {posts1.map(row =><tr>
            {
                columns.map(column => <td>{row[column]}</td>)
            }
        </tr>)}
    </table>
    );
}