const item = {
    name: "Phòng khách",
    sta: "Phòng khách"
  }
  
  const beta = {
    name : "Phòng 1",
    sta : "Khác"
  }
  
  const aplha = {
    name : "Phòng ngủ",
    sta : "Phòng ngủ"
  }
  
let dataarray = [item,beta, aplha];

const pushdata = (sta,value) => {
    const item = {
        name : value,
        sta : sta
    }
    dataarray.push(item);
}

const get_array = () =>{
    return dataarray;
}
module.exports = {
     pushdata,
     get_array
}