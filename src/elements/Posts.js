import Post from "./Post";

export default function Posts(){
    const postContent = [
        {topImage: "assets/img/meowed.svg" ,topText: "meowed",contentImage: "assets/img/gato-telefone.svg",
        backImage: "assets/img/respondeai.svg",backLikedBy: "respondeai" ,backOthersLikes: "outras 101.523 pessoas"},
        {topImage: "assets/img/barked.svg",topText: "barked",contentImage: "assets/img/dog.svg",
        backImage: "assets/img/adorable_animals.svg",backLikedBy: "adorable_animals",backOthersLikes: "outras 99.159 pessoas"},
    ]
    return (
        <div class="posts">
            {postContent.map(item => <Post tImg={item.topImage} tTxt={item.topText} 
            cImg={item.contentImage} bImg={item.backImage} bLike={item.backLikedBy} bOthers={item.backOthersLikes}/>)}               
        </div>
    );
}