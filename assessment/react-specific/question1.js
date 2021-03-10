// ASSESSMENT:
// You will be implementing a table with its content fetched from https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10
// You will use functional components and hooks
// And a simple table styling in question1.css
// An example UI of a working version is presented in question1.gif
//

// BONUS POINT: implement pagination feature with Previous-Next buttons
// _start and _limit are query parameters which you can use to fetch some of the items, which is called 'pagination'
// _limit is always 10 for our case, but _start parameter can be changed to fetch portions of that data

// SOLUTION:
// React and ReactDOM is already imported in index.html

function App() {
    const [users, setUsers] = React.useState([]);
    const [page, setPage] = React.useState(0);

    React.useEffect(async () => {
        const url =
            "https://jsonplaceholder.typicode.com/todos?_start=" + page + "&_limit=10";
        const response = await fetch(url);
        const data = await response.json();
        setUsers(...users, data);
    }, [page]);

    const prevPage = () => {
        if (page !== 0) {
            setPage(page - 10);
            setUsers([]);
        }
    };

    const nextPage = () => {
        // I controlled the mock api. The upper limit is the 200th user. Therefore I put a limit.
        if (page !== 190) {
            setPage(page + 10);
            setUsers([]);
        }
    };

    return (
        <>
            <table className="myTable">
                <tbody className="body">
                    <tr className="headers">
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                    {users.map((element) => (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.userId}</td>
                            <td>{element.title}</td>
                            {JSON.stringify(element.completed) === "true" ? (
                                <td>yes</td>
                            ) : (
                                <td>no</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="buttons">
                <button id="prev-button" onClick={prevPage}>
                    Previous
                </button>
                <button id="next-button" onClick={nextPage}>
                    Next
                </button>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
