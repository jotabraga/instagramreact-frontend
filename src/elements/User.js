export default function User(props){
    return(
        <div class="usuario">
            <img src={props.image} alt=""/>
            <div class="texto">
            <strong>{props.title}</strong>
            {props.subtitle}
            </div>
        </div>
    );
}
