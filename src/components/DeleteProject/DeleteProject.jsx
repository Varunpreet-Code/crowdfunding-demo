import React from "react";
import { useHistory, useParams } from "react-router-dom";

function DeleteProject(){
    const  history= useHistory();
    const { id} = useParams();


    const deleteData = async () => {
        const token = getstorage("token");
        const response = await fetch()
    }


}