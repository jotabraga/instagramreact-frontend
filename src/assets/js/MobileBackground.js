export default function MobileBackground(){

    const itens = ["home", "add-circle-outline", "heart-outline", "person-outline"];
    
    return (
        <div class="fundo-mobile">
            {itens.map(item => <ion-icon name="item"></ion-icon>)}
        </div>
    );
}
