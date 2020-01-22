import React from "react";

import {  
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { format, parseISO } from "date-fns";

import Edit from "../assets/edit.png";


export default function List({edit, list}) {
  

  return (
    <View style={styles.container}> 
      {list.map(t => (
       
       <View key={t.id} style={styles.tableCollumn}>
         <View style={styles.cell}>
           <Text style={styles.cellText}>{t.codigo}</Text>
         </View>
         <View style={styles.cell}>
           <Text style={styles.cellText}>{t.telefone}</Text>
         </View>
         <View style={styles.cell}>
           <Text style={styles.cellText}>{t.data}</Text>
         </View>
         <View style={styles.cell}>
            <View style={styles.cellButtons}>
              
             <TouchableOpacity onPress={(id)=>edit(t.id)} style={styles.button}>
               <MaterialIcons name="edit" size={20} color={"#5faffa"} />
              </TouchableOpacity>
              
             <TouchableOpacity  style={styles.button}>
               <MaterialIcons name="mail" size={20} color={"#5faffa"} />
              </TouchableOpacity>
              
             <TouchableOpacity style={styles.button}>
               <MaterialIcons name="delete" size={20} color={"#5faffa"} />
              </TouchableOpacity>
              
           </View>
         </View>
       </View>         
     ))}
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 15,
    justifyContent: "center",  
    
  },
  tableCollumn: {  
    width:'100%',
    flexDirection: "row",
    marginTop: 5,
    backgroundColor: "#e0e0e0",    
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cell: {      
    
    justifyContent: 'space-evenly',
    alignItems:'stretch'
  },
  cellText: {    
    fontSize: 12,
    padding:5
  }, 
  cellButtons: {
    flexDirection:'row'
  },
  button: {   
    padding: 2
    
  }

});
