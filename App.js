import React, { useState } from "react"
import {View , Text , StyleSheet , Image, ImageBackground, TextInput, Button, TouchableOpacity, ScrollView} from "react-native"
import bg4 from "./Assets/BGLA.png"
// import { create } from "react-test-renderer"
import icon from "./Assets/Logo.png"
import del from "./Assets/del2.png"
import edit from "./Assets/Edit.png"
import edittt from "./Assets/Editin.png"


function Login1(){
  const [inpValue, setinpValue] = useState("")
  const [additem ,setadditem] = useState([])
  const [indexNum, setindexNum] = useState("")
  const [updateinp, setupdateinp] = useState("") 
  // const [password, setpassword] = useState()

  const addr = ()=>{
    additem.push(inpValue)
    setadditem([...additem])
    // console.log(additem);
    setinpValue("")
  }
  const deleteItem = (id)=>{
    additem.splice(id, 1)
    setadditem([...additem])
  }
  const updating = (ind)=>{
    additem.splice(ind, 1, updateinp)
    setadditem([...additem])
    setindexNum("")
    setupdateinp("")
  }
  const edits = (ind)=>{
    setupdateinp(additem[ind])
    
  }
  return<>
  <ScrollView>
  <View style={{ height: "100%",width:"100%", backgroundColor:"#19196f", minHeight:1500}}>
  <View style={[{width:"100%", padding:10, marginTop:10, marginBottom:26}]}>
    <View style={{alignItems: "flex-end", marginTop:8}}>
    <Image source={bg4} style={{width:325, height:100}}/>
    </View>
    {/* <Text style={styles.mainheading}>LogIn</Text> */}
    

  {/* <View style={{alignItems:'center', padding:8}}>
    <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(e)=>setpassword(e)} style={[styles.inp, styles.shadow]} />
  </View> */}

  <View style={{flexDirection:"row",width:"100%",marginTop:8}}>
  <View style={{padding:7, marginTop: 9, width:"83%"}}>
    <TextInput placeholder="Enter Task" keyboardType="email-address"
    value={inpValue} onChangeText={(e)=>setinpValue(e)} style={[styles.inp, styles.shadow]} />
  </View>

    <TouchableOpacity style={styles.butn} onPress={addr}>
      <Text style={{textAlign:"center", fontWeight:"400", fontSize:25,  color:"#19196f"}}>+</Text>
    </TouchableOpacity>
    
  </View>

  {/* <View style={{position:"absolute", top:500, left:110}}>
  <Text >Powered by Taha Khan</Text>
  </View> */}
  </View>
  {
    additem.map((value, index)=>{
      return(
        <React.Fragment key={index}>
        {indexNum === index ? (
        <View style={{marginTop:8}} >
         <View style={{width:"100%", borderRadius:6,flexDirection:"row",justifyContent:"center",}}> 
<TextInput placeholder="Enter Task" keyboardType="email-address"
    value={updateinp} onChangeText={(e)=>setupdateinp(e)} style={[ styles.shadow,{fontSize:20, color:"black", backgroundColor:"#f5f5f5", width:"80%",padding:5, borderRadius:6, height:38}]}/>
    <TouchableOpacity onPress={()=>{updating(index)}}>
          <Image source={edittt} style={{width:28, height:25, marginVertical:5}}/>
    </TouchableOpacity>
    </View>
        </View>
          ):(
            <View  style={{padding:5, marginTop:4,alignItems:"center"}}>
              <View style={{width:"90%",backgroundColor:"#f5f5f5", borderRadius:6,flexDirection:"row", justifyContent:"space-between"}}>
              <Text style={{padding:5,fontSize:20, color:"black", width:"80%"}} key={index}>{value}</Text>

              <View style={{flexDirection:"row", alignItems:"center"}}>
              <TouchableOpacity onPress={()=>{
                setindexNum(index)
                edits(index)
              }}>
             <Image source={edit} style={{width:25, height:25, marginVertical:5, marginRight:8}}/>
             </TouchableOpacity>

              <TouchableOpacity onPress={()=>{deleteItem(index)}} >
             <Image source={del} style={{width:25, height:25, marginVertical:5, marginRight:5}} />
             </TouchableOpacity>
             </View>
              </View>
            </View>
          )
        }
        </React.Fragment>
      )
    })
  }
  </View>



  </ScrollView>
  </>
}
export default Login1



const styles = StyleSheet.create({
    mainheading : {
      fontSize: 30,
      color: "#23395d",
      textAlign: "center",
    },
    mainContainer : {
      justifyContent: "center",
      alignItems: "center",
    },
    inp:{
      width: "100%",
      backgroundColor: "#f5f5f5",
      padding: 6,
      fontSize:18,
      color:"black",
      borderRadius:10,
      // textAlign:"center"
    },
    butn:{
      width: 55,
    height: 55,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 9,
    borderRadius: 100,
    backgroundColor: '#f5f5f5',
    marginTop:6
    
    },
   shadow:{  
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  },
  
})



