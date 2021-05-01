
export default function Sugestion(props){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                <div class="nome">{props.tTxt}</div>
                <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
            </div>
    );
}