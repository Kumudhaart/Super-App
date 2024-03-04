export default function MoviesBox(props) {
    const isSelected = props.selected.includes(props.data.id);
    console.log(isSelected);
    const handleClick = () => {
        if(props.selected.includes(props.data.id)){
            props.setSelected((prev)=>prev.filter((item)=>item!==props.data.id));
        }else{
        props.setSelected([...props.selected, props.data.id]);
        }
    }
    return (
        <div onClick={handleClick} style={{ display: "flex", flexDirection: "column", background: props.data.color, alignItems: "center", width: "220px", height: "170px", justifyContent: "space-evenly", borderRadius: "20px", border:isSelected ? "5px solid green" : ""}}>
            <div>{props.data.id}</div>
            <div>{props.data.image}</div>
        </div>
    )
}
