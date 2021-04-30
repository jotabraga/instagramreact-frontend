import Top from "./Top";
import Content from "./Content";
import Back from "./Body";

export default function Post(props){
    return (        
        <div class="post">

            <Top />
            <Content />
            <Back />
            
        </div>
    );
}