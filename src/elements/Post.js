import Top from "./Top";
import Content from "./Content";
import Back from "./Body";

export default function Post(props){
    return (        
        <div class="post">

            <Top image={props.tImg} text={props.tTxt}/>
            <Content image={props.cImg}/>
            <Back image={props.bImg} likes={props.bLike} others={props.bOthers}/>

        </div>
    );
}