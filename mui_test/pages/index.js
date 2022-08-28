import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";
import Input from "@mui/material/Input";

const label = { inputProps: { "aria-label": "Switch demo" } };

//const Item = styled(Paper)(({ theme }) => ({
  //...theme.typography.body2,
  //padding: theme.spacing(1),
  //textAlign: 'center',
  //color: theme.palette.text.secondary,
//}));


export default function Home() {
    const [count, setCount] = useState(0);
 return (
   <div className={styles.container}>
     <div>
       <span>With default Theme:</span>
     </div>

    <Grid container direction="column" spacing={2} justify="center" alignItems="center">
        <Grid item>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Item>1</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>2</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Count: {count}</Item>
              </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Button variant="contained" onClick={() => setCount(count + 1)}>
     Increase counter</Button>
         </Grid>
     <Grid item>
     <UploadAndDisplayImage />
     </Grid>
        <Grid item>
     <RotateImage />
     </Grid>

    </Grid>
   </div>
 );
}

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <h1>Image Upload</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <Button variant="contained" onClick={() => setSelectedImage(null)}>Remove</Button>
        </div>
      )}
      <br />
     
      <br /> 
      <Input
      variant="contained"
      type="file"
        name="myImage"
        onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
        }}
        />
    </div>
  );
};

function RotateImage(props) {
  const [rotate, setRotate] = useState(0);
  return (
    <div>
      <img src={props.imageSrc} alt="not fount" width={"250px"} 
      style={{transform: `rotate(${rotate}deg)`}}
      />
      <br />
      <Button variant="contained" onClick={() => setRotate(rotate + 90)}>Rotate</Button>
    </div>
  );
}

function Item(props) {
  return (
    <Paper {...props}>
      <span>{props.children}</span>
    </Paper>
  );
}


