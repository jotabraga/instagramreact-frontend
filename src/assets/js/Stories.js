import Story from "./Story";

export default function Stories(){

    const content = [
        {image: "../img/9gag.svg" , text: "9gag"},
        {image: "../img/meowed.svg" , text: "meowed"},
        {image: "../img/barked.svg" , text: "barked"},
        {image: "../img/nathanwpylestrangeplanet.svg" , text: "nathanwpylestrangeplanet"},
        {image: "../img/wawawicomics.svg" , text: "wawawicomics"},
        {image: "../img/respondeai.svg" , text: "respondeai"},
        {image: "../img/filomoderna.svg" , text: "filomoderna"},
        {image: "../img/memeriagourmet.svg" , text: "memeriagourmet"}
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