
export default function Top(props){
    return(
        <div class="topo">
            <div class="usuario">
            <img src={props.image} alt=""/>
            {props.text}
            </div>
            <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}