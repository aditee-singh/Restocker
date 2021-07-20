import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    button: {
        width: "50%",
        margin: "25px 0",
        padding: "10px",
        background: "#007BFF",
        borderRadius: "20px",
        color: "white",
        textAlign: "center",

    },
    paper: {
        minHeight: "40vh",
        borderRadius: "20%",
        background: "rgba(0,0,0,0.5)",
        display: "flex", flexDirection: "column", justifyContent: "center"
    },
    mainBox: {

        minHeight: "100%"
    },
    bannerImage: {
        position: "absolute",
        top: 0,
        left: 0,
        overfloxX: "hidden",
        zIndex: -2,
        backgroundSize: "cover",
        background: `url("https://images.unsplash.com/photo-1507149677524-254e3ebb240f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80") no-repeat`,
        width: "100%",
        height: "100%",
    }
}))
// style = {{
//     background:
//     "https://wallpaper-house.com/data/out/7/wallpaper2you_180353.jpg",
//       }}