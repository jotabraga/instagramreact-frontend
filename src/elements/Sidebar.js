import Sugestion from "./Sugestion";

export default function Sidebar(){

    const sugestionData = [
        {image: "assets/img/bad.vibes.memes.svg" ,name: "bad.vibes.memes"},
        {image: "assets/img/chibirdart.svg",name: "chibirdart"},
        {image: "assets/img/razoesparaacreditar.svg",name: "razoesparaacreditar"},
        {image: "assets/img/adorable_animals.svg",name: "adorable_animals"},
        {image: "assets/img/smallcutecats.svg",name: "smallcutecats"}
    ]
    
    return (

        

        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                <strong>catanacomics</strong>
                Catana
                </div>
            </div>
            
            <div class="sugestoes">
                <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
                </div>
            
            {sugestionData.map(item => <Sugestion image={item.image} tTxt={item.name}/>)}


            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
            </div>
    );
}