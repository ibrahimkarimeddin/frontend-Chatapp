import axios from 'axios'
import {useQuery, useMutation} from "react-query"
const axiosFetchWithToken = axios.create({
    baseURL:"http://whatschatgo.herokuapp.com",
    headers:{
        Authorization: `Token ${typeof window === 'undefined'?" " : localStorage.getItem("token")}`
    }
})
const axiosFetchWithOutToken=axios.create({
    baseURL:"http://whatschatgo.herokuapp.com",

})

export  {axiosFetchWithToken , axiosFetchWithOutToken}