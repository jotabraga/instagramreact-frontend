import Story from "./Story";

export default function Stories(){

    const content = [
        {image: "assets/img/9gag.svg" , text: "9gag"},
        {image: "assets/img/meowed.svg" , text: "meowed"},
        {image: "assets/img/barked.svg" , text: "barked"},
        {image: "assets/img/nathanwpylestrangeplanet.svg" , text: "nathanwpylestrangeplanet"},
        {image: "assets/img/wawawicomics.svg" , text: "wawawicomics"},
        {image: "assets/img/respondeai.svg" , text: "respondeai"},
        {image: "assets/img/filomoderna.svg" , text: "filomoderna"},
        {image: "assets/img/memeriagourmet.svg" , text: "memeriagourmet"}
    ];

    return(
        
        <div class="stories">

            {content.map(item => <Story image={item.image} text={item.text} />)}            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

        </div>

    );
}