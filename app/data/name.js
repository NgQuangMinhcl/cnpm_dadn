
const info_ex = {
    name : "Nguyễn Quang Minh",
}

const changename = (new_name) =>{
    info_ex.name = new_name;
    console.log(info_ex.name);
}

const get_name = () =>{
    return info_ex.name;
}
let image = "https://cdnphoto.dantri.com.vn/D3zYCzhr-Xu2Q6iQd8B6t4ThbfI=/thumb_w/1020/2023/09/15/messi-1694736128578.jpeg";

const changeimage = (new_image) =>{
    image = new_image;
}
const get_image = () =>{
    return image;
}
module.exports = {
    changename,
    get_name,
    changeimage,
    get_image,
};