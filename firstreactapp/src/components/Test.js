function Test(props) {
    return (
        <div style={{ textAlign: "center", color: "orange", backgroundColor: "black", borderRadius: "5px", padding: "20px" }}>
            <h1>{props.name.namer}</h1>
            <h3>{props.name.work}</h3>
            <p>{props.title}</p>
        </div>
    );
}

export default Test;