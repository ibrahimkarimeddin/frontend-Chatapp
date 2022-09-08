import React ,{useState}from 'react'
import ChatList from "./ChatList"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar({data}) {
  const[array, setarray]=useState([])






  function getSearchData(ser){ 
    setarray([])
    let a=[]
   for (let index = 0; index < data.length; index++) {
    let st = (typeof data[index].second_user === 'object' ? data[index].second_user.username: data[index].second_user)
    let str= st.toString()
    if(str.indexOf(ser) != -1){
      a.push(data[index])
    }
  
}
if(a.length == 0){
  a.push(-1)
  setarray(a)

}else{
  setarray(a)

}
}
const SearchFromdataFetch= function(e){
  getSearchData(e.target.value)
  
  
}

  return (
    <>
     <div className=' h-12 flex items-center  relative border-2 border-gray-100 '>
        <SearchOutlinedIcon className="absolute left-3 text-gray-500  "  />
        <input className="w-[80%] h-[70%] bg-gray-100 ml-3 rounded-lg pl-10 outline-none" type="text" placeholder="Search for Chat .....  " onChange={SearchFromdataFetch} />
    </div>
    <ChatList   data={data} secondData={array} />
   
    </>
  
  )
}

export default SearchBar
